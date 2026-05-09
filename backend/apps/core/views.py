from rest_framework import viewsets, status
from rest_framework.response import Response
from .services import ItineraryService

from core.models import Questionnaire
from core.serializers import QuestionnaireSerializer


class QuestionnaireViewSet(viewsets.ModelViewSet):
    queryset = Questionnaire.objects.all()
    serializer_class = QuestionnaireSerializer

    def create(self, request, *args, **kwargs):
        # print("Received data:", request.data)  # Debugging statement
        # print("Name:", request.data.get("name"))  # Debugging statement
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        questionnaire = serializer.save()
        # Generate itinerary after questionnaire is created
        itinerary = ItineraryService().generate_itinerary(questionnaire.id)
        # Build response payload from serialized data, then add itinerary.
        data = serializer.data.copy()
        data["itinerary"] = itinerary

        return Response(data, status=status.HTTP_201_CREATED)
