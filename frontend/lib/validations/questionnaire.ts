import { z } from "zod";

export const questionnaireSchema = z.object({
  name: z.string().min(1, "Name required"),
  travel_style: z.enum([
    "luxury",
    "budget",
    "adventure",
    "relaxation",
    "cultural",
  ]),
  interests: z.array(z.number()).min(1), // Assume Interest ID array
  duration: z.coerce.number().positive(),
  budget: z.string().min(1, "A budget is needed"),
  climate_preference: z.enum([
    "tropical",
    "temperate",
    "cold",
    "arid",
    "mediterranean",
    "any",
  ]),
  departure_city: z.string().min(1),
  abroad_trip_flex: z.boolean().default(false),
});

export type QuestionnaireData = z.infer<typeof questionnaireSchema>;
