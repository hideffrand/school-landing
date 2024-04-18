"use client";

import { FormEvent } from "react";
import { useRef } from "react";

export default function ManageSettings() {
  const emailRef: any = useRef(null);
  const passwordRef: any = useRef(null);
  const tierRef: any = useRef(null);

  return (
    <div className="w-full h-full bg-white p-8 rounded-xl">
      <h1 className="text-xl font-bold">Settings</h1>
      <form className="flex flex-col">
        <label htmlFor="email">Email: </label>
        <input ref={emailRef} type="text" id="email" className="border" />
        <label htmlFor="password">Password: </label>
        <input ref={passwordRef} type="text" id="password" className="border" />
        <label htmlFor="tier">Tier: </label>
        <input ref={tierRef} type="text" id="tier" className="border" />
        <button
          type="button"
          // onClick={}
          className="bg-dark-green p-2 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
