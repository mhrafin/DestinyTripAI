"use client";

import { CalendarDays, Wallet } from "lucide-react";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import Image from "next/image";

export const ClimateButton = (props) => {
  const { icon, label, isSelected, imageSrc, imagePosition, ...rest } = props;
  return (
    <button {...rest}>
      <Card
        className={`overflow-hidden relative w-full aspect-square gap-4 bg-background  hover:shadow-xl hover:bg-card ${isSelected ? "ring-4 rounded-4xl transition-all ring-black" : ""}`}
      >
        {/* <div className="flex bg-white p-2 rounded-full w-15 h-15 shrink-0 text-black items-center justify-center">
          {icon}
        </div> */}
        <Image
          src={imageSrc || ""}
          fill={true}
          alt={label}
          className={`hover:scale-105 transition-transform duration-100 object-cover object-bottom w-full ${imagePosition}`}
        />
        <div className="absolute inset-0 z-5 bg-linear-to-t from-black/70 to-transparent pointer-events-none" />
        <p className="font-bold text-xl text-white absolute z-10 pointer-events-none m-10 bottom-0 ">
          {label}
        </p>
      </Card>
    </button>
  );
};

export function StepThree() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center pt-10 w-full max-w-4xl">
        <Card className="w-full min-w-[320px] text-left gap-0 p-14">
          <div className="m-4">
            <h2 className="font-plus-jakarta-sans text-4xl font-bold my-2">
              How many Days
            </h2>
            <p className="my-2">Tell us the ideal length of your trip.</p>
            <div className="relative flex items-center group">
              <CalendarDays className="absolute text-muted-foreground group-focus-within:text-black" />
              <Input
                className="pl-8 border-gray-400 bg-card border-0 border-b-2 rounded-none shadow-none focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-black w-[256px]"
                placeholder="e.g. 7"
              />
            </div>
          </div>
          <div className="m-4">
            <h2 className="font-plus-jakarta-sans text-4xl font-bold mt-4">
              Budget Range
            </h2>
            <p className="my-2">
              Provide us with the budget you are comfortable with.
            </p>
            <div className="relative flex items-center group">
              <Wallet className="absolute text-muted-foreground group-focus-within:text-black" />
              <Input
                className="pl-8 border-gray-400 bg-card border-0 border-b-2 rounded-none shadow-none focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-black w-[256px]"
                placeholder="5,000 USD"
              />
            </div>
          </div>
          <div className="m-4">
            <h2 className="font-plus-jakarta-sans text-4xl font-bold mt-4">
              Preferred Climate
            </h2>
            <p className="my-2">
              What kind of weather makes your perfect getaway?
            </p>
            <div className="grid grid-cols-3 gap-4 m-2 mt-4">
              <ClimateButton label="Tropical" imageSrc="/images/tropical.jpg" />
              <ClimateButton
                label="Temperate"
                imageSrc="/images/temperate.jpg"
              />
              <ClimateButton label="Cold" imageSrc="/images/cold.jpg" />
              <ClimateButton label="Arid" imageSrc="/images/arid.jpg" />
              <ClimateButton
                label="Mediterranean"
                imageSrc="/images/mediterranean.jpg"
              />
              <ClimateButton
                label="Surprise Me!"
                imageSrc="/images/any.jpg"
                imagePosition="object-center"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
