import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  QuestionnaireData,
  questionnaireSchema,
} from "@/lib/validations/questionnaire";
import { StepOne } from "./StepOne";
import { Button } from "../ui/button";

export function QuestionnaireForm() {
  const [step, setStep] = useState(1);

  const methods = useForm({
    resolver: zodResolver(questionnaireSchema),
    defaultValues: {
      /* initial empty vals */
    },
  });

  type FieldName = keyof QuestionnaireData;
  // Define which fields belong to which step
  const stepFields: Record<number, FieldName[]> = {
    1: ["name", "travel_style"],
    2: ["interests", "duration"],
    // etc...
  };

  const handleNext = async (e: React.MouseEvent) => {
    e.preventDefault(); // Stop form submission on "Next" click
    // Validate current step fields before moving
    const fieldsToValidate = stepFields[step as keyof typeof stepFields];
    const isValid = await methods.trigger(fieldsToValidate);

    if (isValid) setStep((s) => s + 1);
  };

  const onSubmit = (data: any) => {
    console.log("Final Data:", data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {step === 1 && <StepOne />}
        {/* {step === 2 && (
          <StepTwo onNext={() => setStep(3)} onPrev={() => setStep(1)} />
        )} */}
        {/* ... steps 3 and 4 ... */}

        {/* Render Footer Buttons based on step */}
        <div className="grid grid-cols-6 max-w-4xl text-center items-center justify-center mx-auto pt-6">
          {/* {step > 1 && (
            <button type="button" onClick={handlePrev}>
              Back
            </button>
          )} */}

          {step < 4 ? (
            <div className="col-span-2 col-end-7 ">
              <Button onClick={handleNext}>Continue</Button>
            </div>
          ) : (
            <button type="submit">Submit</button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}
