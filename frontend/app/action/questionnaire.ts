"use server";

import { redirect } from "next/navigation";
import LZString from "lz-string";

export async function submitQuestionnaire(data: any) {
  const res = await fetch(`${process.env.API_URL}/api/questionnaires/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const errorText = await res.text();
    console.error("DRF Error Payload:", errorText);
    throw new Error(
      `DRF save fail: ${res.status} ${res.statusText} - ${errorText}`,
    );
  }
  const resultData = await res.json();
  console.log("Received result data from DRF:", resultData);

  const jsonString = JSON.stringify(resultData);
  console.log("Stringified result data:", jsonString);
  const compressedData = LZString.compressToEncodedURIComponent(jsonString);

  redirect(`/result?data=${compressedData}`);
}
