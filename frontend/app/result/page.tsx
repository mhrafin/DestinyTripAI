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

const MOCK_TRIP_DATA = {
  id: 27,
  name: "raf's relax trip",
  travel_style: "relaxation",
  duration: 3,
  budget: "5000 USD",
  climate_preference: "tropical",
  departure_city: "Dhaka",
  created_at: "2026-05-25T08:43:58.928010Z",
  abroad_trip_flex: true,
  interests: [1, 3, 6],
  itinerary: {
    name: "Phuket, Thailand",
    country: "Thailand",
    match_reason:
      "A tropical paradise within easy reach from Dhaka, Phuket offers pristine beaches, vibrant yet relaxed nightlife, superb Thai cuisine, and abundant nature experiences. The 3-day pace is perfect for a relaxing break with plenty of food-focused moments and easy nature escapes.",
    top_attractions: [
      "Bangla Road & relaxed beachfront nightlife",
      "Phang Nga Bay & James Bond Island",
      "Big Buddha Phuket",
      "Nai Harn Beach & Promthep Cape sunsets",
      "Phuket Old Town markets and street-food scene",
    ],
    description:
      "Three days of tropical relaxation in Phuket combining indulgent Thai food, easy coastal downtime, scenic viewpoints, and light nightlife. The plan emphasizes comfort, downtime by the sea, nature drives, and gentle evening experiences to unwind without rushing.",
    itinerary: [
      {
        day: 1,
        activities: [
          {
            name: "Arrive in Phuket and transfer to beachfront resort",
            time: "Morning",
            description:
              "Private transfer from Phuket Airport to a comfortable beachfront resort near Patong. Check-in and unwind by the pool or beach.",
          },
          {
            name: "Sunset at Promthep Cape",
            time: "Late afternoon",
            description:
              "Short drive to Promthep Cape for panoramic views and a golden hour sunset photo opportunity.",
          },
          {
            name: "Seafood dinner by the sea",
            time: "Evening",
            description:
              "Relaxed seafood dinner at a beachfront restaurant; sample local favorites and classic Thai dishes.",
          },
          {
            name: "Rooftop cocktail with sea view",
            time: "Night",
            description:
              "Unwind with a couple of cocktails at a chic rooftop bar overlooking the ocean.",
          },
        ],
        cost: 325.0,
      },
      {
        day: 2,
        activities: [
          {
            name: "Phang Nga Bay Island-Hopping Tour",
            time: "Morning",
            description:
              "Full-day escorted boat tour to Phang Nga Bay: limestone cliffs, sea caves, and options for canoeing; includes lunch on board.",
          },
          {
            name: "Relaxed beach return and dinner",
            time: "Evening",
            description:
              "Return to the resort for a light dinner featuring Thai specialties or fresh seafood by the beach.",
          },
        ],
        cost: 380.0,
      },
      {
        day: 3,
        activities: [
          {
            name: "Big Buddha Phuket & Nai Harn Beach",
            time: "Morning",
            description:
              "Visit the iconic Big Buddha temple and spend a serene time at Nai Harn Beach with gentle swimming and sunbathing.",
          },
          {
            name: "Phuket Old Town Market & Cooking Demo",
            time: "Afternoon",
            description:
              "Stroll the colorful lanes of Phuket Old Town, sample street foods, and enjoy a small Thai cooking demonstration.",
          },
          {
            name: "Farewell dinner and optional night market",
            time: "Evening",
            description:
              "Final Thai feast at a favorite local spot, with a relaxed stroll through a nearby night market for a few souvenirs.",
          },
        ],
        cost: 250.0,
      },
    ],
  },
};

// export const

async function getCityImageSrc(query: string) {
  const res = await fetch(
    `https://api.pexels.com/v1/search?query=${query}&per_page=1`,
    {
      method: "GET",
      headers: { Authorization: `${process.env.PIXELS_API_KEY}` },
    },
  );

  if (!res.ok) {
    const errorText = res.text();
    throw new Error(`${res.status} ${res.statusText} - ${errorText}`);
  }
  return res.json();
}

export default async function ResultPage() {
  let tripData = MOCK_TRIP_DATA;

  const imageData = await getCityImageSrc(tripData?.itinerary?.name);
  const imageUrl = imageData.photos?.[0]?.src?.landscape || "";

  return (
    <section>
      <div className="p-16 bg-blue-50">
        {/* City Image And User's Preference */}
        <div className="relative w-full h-100 *:rounded-xl">
          <div className="absolute inset-0 bg-linear-to-t from-black to-transparent z-10"></div>
          <Image
            src={imageUrl}
            fill
            alt={imageData.photos?.[0]?.alt}
            className="object-cover rounded-xl"
          />
          <div className="grid grid-cols-3 bottom-0 z-20 w-full absolute text-white p-8">
            <div className="grid col-span-2 gap-2 ">
              <div className="bg-blue-900 w-fit rounded-xl p-1">
                {tripData.travel_style.toUpperCase()} TRIP
              </div>
              <p>{tripData.name}</p>
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <p>{tripData.itinerary.name}</p>
              </div>
            </div>
            <div>
              <div className="text-black grid grid-cols-3 w-full rounded-xl bg-white p-3 ">
                <div className="flex flex-col justify-center">
                  <p>Duration</p>
                  <div className="flex items-center gap-1">
                    <Clock size={18} />
                    <p className="text-sm">{tripData.duration} Days</p>
                  </div>
                </div>
                <div className="flex flex-col  items-center border-r border-l border-gray-400 px-3">
                  <p>Budget</p>
                  <div className="flex items-center gap-1">
                    <Banknote size={18} />
                    <p className="text-sm">{tripData.budget}</p>
                  </div>
                </div>
                <div className="pl-3 text-right flex flex-col justify-center">
                  <p>Departing</p>
                  <div className="flex items-center gap-1 justify-end">
                    <PlaneTakeoff size={18} />
                    <p className="text-sm">{tripData.departure_city}</p>
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
                {tripData.itinerary.top_attractions.map((attraction, index) => (
                  <li key={index}>{attraction}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* <pre>{JSON.stringify(imageData, null, 2)}</pre> */}
      </div>
    </section>
  );
}
