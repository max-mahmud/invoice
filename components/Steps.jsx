import React from "react";
import { FaChevronRight } from "react-icons/fa";
const Steps = () => {
  return (
    <div className="md:py-12 py-8 bg-slate-100">
      <h3 className="text-2xl md:text-4xl text-center font-medium">
        Create Your Invoice in Less than 2 Minutes
      </h3>
      <div className="flex md:flex-row flex-col justify-center items-center gap-4 py-5">
        <div className="flex items-center gap-3">
          <p className="border-2 w-8 h-8 flex items-center justify-center rounded-full border-slate-500">1</p>
          <p className="text-sm">Invoice Details</p>
        </div>
        <span className="hidden md:flex">
          <FaChevronRight className="text-2xl text-slate-700" />
        </span>
        <div className="flex items-center gap-3">
          <p className="border-2 w-8 h-8 flex items-center justify-center rounded-full border-slate-500">2</p>
          <p className="text-sm">
            Your Bank Details <br /> (Optional)
          </p>
        </div>
        <span className="hidden md:flex">
          <FaChevronRight className="text-2xl text-slate-700" />
        </span>
        <div className="flex items-center gap-3">
          <p className="border-2 w-8 h-8 flex items-center justify-center rounded-full border-slate-500">3</p>
          <p className="text-sm">
            Select Design & Colors <br /> (Download or Email Invoice)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
