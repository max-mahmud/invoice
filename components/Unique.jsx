"use client";
import { useRef, useState } from "react";
import FormPreview from "@/components/FormPreview";
import { useReactToPrint } from "react-to-print";
import { AiOutlinePrinter } from "react-icons/ai";

const Unique = ({ invoice }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      <div className="mx-8">
        <button
          onClick={handlePrint}
          className="flex items-center space-x-2 px-3 py-2  rounded-sm  border border-slate-600 "
        >
          <AiOutlinePrinter />
          <span>Print/Download</span>
        </button>
      </div>
      <div ref={componentRef}>
        <FormPreview data={invoice} />
      </div>
    </div>
  );
};

export default Unique;
