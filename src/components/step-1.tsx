import { useLeadStore } from "@/state/steps";
import React from "react";

export const Step1 = () => {
  const nextStep = useLeadStore((state) => state.nextStep);

  return (
    <div className="flex flex-col gap-8">
      Step 1
      <button
        type="button"
        className="bg-purple-500 p-4 rounded cursor-pointer hover:bg-purple-500/50 disabled:bg-gray-500 disabled:cursor-not-allowed w-full"
        onClick={() => {
          nextStep();
        }}
      >
        Next Step
      </button>
    </div>
  );
};
