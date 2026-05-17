"use client";

import { useFormContext } from "react-hook-form";
import { Card } from "../ui/card";
import { Utensils } from "lucide-react";

export const InterestButton = (props) => {
  const { icon, label, ...rest } = props;
  return (
    <button {...rest}>
      <Card className="flex items-center justify-center h-32 w-32 gap-4 bg-background hover:scale-102 hover:shadow-xl hover:bg-card">
        <div className="flex bg-white p-2 rounded-full w-15 h-15 shrink-0 text-black items-center justify-center">
          {icon}
        </div>
        <p className="font-bold text-xl">{label}</p>
      </Card>
    </button>
  );
};

export function StepTwo() {
  const {
    setValue,
    formState: { errors },
  } = useFormContext();
  return (
    <section>
      <div className="flex items-center justify-center pt-10">
        <Card className="max-w-4xl min-w-[320px] text-center items-center gap-0 p-4">
          <h1 className="font-plus-jakarta-sans text-5xl font-bold mt-4">
            Tell us what you love
          </h1>
          <p className="font-light mt-3">
            Select the activities and vibes that make a trip perfect for you.
            Choose as many as you like.
          </p>
          <div className="flex mt-6">
            <InterestButton icon={<Utensils />} label={"Food"} />
          </div>
        </Card>
      </div>
    </section>
  );
}
