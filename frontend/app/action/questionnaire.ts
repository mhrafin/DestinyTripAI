"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function submitQuestionnaire(data: any) {
  const res = await fetch(`${process.env.API_URL}/api/questionnaires/`, {
    // Replace endpoint
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

  (await cookies()).set("questionnaireData", JSON.stringify(resultData), {
    maxAge: 60 * 60,
    httpOnly: true,
    path: "/",
  });

  redirect("/result");
}
