import {
  Banknote,
  Clock,
  Heart,
  Info,
  MapPin,
  PlaneTakeoff,
  Star,
} from "lucide-react";
import { cookies } from "next/headers";
import Image from "next/image";

const MOCK_TRIP_DATA = {
  id: 28,
  name: "Teegan Good",
  travel_style: "budget",
  duration: 3,
  budget: "5000 USD",
  climate_preference: "temperate",
  departure_city: "Dhaka",
  created_at: "2026-05-26T08:21:43.662886Z",
  abroad_trip_flex: true,
  interests: [4],
  itinerary: {
    name: "Istanbul",
    country: "Turkey",
    match_reason:
      "Temperate climate in spring/fall and abundant, well-preserved history make Istanbul ideal for a 3-day budget-focused trip. Rich UNESCO sites, compact historic core, and affordable public transport support a budget-friendly, history-centric itinerary from Dhaka.",
    top_attractions: [
      "Hagia Sophia (Ayasofya)",
      "Blue Mosque (Sultan Ahmed Mosque)",
      "Topkapi Palace",
      "Basilica Cistern",
      "Grand Bazaar",
      "Galata Tower",
      "Bosphorus Cruise (short)",
    ],
    description:
      "A compact 3-day budget-friendly exploration of Istanbul, focusing on its deep history and iconic monuments. Plan emphasizes temperate-season comfort (spring/fall) with efficient, affordable transit and wallet-friendly meals, while delivering a rich sense of the city’s Ottoman, Byzantine, and ancient roots.",
    itinerary: [
      {
        day: 1,
        day_title: "Arrival and Historic Core of Istanbul",
        day_short_description:
          "Settle in a budget-friendly hotel in Sultanahmet and begin with the city’s monumental history in the",
        activities: [
          {
            name: "Arrival and Check-in at budget hotel in Sultanahmet",
            time: "Morning",
            description:
              "Arrive from Dhaka and transfer to a budget-friendly hotel near the Historic Peninsula; drop bags and refresh.",
          },
          {
            name: "Hagia Sophia",
            time: "09:30–11:00",
            description:
              "Iconic monument with millennia of religious and architectural history; interior and exterior architecture overview.",
          },
          {
            name: "Blue Mosque",
            time: "11:15–12:00",
            description:
              "Historic mosque known for its six minarets and striking interior; plan modest dress and respectful conduct.",
          },
          {
            name: "Lunch in Sultanahmet",
            time: "12:30–13:30",
            description:
              "Budget-friendly Turkish fare (doner, kebab, or meze) near the historic core.",
          },
          {
            name: "Basilica Cistern",
            time: "14:00–15:00",
            description:
              "Atmospheric underground cistern with monumental columns and a hint of ancient engineering.",
          },
          {
            name: "Grand Bazaar stroll",
            time: "15:30–17:00",
            description:
              "Vibrant historic market district ideal for a low-cost taste of Istanbul’s commerce and crafts.",
          },
          {
            name: "Dinner near Sultanahmet",
            time: "19:00–21:00",
            description:
              "Affordable local restaurant or street-food options to cap the day.",
          },
        ],
        cost: 114.0,
      },
      {
        day: 2,
        day_title: "Palace, Museums, and the Bosphorus",
        day_short_description:
          "Immerse in Ottoman history at Topkapi Palace and museums, followed by a short Bosphorus cruise to a水",
        activities: [
          {
            name: "Topkapi Palace and Harem",
            time: "09:30–12:30",
            description:
              "Ottoman sultans’ residence with treasury exhibits and panoramic views over the Golden Horn.",
          },
          {
            name: "Istanbul Archaeology Museums",
            time: "13:00–15:00",
            description:
              "Extensive collection spanning ancient Mesopotamian, Greek, and Anatolian civilizations.",
          },
          {
            name: "Lunch break",
            time: "15:15–16:00",
            description:
              "Budget-friendly meal in the Eminönü/Sultanahmet area.",
          },
          {
            name: "Bosphorus Short Cruise",
            time: "17:00–18:30",
            description:
              "Relaxing ferry ride along the Bosphorus to view Istanbul from the water and its palatial waterfronts.",
          },
          {
            name: "Taksim & Istiklal Street stroll",
            time: "19:00–21:00",
            description:
              "Evening walk through modern Istanbul with casual dining options.",
          },
        ],
        cost: 124.0,
      },
      {
        day: 3,
        day_title: "Historical Neighborhoods and Departure",
        day_short_description:
          "Explore Galata, Karaköy, and the historic port vibe before departure.",
        activities: [
          {
            name: "Galata Tower",
            time: "09:00–10:00",
            description:
              "Panoramic views of the old city and harbor from the medieval tower.",
          },
          {
            name: "Karaköy & Spice Market exploration",
            time: "10:30–12:00",
            description:
              "Historic harbor district with street art, cafes, and markets; great for people-watching and architecture photos.",
          },
          {
            name: "Lunch and last-minute shopping",
            time: "12:30–14:00",
            description:
              "Budget-friendly street food and small souvenirs in the area.",
          },
          {
            name: "Return to hotel and check-out",
            time: "14:30–15:00",
            description: "Retrieve luggage and prepare for airport transfer.",
          },
          {
            name: "Flight back to Dhaka",
            time: "Evening",
            description:
              "Depart Istanbul for Dhaka; reflect on three days of ancient and Ottoman history.",
          },
        ],
        cost: 112.0,
      },
    ],
  },
};

async function getRelatedImage(query: string) {
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
        <div className="flex items-center  gap-2 ">
          <div className="flex items-center gap-2  w-40">
            <Clock size={18} />
            <p className="text-sm">{time}</p>
          </div>
          <div className="">
            <h4 className="text-lg font-semibold">{name}</h4>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
          <div className="relative w-40 h-30 rounded-xl overflow-hidden ml-auto">
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
  const cookieStore = await cookies();
  const questionnaireData = cookieStore.get("questionnaireData")?.value;
  console.log("Questionnaire Data from Cookies:", questionnaireData);

  let tripData = MOCK_TRIP_DATA;

  if (questionnaireData) {
    try {
      tripData = JSON.parse(questionnaireData);
      console.log("Parsed Questionnaire Data:", tripData);
      // Here you would typically send this data to your backend to get the trip recommendation
      // For now, we will just log it and use the MOCK_TRIP_DATA
    } catch (err) {
      console.error("Error parsing questionnaire data from cookies:", err);
    }
  } else {
    console.warn("No questionnaire data found in cookies.");
  }

  const imageData = await getCityImageSrc(tripData?.itinerary?.name);
  const imageUrl = imageData.photos?.[0]?.src?.landscape || "";

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
          <div className="grid grid-cols-3 bottom-0 z-20 w-full absolute text-white p-8">
            <div className="grid col-span-2 gap-2 ">
              <div className="bg-blue-900 w-fit rounded-xl p-1">
                {tripData.travel_style.toUpperCase()} TRIP
              </div>
              <p>{tripData.name}</p>
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <p>{tripData.itinerary.location}</p>
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
        {/* The Itinerary */}
        <div className="flex gap-4 mt-10 *:rounded-xl">
          <div className="w-fit shrink-0">The Itinerary</div>
          <div className="border-b border-gray-400 w-full h-0 self-center"></div>
        </div>
        {/* Based on number of days, there will that many ItineraryCard */}
        {Array.from({ length: tripData.duration }, (_, i) => (
          <ItineraryCard
            key={i}
            day={i + 1}
            day_title={tripData.itinerary.itinerary[i]?.day_title}
            day_short_description={
              tripData.itinerary.itinerary[i]?.day_short_description
            }
            activities={tripData.itinerary.itinerary[i]?.activities || []}
            cost={tripData.itinerary.itinerary[i]?.cost || 0}
          />
        ))}
        {/* <pre>{JSON.stringify(imageData, null, 2)}</pre> */}
      </div>
    </section>
  );
}
