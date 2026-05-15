"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { StepOne } from "@/components/steps/step-one";

export default function Home() {
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  return (
    <>
      <StepOne selectedStyle={selectedStyle} setSelectedStyle={setSelectedStyle} />

      {/* Footer */}
      <section>
        <div className="grid grid-cols-6 max-w-4xl text-center items-center justify-center mx-auto pt-6">
          <div className="col-start-1 col-end-3">
            <Button>Back</Button>
          </div>
          <div className="col-span-2 col-end-7 ">
            <Button>Continue</Button>
          </div>
        </div>
      </section>
    </>
  );
}
