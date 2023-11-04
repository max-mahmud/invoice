import Features from "@/components/Features";
import Hero from "@/components/Hero";
import InvoiceCTA from "@/components/InvoiceCTA";
import Pricing from "@/components/Pricing";
import Steps from "@/components/Steps";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Steps />
      <InvoiceCTA />
      <Features />
      <Pricing />
    </div>
  );
};

export default page;
