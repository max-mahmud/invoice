import React from "react";
import ThemeLink from "./ThemeLink";
import Image from "next/image";
import heroImage from "../public/invoicer.webp";
import { AiOutlineArrowDown } from "react-icons/ai";
const Hero = () => {
  return (
    <div className="min-h-[95vh] bg-violet-600 pt-14 ">
      <div className="container mx-auto flex flex-col-reverse md:flex-row gap-4">
        <div className="w-full p-5 text-white flex flex-col space-y-7 items-start justify-center">
          <h2 className="text-3xl font-bold">Invoice Generator - Free Online Invoice Maker</h2>
          <p className="text-xl font-medium">
            Create Invoices for FREE with Online Invoice Maker. Invoice Generator to Manage, Email & Download
            Online Invoices.
          </p>
          <ThemeLink name="Create Your First Invoice" toLink="/invoice/new" icon={<AiOutlineArrowDown />} />
        </div>
        <div className="w-full md:p-3">
          <Image src={heroImage} alt="omg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
