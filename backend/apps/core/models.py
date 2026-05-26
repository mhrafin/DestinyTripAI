from django.db import models


class Interest(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Questionnaire(models.Model):
    name = models.CharField(max_length=255)
    travel_style = models.CharField(
        max_length=255,
        choices=[
            ("luxury", "Luxury"),
            ("budget", "Budget"),
            ("adventure", "Adventure"),
            ("relaxation", "Relaxation"),
            ("cultural", "Cultural"),
        ],
    )
    interests = models.ManyToManyField(Interest)
    duration = models.IntegerField(help_text="Duration of the trip in days")
    budget = models.CharField(
        max_length=10, help_text="Budget for the trip in user's currency"
    )

    climate_preference = models.CharField(
        max_length=255,
        choices=[
            ("tropical", "Tropical"),
            ("temperate", "Temperate"),
            ("cold", "Cold"),
            ("arid", "Arid"),
            ("mediterranean", "Mediterranean"),
            ("any", "Any / Surprise me!"),
        ],
    )
    departure_city = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    abroad_trip_flex = models.BooleanField(
        default=False,
        help_text="Whether the user is open to international travel (abroad trips)",
    )

    def __str__(self):
        return self.name
