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
              <Card className="m-4 grow">
                <Image
                  className="hover:scale-105 transition-transform duration-300 "
                  width={500}
                  height={500}
                  src={"/images/cartagena-boat-rental-colombia.jpg"}
                  alt="image"
                />
              </Card>
              <Card className="m-4 grow">
                <Image
                  className="hover:scale-105 transition-transform duration-300 "
                  width={500}
                  height={500}
                  src={"/images/cartagena-boat-rental-colombia.jpg"}
                  alt="image"
                />
              </Card>
              <Card className="m-4 grow">
                <Image
                  className="hover:scale-105 transition-transform duration-300 "
                  width={500}
                  height={500}
                  src={"/images/cartagena-boat-rental-colombia.jpg"}
                  alt="image"
                />
              </Card>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center *:h-64">
              <Card className="m-4 md:w-[70%] grow md:overflow-hidden p-0">
                <Image
                  className="hover:scale-105 transition-transform duration-300 w-full md:h-full md:object-cover md:object-center"
                  width={500}
                  height={500}
                  src={"/images/cartagena-boat-rental-colombia.jpg"}
                  alt="image"
                />
              </Card>
              <Card className="m-4 md:w-[32%] grow overflow-hidden p-0">
                <Image
                  className="hover:scale-105 transition-transform duration-300 w-full md:h-full md:object-cover md:object-center"
                  width={500}
                  height={500}
                  src={"/images/cartagena-boat-rental-colombia.jpg"}
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
