import { LocationEdit } from "lucide-react";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { useFormContext, Controller } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";
import { Field } from "../ui/field";
import { Label } from "../ui/label";

export function StepFour() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex items-center justify-center m-10">
      <Card className="max-w-4xl min-w-[320px] p-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-plus-jakarta-sans text-2xl font-bold p-2">
            Where are you starting from?
          </h2>
          <p>
            Let our AI know your departure point to optimize flights and routes.
          </p>
          <div className="relative flex items-center group mt-10 px-10">
            <LocationEdit className="absolute text-muted-foreground group-focus-within:text-black" />
            <Input
              {...register("departure_city")}
              className="pl-8 border-gray-400 bg-card border-0 border-b-2 rounded-none shadow-none focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-black max-w-[320px] w-full"
              placeholder="e.g., New York, Dhaka, or London"
            />
            {errors.departure_city && (
              <p className="text-red-500">
                {errors.departure_city.message as string}
              </p>
            )}
          </div>
          <Field orientation="horizontal" className="w-fit pt-10">
            <Controller
              name="abroad_trip_flex"
              control={control}
              render={({ field }) => (
                <Checkbox
                  id="abroad-flex-checkbox"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              )}
            />
            <Label htmlFor="abroad-flex-checkbox">
              I am flexible to go to an abroad trip
            </Label>
          </Field>
        </div>
      </Card>
    </div>
  );
}
