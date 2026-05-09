from django.urls import include, path
from rest_framework.routers import DefaultRouter

from core.views import QuestionnaireViewSet

router = DefaultRouter()
router.register(r"questionnaires", QuestionnaireViewSet, basename="questionnaire")

urlpatterns = [
    path("", include(router.urls)),
]
