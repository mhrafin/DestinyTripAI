import logging
import os

from dotenv import load_dotenv
from openai import OpenAI
from pydantic import BaseModel, Field

from .models import Questionnaire

load_dotenv()
API_KEY = os.getenv("OPENAI_API_KEY")
logger = logging.getLogger(__name__)


class Activity(BaseModel):
    name: str
    time: str
    description: str


class Itinerary(BaseModel):
    day: int
    day_title: str
    day_short_description: str = Field(
        max_length=100, description="A brief summary of the day's activities"
    )
    activities: list[Activity]
    cost: str = Field(
        description="Estimated cost for the day's activities in user's currency"
    )


class Destination(BaseModel):
    location: str = Field(
        description="The recommended destination for the trip, including city and country"
    )
    match_reason: str
    top_attractions: list[str] = Field(
        max_items=3,
        description="A list of the top 3 attractions at the destination that align with the user's interests and travel style",
    )
    description: str = Field(
        min_length=300,
        description="A detailed description of the destination",
    )
    itinerary: list[Itinerary]


class ItineraryService:
    def __init__(self):
        # logger.debug("Initializing ItineraryService")
        self.client = OpenAI(api_key=API_KEY, timeout=30.0)

    def generate_itinerary(self, questionnaire_id):
        # logger.debug("Generating itinerary for questionnaire_id=%s", questionnaire_id)
        questionnaire = Questionnaire.objects.get(id=questionnaire_id)
        # logger.debug(
        #     "Loaded questionnaire id=%s travel_style=%s duration=%s budget=%s currency=%s",
        #     questionnaire.id,
        #     questionnaire.travel_style,
        #     questionnaire.duration,
        #     questionnaire.budget,
        #     questionnaire.currency,
        # )
        prompt = self._create_prompt(questionnaire)
        # logger.debug("Prompt built for questionnaire_id=%s chars=%s", questionnaire_id, len(prompt))
        response = self.client.responses.parse(
            model="gpt-5-nano-2025-08-07",
            instructions=prompt[1],
            input=prompt[0],
            text_format=Destination,
            max_output_tokens=16384,
        )
        logger.debug(
            "OpenAI response received for questionnaire_id=%s output_chars=%s",
            questionnaire_id,
            len(response.output_text or ""),
        )
        return response.output_parsed

    def _create_prompt(self, questionnaire):
        interests = ", ".join(
            [interest.name for interest in questionnaire.interests.all()]
        )
        # logger.debug(
        #     "Creating prompt for questionnaire_id=%s interests_count=%s",
        #     questionnaire.id,
        #     questionnaire.interests.count(),
        # )

        instruction = (
            "You are an expert travel planner. Given a traveler profile, generate a detailed, personalized trip plan.\n"
            f"Total trip cost must not exceed {questionnaire.budget} including estimated costs for flights, accommodations, activities, and meals.\n"
            f"{'Destination can be anywhere in the world.' if questionnaire.abroad_trip_flex else 'Destination must be within the same country as departure city.'}\n"
            f"Climate must match preference: {questionnaire.climate_preference}.\n"
            f"All activities and recommendations must align with {questionnaire.travel_style} travel style.\n"
            f"Tailor every day to these interests: {interests}\n"
        )

        input = (
            f"Plan a trip for this traveler::\n"
            f"Name: {questionnaire.name}\n"
            f"Travel Style: {questionnaire.travel_style}\n"
            f"Interests: {interests}\n"
            f"Duration: {questionnaire.duration} days\n"
            f"Budget: {questionnaire.budget}"
            f"Climate Preference: {questionnaire.climate_preference}\n"
            f"Departure City: {questionnaire.departure_city}\n"
            f"Open to International Travel: {'Yes' if questionnaire.abroad_trip_flex else 'No, domestic only'}\n"
        )
        print("Instruction for OpenAI:", instruction)  # Debugging statement
        print("Input for OpenAI:", input)  # Debugging statement
        return input, instruction
