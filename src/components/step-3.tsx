import { useLeadStore } from "@/state/steps";
import React, { FormEvent, useEffect, useRef } from "react";

export const Step3 = () => {
  const user = useLeadStore((state) => state.user);
  const setUser = useLeadStore((state) => state.setUser);
  const prevStep = useLeadStore((state) => state.prevStep);
  const nextStep = useLeadStore((state) => state.nextStep);

  const firstNameRef = useRef<HTMLInputElement | null>(null);
  const lastNameRef = useRef<HTMLInputElement | null>(null);
  const cellNumberRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  const saveUser = (e: FormEvent) => {
    e.preventDefault();

    setUser({
      firstName: firstNameRef.current?.value || "",
      lastName: lastNameRef.current?.value || "",
      cellNumber: cellNumberRef.current?.value || "",
      email: emailRef.current?.value || "",
    });

    nextStep();
  };

  return (
    <form className="flex flex-col gap-8 w-full" onSubmit={saveUser}>
      Step 3
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">First Name</label>
        <input
          className="bg-slate-800 p-2 ring-0 text-white outline-none"
          name="firstName"
          type="text"
          placeholder="First Name"
          ref={firstNameRef}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="lastName">Last Name</label>
        <input
          className="bg-slate-800 p-2 ring-0 text-white outline-none"
          name="lastName"
          type="text"
          placeholder="Last Name"
          ref={lastNameRef}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="cellNumber">Cell Number</label>
        <input
          className="bg-slate-800 p-2 ring-0 text-white outline-none"
          name="cellNumber"
          type="text"
          placeholder="Cell Number"
          ref={cellNumberRef}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          className="bg-slate-800 p-2 ring-0 text-white outline-none"
          name="email"
          type="text"
          placeholder="Email"
          ref={emailRef}
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
