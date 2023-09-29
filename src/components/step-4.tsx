import { useLeadStore } from "@/state/steps";
import React from "react";

export const Step4 = () => {
  const leadStore = useLeadStore((state) => state);

  return (
    <div className="flex flex-col gap-8">
      <pre>{JSON.stringify(leadStore, null, 2)}</pre>
      <div className="flex flex-row gap-8">
        <button
          type="button"
          className="bg-red-500 p-4 rounded cursor-pointer hover:bg-red-500/50 disabled:bg-gray-500 disabled:cursor-not-allowed w-full"
          onClick={() => leadStore.reset()}
        >
          Restart
        </button>
      </div>
    </div>
  );
};
