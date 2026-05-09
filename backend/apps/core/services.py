from openai import OpenAI
from .models import Questionnaire
from dotenv import load_dotenv
import logging
import os

load_dotenv()
API_KEY = os.getenv("API_KEY")
logger = logging.getLogger(__name__)


class ItineraryService:
    def __init__(self):
        logger.debug("Initializing ItineraryService")
        self.client = OpenAI(api_key=API_KEY)

    def generate_itinerary(self, questionnaire_id):
        logger.debug("Generating itinerary for questionnaire_id=%s", questionnaire_id)
        questionnaire = Questionnaire.objects.get(id=questionnaire_id)
        logger.debug(
            "Loaded questionnaire id=%s travel_style=%s duration=%s budget=%s currency=%s",
            questionnaire.id,
            questionnaire.travel_style,
            questionnaire.duration,
            questionnaire.budget,
            questionnaire.currency,
        )
        prompt = self._create_prompt(questionnaire)
        logger.debug("Prompt built for questionnaire_id=%s chars=%s", questionnaire_id, len(prompt))
        response = self.client.responses.create(
            model="gpt-5-nano-2025-08-07",
            input=[{"role": "user", "content": prompt}],
            # max_tokens=1000,
        )
        logger.debug(
            "OpenAI response received for questionnaire_id=%s output_chars=%s",
            questionnaire_id,
            len(response.output_text or ""),
        )
        return response.output_text

    def _create_prompt(self, questionnaire):
        interests = ", ".join(
            [interest.name for interest in questionnaire.interests.all()]
        )
        logger.debug(
            "Creating prompt for questionnaire_id=%s interests_count=%s",
            questionnaire.id,
            questionnaire.interests.count(),
        )
        prompt = (
            f"Create a travel itinerary for a trip with the following details:\n"
            f"- Travel Style: {questionnaire.travel_style}\n"
            f"- Interests: {interests}\n"
            f"- Duration: {questionnaire.duration} days\n"
            f"- Budget: {questionnaire.budget} {questionnaire.currency}\n"
            f"- Climate Preference: {questionnaire.climate_preference}\n"
            f"- Departure City: {questionnaire.departure_city}\n"
            f"Please provide a day-by-day itinerary with activities and destinations."
        )
        return prompt
