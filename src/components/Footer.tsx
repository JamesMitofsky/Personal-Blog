"use client";
import { FunctionComponent } from "react";

export const Footer: FunctionComponent = () => {
  return (
    <section className="mt-24 mb-10 flex justify-center items-center [min-h-screen:mt-auto]">

      <a
        target="_blank"
        href="https://btv.dev"
        className="font-normal text-gray-500 text-sm flex items-center"
      >
        Made by <img
          src="/BTV.svg"
          alt="BTV dot Dev logo"
          width={60}
          height={20}
          className="w-[80px] h-auto -mb-[2px] ml-[2px]"
        />
      </a>

    </section>
  );
};
