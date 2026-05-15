"use client";
import { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import {
  HandPlatter,
  Kayak,
  Landmark,
  RockingChair,
  Wallet,
} from "lucide-react";

export default function Home() {
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  return (
    <section>
      <div className="flex items-center justify-center pt-10">
        <div className="w-screen max-w-4xl text-center">
          <h1 className="font-plus-jakarta-sans text-5xl  font-bold">
            What's your travel style?
          </h1>
          <p className="font-light">
            Select the vibe that best matches your ideal getaway. This helps us
            tailor your AI recommendations.
          </p>
          <div className="flex flex-col ">
            <div className="flex flex-col md:flex-row items-center justify-center *:h-64">
              <button
                onClick={() => setSelectedStyle("luxury")}
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
                onClick={() => setSelectedStyle("adventure")}
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
                onClick={() => setSelectedStyle("cultural")}
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
                onClick={() => setSelectedStyle("relaxation")}
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
                onClick={() => setSelectedStyle("budget")}
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
        </div>
      </div>
    </section>
  );
}
