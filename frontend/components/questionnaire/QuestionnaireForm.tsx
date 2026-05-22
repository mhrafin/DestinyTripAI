import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import {
  QuestionnaireData,
  questionnaireSchema,
} from "@/lib/validations/questionnaire";
import { StepOne } from "./StepOne";
import { Button } from "../ui/button";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { StepFour } from "./StepFour";
import { LinearProgressWithLabelAndValue } from "../ui/linear-progress-with-label";
import React from "react";

export function QuestionnaireForm() {
  const [progress, setProgress] = React.useState(0);
  const [isLoading, setIsLoading] = useState(true); // Set to true to start progress automatically

  const [step, setStep] = useState(1);

  useEffect(() => {
    if (step === 5 && progress < 100 && isLoading) {
      setTimeout(() => setProgress((prev) => Math.min(100, prev + 1)), 50);
    }
  }, [step, progress, isLoading]);

  const methods = useForm({
    resolver: zodResolver(questionnaireSchema),
    defaultValues: {
      name: "",
      travel_style: "luxury",
      interests: [],
      duration: 1,
      budget: "",
      climate_preference: "any",
      departure_city: "",
      abroad_trip_flex: false,
    },
  });

  type FieldName = keyof QuestionnaireData;
  // Define which fields belong to which step
  const stepFields: Record<number, FieldName[]> = {
    1: ["name", "travel_style"],
    2: ["interests"],
    3: ["duration", "budget", "climate_preference"],
    4: ["departure_city", "abroad_trip_flex"],
  };

  const handleNext = async (e: React.MouseEvent) => {
    e.preventDefault(); // Stop form submission on "Next" click
    // Validate current step fields before moving
    const fieldsToValidate = stepFields[step as keyof typeof stepFields];
    const isValid = await methods.trigger(fieldsToValidate);

    if (isValid) {
      console.log(`step ${step} data:`, methods.getValues());
      setStep((s) => s + 1);
    }
  };
  const handlePrev = async (e: React.MouseEvent) => {
    e.preventDefault(); // Stop form submission on "Next" click
    // Validate current step fields before moving
    setStep((s) => s - 1);
    const fieldsToValidate = stepFields[step as keyof typeof stepFields];
  };

  const onSubmit = (data: any) => {
    console.log("Final Data:", data);
    setStep((s) => s + 1);
  };

  const onError = (errors: any) => {
    console.log("Validation Errors:", errors);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
        {step === 1 && <StepOne />}
        {step === 2 && <StepTwo />}
        {step === 3 && <StepThree />}
        {step === 4 && <StepFour />}
        {step === 5 && <LinearProgressWithLabelAndValue value={progress} />}

        {/* Render Footer Buttons based on step */}
        {step < 5 && (
          <div className="grid grid-cols-6 max-w-4xl text-center items-center justify-center mx-auto pt-6">
            {step > 1 && (
              <div className="col-span-2 col-start-1">
                <Button type="button" onClick={handlePrev}>
                  Previous
                </Button>
              </div>
            )}

            {step < 4 ? (
              <div className="col-span-2 col-end-7 ">
                <Button type="button" onClick={handleNext}>
                  Continue
                </Button>
              </div>
            ) : (
              <div className="col-span-2 col-end-7">
                <Button type="submit" onSubmit={onSubmit}>
                  Submit
                </Button>
              </div>
            )}
          </div>
        )}
      </form>
    </FormProvider>
  );
}
