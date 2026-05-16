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
  duration: z.number().positive(),
  budget: z.number().positive(),
  currency: z.string().default("USD"),
  climate_preference: z.enum(["tropical", "temperate", "cold", "arid", "any"]),
  departure_city: z.string().min(1),
  abroad_trip_flex: z.boolean().default(false),
});

export type QuestionnaireData = z.infer<typeof questionnaireSchema>;
