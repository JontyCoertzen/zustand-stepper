"use client";

import { useLeadStore } from "@/state/steps";
import { Step1 } from "@/components/step-1";
import { Step2 } from "@/components/step-2";
import { Step3 } from "@/components/step-3";
import { Step4 } from "@/components/step-4";

const steps = [Step1, Step2, Step3, Step4];

export function Stepper() {
  const currentStep = useLeadStore((state) => state.step);
  const StepComponent = steps[currentStep];

  return (
    <div className="flex flex-col gap-8 w-full max-w-lg">
      <StepComponent />
    </div>
  );
}
