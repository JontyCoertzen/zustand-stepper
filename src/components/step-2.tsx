import { useLeadStore } from "@/state/steps";
import React, { FormEvent, useRef } from "react";

export const Step2 = () => {
  const location = useLeadStore((state) => state.location);
  const setLocation = useLeadStore((state) => state.setLocation);
  const prevStep = useLeadStore((state) => state.prevStep);
  const nextStep = useLeadStore((state) => state.nextStep);

  const longitudeRef = useRef<HTMLInputElement | null>(null);
  const latitudeRef = useRef<HTMLInputElement | null>(null);

  const saveLocation = (e: FormEvent) => {
    e.preventDefault();

    setLocation({
      long: Number(longitudeRef.current?.value || 0),
      lat: Number(latitudeRef.current?.value || 0),
    });

    nextStep();
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={saveLocation}>
      Step 2
      <div className="flex flex-col gap-2">
        <label htmlFor="longitude">Longitude</label>
        <input
          className="bg-slate-800 p-2 ring-0 text-white outline-none"
          name="longitude"
          type="number"
          placeholder="Longitude"
          ref={longitudeRef}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="latitude">Latitude</label>
        <input
          className="bg-slate-800 p-2 ring-0 text-white outline-none"
          name="latitude"
          type="number"
          placeholder="Latitude"
          ref={latitudeRef}
        />
      </div>
      <div className="flex flex-row gap-8">
        <button
          type="button"
          className="bg-red-500 p-4 rounded cursor-pointer hover:bg-red-500/50 disabled:bg-gray-500 disabled:cursor-not-allowed w-full"
          onClick={() => prevStep()}
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-purple-500 p-4 rounded cursor-pointer hover:bg-purple-500/50 disabled:bg-gray-500 disabled:cursor-not-allowed w-full"
        >
          Save & Next
        </button>
      </div>
    </form>
  );
};
