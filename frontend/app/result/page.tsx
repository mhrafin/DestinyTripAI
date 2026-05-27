import {
  Banknote,
  Clock,
  Heart,
  Info,
  MapPin,
  PlaneTakeoff,
  Star,
} from "lucide-react";
import Image from "next/image";
import LZString from "lz-string";

async function getRelatedImage(query: string) {
  const res = await fetch(
    `https://api.pexels.com/v1/search?query=${query}&per_page=1`,
    {
      method: "GET",
      headers: { Authorization: `${process.env.PEXELS_API_KEY}` },
    },
  );

  if (!res.ok) {
    const errorText = res.text();
    throw new Error(`${res.status} ${res.statusText} - ${errorText}`);
  }
  return res.json();
}

export const ActivityCard = async ({
  name,
  time,
  description,
}: {
  name: string;
  time: string;
  description: string;
}) => {
  const relatedImage = await getRelatedImage(name);
  return (
    <div className=" rounded-xl px-3 ">
      <div className="bg-white rounded-xl p-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 w-40 shrink-0">
            <Clock size={18} />
            <p className="text-sm">{time}</p>
          </div>
          <div className="grow">
            <h4 className="text-lg font-semibold">{name}</h4>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
          <div className="relative w-40 h-32 rounded-xl overflow-hidden ml-auto shrink-0">
            <Image
              src={relatedImage?.photos?.[0]?.src?.landscape || ""}
              alt={name}
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ItineraryCard = ({
  day,
  day_title,
  day_short_description,
  activities,
  cost,
}: {
  day: number;
  day_title: string;
  day_short_description: string;
  activities: {
    name: string;
    time: string;
    description: string;
  }[];
  cost: number;
}) => {
  return (
    <div className=" rounded-xl py-6 px-3">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex flex-col gap-2 mb-4">
          <h3 className="text-2xl font-bold">
            Day {day}: {day_title}
          </h3>
          <p className="text-sm text-gray-500">{day_short_description}</p>
        </div>
        {/* cost */}
        <div className="ml-auto flex items-center gap-1">
          <Banknote size={18} />
          <p className="text-sm">{cost}</p>
        </div>
      </div>

      {/* As many ActivityCard as many activities */}
      {activities.map((activity, index) => (
        <ActivityCard
          key={index}
          name={activity.name}
          time={activity.time}
          description={activity.description}
        />
      ))}
    </div>
  );
};

async function getCityImageSrc(query: string) {
  const res = await fetch(
    `https://api.pexels.com/v1/search?query=${query}&per_page=1`,
    {
      method: "GET",
      headers: { Authorization: `${process.env.PEXELS_API_KEY}` },
    },
  );

  if (!res.ok) {
    const errorText = res.text();
    throw new Error(`${res.status} ${res.statusText} - ${errorText}`);
  }
  return res.json();
}

export default async function ResultPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const compressedData = resolvedSearchParams.data;

  let tripData: any = null;

  const fallbackData =
    "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-vnAB-pSBbKCgChgcC1FRW5Hs-ylZDq13IM5MACiSTpR+DuLA6ThBCEiPowhBswh00LMg5IJsjlYIxCVWylzcTILFJbOhYQn5BB7n3RSUz2F-BAAANTAEWBcgDzbT1snvG5YssAtm2KuNAoIhBzDHNsPl6rRLPGDgI3EU47l4F0OCPIpA4HUQAFbqDXDg1a3ZSAxJdR4sqXw0SNTOSyj5uB148gyGuMxB0CXkF9jyIgNiH4gHseY1hzi4VMOooFHUqqTZJgSSmxsvUFBQiut2JJRYdzSOUdip0wbcT1C5HGhxh1LHMGsak5A6TTCPyyeoHJ1I+Brh0L0YpzgD6EPKToKpJMamw1ppfXC1EKAQqhfy-qSZXEpFfou0mKDJlsKHp7cselLQYDtoFXQa5wHnyglyc2WBgrhjJPyYSTqq4m13Y8yQzydSvL1oYm2oEz6QRxC+k1P8k2QJMVOFgCD1CGAIMht4VtwW3odjC6ZCqMxklCIQDZ+JeBCKSPnNa6qoRchrBOHkuQQjTURsh5RqH0OwktfIE6eVAo+q3D4AhkaJC7vOge82r0wUSq7lKl+2bYUzLsK9c2BIhGI13XApIdyYxTnVbdfNEI+3uHUBkod6dckRHyRDIpVh7AzsLncQuhcgA";
  let dataToUse = compressedData || fallbackData;

  if (dataToUse) {
    try {
      const decompressedData =
        LZString.decompressFromEncodedURIComponent(dataToUse);
      if (decompressedData) {
        tripData = JSON.parse(decompressedData);
        if (dataToUse === fallbackData) {
          console.log("Trip data successfully retrieved from fallback.");
        } else {
          console.log("Trip data successfully retrieved from URL:", tripData);
        }
      } else {
        if (dataToUse !== fallbackData) {
          console.error("Failed to decompress data from URL. Using fallback.");
          const fallbackDecompressed =
            LZString.decompressFromEncodedURIComponent(fallbackData);
          if (fallbackDecompressed) {
            tripData = JSON.parse(fallbackDecompressed);
          }
        }
      }
    } catch (err) {
      console.error("Error parsing trip data:", err);
    }
  }

  const imageData = tripData?.itinerary?.location
    ? await getCityImageSrc(tripData.itinerary.location)
    : null;
  const imageUrl = imageData?.photos?.[0]?.src?.landscape || "";

  if (!tripData?.itinerary) {
    return (
      <section className="bg-blue-50 min-h-screen flex items-center justify-center">
        <div className="p-8 bg-white rounded-xl shadow-md text-center max-w-md">
          <h2 className="text-2xl font-bold mb-4">No Itinerary Found</h2>
          <p className="text-gray-600 mb-6">
            We couldn't find an itinerary for this trip. It might still be
            generating or there was an error.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-blue-50 min-h-screen">
      <div className="p-16 bg-blue-50 max-w-7xl mx-auto flex flex-col gap-10">
        {/* City Image And User's Preference */}
        <div className="relative w-full h-100 *:rounded-xl">
          <div className="absolute inset-0 bg-linear-to-t from-black to-transparent z-10"></div>
          <Image
            src={imageUrl}
            fill
            alt={imageData.photos?.[0]?.alt}
            className="object-cover rounded-xl"
          />
          <div className="flex justify-between items-end bottom-0 z-20 w-full absolute text-white p-8 gap-4">
            <div className="flex flex-col gap-2 shrink">
              <div className="bg-blue-900 w-fit rounded-xl p-1 px-2">
                {tripData?.travel_style?.toUpperCase() || "UNKNOWN"} TRIP
              </div>
              <p>{tripData?.name || "Trip"}</p>
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <p>{tripData.itinerary.location}</p>
              </div>
            </div>
            <div className="shrink-0">
              <div className="text-black grid grid-cols-3 w-100 rounded-xl bg-white p-3 ">
                <div className="flex flex-col justify-center">
                  <p>Duration</p>
                  <div className="flex items-center gap-1">
                    <Clock size={18} />
                    <p className="text-sm">{tripData?.duration || 0} Days</p>
                  </div>
                </div>
                <div className="flex flex-col  items-center border-r border-l border-gray-400 px-3">
                  <p>Budget</p>
                  <div className="flex items-center gap-1">
                    <Banknote size={18} />
                    <p className="text-sm">{tripData?.budget || "N/A"}</p>
                  </div>
                </div>
                <div className="pl-3 text-right flex flex-col justify-center">
                  <p>Departing</p>
                  <div className="flex items-center gap-1 justify-end">
                    <PlaneTakeoff size={18} />
                    <p className="text-sm">
                      {tripData?.departure_city || "Unknown"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Trip Details */}
        <div className="grid grid-cols-3 gap-4 mt-10 *:rounded-xl">
          <div className="bg-white col-span-2 p-4">
            <div className="flex items-center gap-2 mb-4">
              <Info />
              <h2 className="text-4xl font-bold">Trip Overview</h2>
            </div>
            <p className="text-gray-600">{tripData.itinerary.description}</p>
          </div>
          <div className="flex flex-col gap-4 *:rounded-xl">
            <div className="bg-white p-4">
              <div className="flex items-center gap-2 mb-4">
                <Heart />
                <h2 className="text-lg font-bold">Match Reason</h2>
              </div>
              <p className="text-gray-600">{tripData.itinerary.match_reason}</p>
            </div>
            <div className="bg-white p-4">
              <div className="flex items-center gap-2 mb-4">
                <Star />
                <h2 className="text-lg font-bold">Top Attractions</h2>
              </div>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                {tripData.itinerary.top_attractions?.map(
                  (attraction: string, index: number) => (
                    <li key={index}>{attraction}</li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
        {/* The Itinerary */}
        <div className="flex gap-4 mt-10 *:rounded-xl">
          <div className="w-fit shrink-0">The Itinerary</div>
          <div className="border-b border-gray-400 w-full h-0 self-center"></div>
        </div>
        {/* Based on number of days, there will that many ItineraryCard */}
        {Array.from({ length: tripData.duration || 0 }, (_, i) => (
          <ItineraryCard
            key={i}
            day={i + 1}
            day_title={
              tripData.itinerary.itinerary?.[i]?.day_title || `Day ${i + 1}`
            }
            day_short_description={
              tripData.itinerary.itinerary?.[i]?.day_short_description || ""
            }
            activities={tripData.itinerary.itinerary?.[i]?.activities || []}
            cost={tripData.itinerary.itinerary?.[i]?.cost || 0}
          />
        ))}
        {/* <pre>{JSON.stringify(imageData, null, 2)}</pre> */}
      </div>
    </section>
  );
}
