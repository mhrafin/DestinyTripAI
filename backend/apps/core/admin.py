from django.contrib import admin

from core.models import Questionnaire
from core.models import Interest

# Register your models here.
admin.site.register(Questionnaire)
admin.site.register(Interest)