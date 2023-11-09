import Link from "next/link";
import React from "react";

const InvoiceCTA = () => {
  return (
    <div
      className=" invoiceCta min-h-[100vh] md:min-h-[150vh] bg-slate-100  flex justify-center items-center"
      id="invoice"
    >
      <div className="w-full  h-full flex justify-center items-center">
        <div className="bg-white shadow-lg py-5 md:py-10 px-2 z-50  w-[250px] md:w-[320px] flex justify-center items-center rounded-md">
          <Link
            href={"/invoice/new"}
            className="px-4 py-2 font-medium md:text-lg rounded-md bg-pink-600 text-white"
          >
            Create Your First Invoice
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InvoiceCTA;
