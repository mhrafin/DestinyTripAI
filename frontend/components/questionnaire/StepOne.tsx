"use client";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import {
  HandPlatter,
  Kayak,
  Landmark,
  RockingChair,
  Wallet,
} from "lucide-react";
import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";

export function StepOne() {
  const {
    setValue,
    watch,
    register,
    trigger,
    formState: { errors },
  } = useFormContext();

  const selectedStyle = watch("travel_style");

  return (
    <section>
      <div className="flex items-center justify-center pt-10">
        <Card className="max-w-4xl min-w-[320px] text-center items-center gap-0">
          <h1 className="font-plus-jakarta-sans text-5xl font-bold mt-4">
            Name Your Trip
          </h1>
          <Input
            {...register("name")}
            placeholder="Trip Name"
            className="m-6 w-[267px]"
          />
          {errors.name && (
            <p className="text-red-500">{errors.name.message as string}</p>
          )}
          <h1 className="font-plus-jakarta-sans text-5xl font-bold mt-4">
            What&apos;s your travel style?
          </h1>
          <p className="font-light mt-3">
            Select the vibe that best matches your ideal getaway. This helps us
            tailor your AI recommendations.
          </p>
          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row items-center justify-center *:h-64">
              <button
                type="button"
                onClick={() =>
                  setValue("travel_style", "luxury", { shouldValidate: true })
                }
                className={`m-4 grow ${selectedStyle === "luxury" ? "ring-4 rounded-4xl transition-all ring-black" : ""}`}
              >
                <Card className="h-full relative overflow-hidden p-0">
                  <div className="absolute z-10 p-6 flex flex-col gap-1 text-left pointer-events-none bottom-0">
                    <HandPlatter className="bg-white p-2 rounded-full w-10 h-10 text-black" />
                    <CardTitle className="drop-shadow-md">Luxury</CardTitle>
                    <CardDescription className="drop-shadow-md">
                      Five-star resorts, private tours, and unparalleled
                      comfort.
                    </CardDescription>
                  </div>
                  <div className="absolute inset-0 z-5 bg-linear-to-t from-white to-transparent pointer-events-none"></div>
                  <Image
                    className="hover:scale-105 transition-transform duration-300 object-cover"
                    width={500}
                    height={500}
                    src={"/images/luxury.jpg"}
                    alt="image"
                  />
                </Card>
              </button>
              <button
                type="button"
                onClick={() =>
                  setValue("travel_style", "adventure", {
                    shouldValidate: true,
                  })
                }
                className={`m-4 grow ${selectedStyle === "adventure" ? "ring-4 rounded-4xl transition-all ring-black" : ""}`}
              >
                <Card className="h-full relative overflow-hidden p-0">
                  <div className="absolute z-10 p-6 flex flex-col gap-1 text-left pointer-events-none bottom-0">
                    <Kayak className="bg-white p-2 rounded-full w-10 h-10 text-black" />
                    <CardTitle className="drop-shadow-md ">Adventure</CardTitle>
                    <CardDescription className="drop-shadow-md">
                      Thrill-seeking, outdoor exploration, and getting off the
                      grid.
                    </CardDescription>
                  </div>
                  <div className="absolute inset-0 z-5 bg-linear-to-t from-white to-transparent pointer-events-none"></div>
                  <Image
                    className="hover:scale-105 transition-transform duration-300 object-cover h-full"
                    width={500}
                    height={500}
                    src={"/images/adventure.jpg"}
                    alt="image"
                  />
                </Card>
              </button>
              <button
                type="button"
                onClick={() =>
                  setValue("travel_style", "cultural", { shouldValidate: true })
                }
                className={`m-4 grow ${selectedStyle === "cultural" ? "ring-4 rounded-4xl transition-all ring-black" : ""}`}
              >
                <Card className="h-full relative overflow-hidden p-0">
                  <div className="absolute z-10 p-6 flex flex-col gap-1 text-left pointer-events-none bottom-0">
                    <Landmark className="bg-white p-2 rounded-full w-10 h-10 text-black" />
                    <CardTitle className="drop-shadow-md">Cultural</CardTitle>
                    <CardDescription className="drop-shadow-md">
                      Museums, historical landmarks, and local traditions.
                    </CardDescription>
                  </div>
                  <div className="absolute inset-0 z-5 bg-linear-to-t from-white to-transparent pointer-events-none"></div>
                  <Image
                    className="hover:scale-105 transition-transform duration-300 object-cover h-full"
                    width={500}
                    height={500}
                    src={"/images/cultural.jpg"}
                    alt="image"
                  />
                </Card>
              </button>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center *:h-64 ">
              <button
                type="button"
                onClick={() =>
                  setValue("travel_style", "relaxation", {
                    shouldValidate: true,
                  })
                }
                className={`m-4 grow ${selectedStyle === "relaxation" ? "ring-4 rounded-4xl transition-all ring-black" : ""}`}
              >
                <Card className="h-full md:flex-auto  relative overflow-hidden p-0">
                  <div className="absolute z-10 p-6 flex flex-col gap-1 text-left  pointer-events-none bottom-0">
                    <RockingChair className="bg-white p-2 rounded-full w-10 h-10 text-black" />
                    <CardTitle className="drop-shadow-md">Relaxation</CardTitle>
                    <CardDescription className="drop-shadow-md">
                      Beaches, spas, slow mornings, and absolutely no strict
                      itineraries.
                    </CardDescription>
                  </div>
                  <div className="absolute inset-0 z-5 bg-linear-to-t from-white to-transparent pointer-events-none"></div>
                  <Image
                    className="hover:scale-105 transition-transform duration-300 object-cover object-bottom h-full"
                    width={600}
                    height={500}
                    src={"/images/relaxation.jpg"}
                    alt="image"
                  />
                </Card>
              </button>
              <button
                type="button"
                onClick={() =>
                  setValue("travel_style", "budget", { shouldValidate: true })
                }
                className={`m-4 grow ${selectedStyle === "budget" ? "ring-4 rounded-4xl transition-all ring-black" : ""}`}
              >
                <Card className="h-full md:w-[267px] md:flex-none  relative overflow-hidden p-0">
                  <div className="absolute z-10 p-6 flex flex-col gap-1 text-left pointer-events-none bottom-0">
                    <Wallet className="bg-white p-2 rounded-full w-10 h-10 text-black" />
                    <CardTitle className="drop-shadow-md">Budget</CardTitle>
                    <CardDescription className="drop-shadow-md">
                      Hostels, street food, and maximizing value on every
                      corner.
                    </CardDescription>
                  </div>
                  <div className="absolute inset-0 z-5 bg-linear-to-t from-white to-transparent pointer-events-none"></div>
                  <Image
                    className="hover:scale-105 transition-transform duration-300 object-cover object-[25%_75%] h-full"
                    width={500}
                    height={500}
                    src={"/images/budget.jpg"}
                    alt="image"
                  />
                </Card>
              </button>
            </div>
          </div>
          {errors.travel_style && (
            <p className="text-red-500">
              {errors.travel_style.message as string}
            </p>
          )}
        </Card>
      </div>
    </section>
  );
}
