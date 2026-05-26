"use client";

import { useFormContext } from "react-hook-form";
import { Card } from "../ui/card";
import {
  Utensils,
  Mountain,
  CloudMoon,
  Landmark,
  ShoppingBag,
  Volleyball,
  Binoculars,
  SportShoe,
  Panda,
} from "lucide-react";
import React from "react";

interface InterestButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
  isSelected?: boolean;
}

export const InterestButton = (props: InterestButtonProps) => {
  const { icon, label, isSelected, ...rest } = props;
  return (
    <button {...rest} type="button">
      <Card
        className={`flex items-center justify-center h-32 w-32 gap-4 bg-background hover:scale-102 hover:shadow-xl hover:bg-card ${isSelected ? "ring-4 rounded-4xl transition-all ring-black" : ""}`}
      >
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
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const selectedInterests: Array<number> = watch("interests") || [];

  const handleToggle = (id: number) => {
    if (selectedInterests.includes(id)) {
      setValue(
        "interests",
        selectedInterests.filter((i) => i !== id),
      );
    } else {
      setValue("interests", [...selectedInterests, id]);
    }
  };
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
          <div className="grid grid-cols-3 gap-4 m-6">
            <InterestButton
              isSelected={selectedInterests.includes(1)}
              onClick={() => handleToggle(1)}
              icon={<Utensils />}
              label={"Food"}
            />
            <InterestButton
              isSelected={selectedInterests.includes(2)}
              onClick={() => handleToggle(2)}
              icon={<Mountain />}
              label={"Hiking"}
            />
            <InterestButton
              isSelected={selectedInterests.includes(3)}
              onClick={() => handleToggle(3)}
              icon={<CloudMoon />}
              label={"Nightlife"}
            />
            <InterestButton
              isSelected={selectedInterests.includes(4)}
              onClick={() => handleToggle(4)}
              icon={<Landmark />}
              label={"History"}
            />
            <InterestButton
              isSelected={selectedInterests.includes(5)}
              onClick={() => handleToggle(5)}
              icon={<ShoppingBag />}
              label={"Shopping"}
            />
            <InterestButton
              isSelected={selectedInterests.includes(6)}
              onClick={() => handleToggle(6)}
              icon={<Binoculars />}
              label={"Nature"}
            />
            <InterestButton
              isSelected={selectedInterests.includes(7)}
              onClick={() => handleToggle(7)}
              icon={<Volleyball />}
              label={"Beach"}
            />
            <InterestButton
              isSelected={selectedInterests.includes(8)}
              onClick={() => handleToggle(8)}
              icon={<SportShoe />}
              label={"Sports"}
            />
            <InterestButton
              isSelected={selectedInterests.includes(9)}
              onClick={() => handleToggle(9)}
              icon={<Panda />}
              label={"Wildlife"}
            />
          </div>
          {errors.interests && (
            <p className="text-red-500">{errors.interests.message as string}</p>
          )}
        </Card>
      </div>
    </section>
  );
}
