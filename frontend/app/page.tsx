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
              <Card className="m-4 grow relative overflow-hidden p-0">
                <div className="absolute z-10 p-6 flex flex-col gap-1 text-left">
                  <HandPlatter />
                  <CardTitle className="drop-shadow-md">Luxury</CardTitle>
                  <CardDescription className="drop-shadow-md">
                    Five-star resorts, private tours, and unparalleled comfort.
                  </CardDescription>
                </div>
                <div className="absolute inset-0 z-5 bg-linear-to-t from-white/50 to-transparent pointer-events-none"></div>
                <Image
                  className="hover:scale-105 transition-transform duration-300 object-cover"
                  width={500}
                  height={500}
                  src={"/images/luxury.jpg"}
                  alt="image"
                />
              </Card>
              <Card className="m-4 grow relative overflow-hidden p-0">
                <div className="absolute z-10 p-6 flex flex-col gap-1 text-left">
                  <Kayak />
                  <CardTitle className="drop-shadow-md">Adventure</CardTitle>
                  <CardDescription className="drop-shadow-md">
                    Thrill-seeking, outdoor exploration, and getting off the
                    grid.
                  </CardDescription>
                </div>
                <div className="absolute inset-0 z-5 bg-linear-to-t from-white/50 to-transparent pointer-events-none"></div>
                <Image
                  className="hover:scale-105 transition-transform duration-300 object-cover h-full"
                  width={500}
                  height={500}
                  src={"/images/adventure.jpg"}
                  alt="image"
                />
              </Card>
              <Card className="m-4 grow relative overflow-hidden p-0">
                <div className="absolute z-10 p-6 flex flex-col gap-1 text-left">
                  <Landmark />
                  <CardTitle className="drop-shadow-md">Cultural</CardTitle>
                  <CardDescription className="drop-shadow-md">
                    Museums, historical landmarks, and local traditions.
                  </CardDescription>
                </div>
                <div className="absolute inset-0 z-5 bg-linear-to-t from-white/50 to-transparent pointer-events-none"></div>
                <Image
                  className="hover:scale-105 transition-transform duration-300 object-cover h-full"
                  width={500}
                  height={500}
                  src={"/images/cultural.jpg"}
                  alt="image"
                />
              </Card>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center *:h-64 ">
              <Card className="m-4 md:flex-auto grow relative overflow-hidden p-0">
                <div className="absolute z-10 p-6 flex flex-col gap-1 text-left">
                  <RockingChair />
                  <CardTitle className="drop-shadow-md">Relaxation</CardTitle>
                  <CardDescription className="drop-shadow-md">
                    Beaches, spas, slow mornings, and absolutely no strict
                    itineraries.
                  </CardDescription>
                </div>
                <div className="absolute inset-0 z-5 bg-linear-to-t from-white/50 to-transparent pointer-events-none"></div>
                <Image
                  className="hover:scale-105 transition-transform duration-300 object-cover object-bottom h-full"
                  width={600}
                  height={500}
                  src={"/images/relaxation.jpg"}
                  alt="image"
                />
              </Card>
              <Card className="m-4 md:w-[267px] md:flex-none grow relative overflow-hidden p-0">
                <div className="absolute z-10 p-6 flex flex-col gap-1 text-left">
                  <Wallet />
                  <CardTitle className="drop-shadow-md">Budget</CardTitle>
                  <CardDescription className="drop-shadow-md">
                    Hostels, street food, and maximizing value on every corner.
                  </CardDescription>
                </div>
                <div className="absolute inset-0 z-5 bg-linear-to-t from-white/50 to-transparent pointer-events-none"></div>
                <Image
                  className="hover:scale-105 transition-transform duration-300 object-cover object-[25%_75%] h-full"
                  width={500}
                  height={500}
                  src={"/images/budget.jpg"}
                  alt="image"
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
