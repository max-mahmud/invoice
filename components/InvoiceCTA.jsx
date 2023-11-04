import React from "react";

const InvoiceCTA = () => {
  return (
    <div className=" invoiceCta bg-slate-100  flex justify-center items-center" id="invoice">
      <div className="w-full  h-full flex justify-center items-center">
        <div className="bg-white shadow-lg py-10 px-2  w-[320px] flex justify-center items-center rounded-md">
          <button className="px-4 py-2 font-medium text-lg rounded-md bg-pink-600 text-white">
            Create Your First Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceCTA;
