"use client";

import { FormEvent } from "react";
import Layout from "../components/Layout";
import { useRef } from "react";
import { UserProps, getUser, insertUser } from "@/libs/supabase/database";

export default function SettingPage() {
  const emailRef: any = useRef(null);
  const passwordRef: any = useRef(null);
  const tierRef: any = useRef(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const data: UserProps = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      tier: tierRef.current.value,
    };

    console.log(data);

    try {
      await insertUser(data);
    } catch (error) {
      console.log("Error inserting user: ", error);
    }
  }

  async function tryGetUser(email: string) {
    const res = await getUser(email);
    console.log(res);
  }

  return (
    <Layout>
      <div className="w-full h-full bg-white p-8 rounded-xl">
        <h1 className="text-xl font-bold">Settings</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="email">Email: </label>
          <input ref={emailRef} type="text" id="email" className="border" />
          <label htmlFor="password">Password: </label>
          <input
            ref={passwordRef}
            type="text"
            id="password"
            className="border"
          />
          <label htmlFor="tier">Tier: </label>
          <input ref={tierRef} type="text" id="tier" className="border" />
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-dark-green p-2 text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}
