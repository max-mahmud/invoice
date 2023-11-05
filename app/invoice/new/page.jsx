"use client";
import FormPreview from "@/components/FormPreview";
import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const NewInvoice = () => {
  const [preview, setPreview] = useState(false);
  return (
    <div className="pt-14 bg-slate-100 ">
      <div className="min-h-screen  container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center py-7">
          <div className="flex gap-3">
            <button
              onClick={() => setPreview(!preview)}
              className="px-4 py-1 bg-slate-100 border-2 border-sky-300 shadow-md text-slate-500 hover:text-sky-500"
            >
              {preview ? "Edit Form" : "Preview"}
            </button>
            <button className="px-4 py-1 bg-slate-100 border-2 border-sky-300 shadow-md text-slate-500 hover:text-sky-500">
              Print
            </button>
            <button className="px-4 py-1 bg-slate-100 border-2 border-sky-300 shadow-md text-slate-500 hover:text-sky-500">
              Download
            </button>
          </div>
          <div className="flex gap-3">
            {" "}
            <button className="px-4 py-1 bg-slate-100 border-2 border-violet-300 shadow-md text-slate-500 hover:text-violet-500">
              Save Online
            </button>
            <button className="px-4 py-1 bg-slate-100 border-2 border-violet-300 shadow-md text-slate-500 hover:text-violet-500">
              Send
            </button>
          </div>
        </div>
        {/* Invoice Form */}
        {/* Preview */}
        {preview ? (
          <FormPreview />
        ) : (
          <div className="pb-10">
            <form className="bg-white w-[70vw]  mx-auto min-h-screen">
              <div className="flex justify-between items-center gap-10 p-8 ">
                <div className="flex items-center justify-center w-[22%] mb-5 ">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-36 border-2 border-slate-200  border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 "
                  >
                    <div className="flex flex-col items-center justify-center pt-2 pb-3">
                      <AiOutlineCloudUpload className="text-sky-400 text-4xl" />
                      <p className="mb-2 text-sm text-gray-700">
                        <span className="font-semibold">Click to upload</span>
                      </p>
                      <p className="text-xs text-gray-700">PNG or JPG (MAX. 240x240px)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
                <div>
                  <h3 className="text-5xl upperCase font-medium">Invoice</h3>
                </div>
              </div>
              {/* Company Details */}
              <div className="grid w-1/2 ml-8 mb-8">
                <div className=" z-0 w-full mb-1">
                  <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    className="block py-2 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-white appearance-none  focus:outline-none focus:ring-0 focus:border-sky-300 peer"
                    placeholder="Your Company"
                    required
                  />
                </div>
                <div className=" z-0 w-full mb-1">
                  <input
                    type="text"
                    name="floating_last_name"
                    id="floating_last_name"
                    className="block py-2 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-white appearance-none    focus:outline-none focus:ring-0 focus:border-sky-300 peer"
                    placeholder="Your Name "
                    required
                  />
                </div>

                <div className=" z-0 w-full mb-1">
                  <input
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    name="floating_phone"
                    id="floating_phone"
                    className="block py-2 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-white appearance-none    focus:outline-none focus:ring-0 focus:border-sky-300 peer"
                    placeholder="Company Address "
                    required
                  />
                </div>
                <div className=" z-0 w-full mb-1">
                  <input
                    type="text"
                    name="floating_company"
                    id="floating_company"
                    className="block py-2 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-white appearance-none    focus:outline-none focus:ring-0 focus:border-sky-300 peer"
                    placeholder="City, State, Zip "
                    required
                  />
                </div>
                <div className=" z-0 w-full mb-1">
                  <input
                    type="text"
                    name="country"
                    id="country"
                    className="block py-2 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-white appearance-none    focus:outline-none focus:ring-0 focus:border-sky-300 peer"
                    placeholder="Country eg USA"
                    required
                  />
                </div>
              </div>
              {/* Client Details */}
              <h3 className="font-bold text-lg w-full px-8">Bill To:</h3>
              <div className="flex justify-between gap-10 px-8">
                <div className="w-full ">
                  <div className=" w-full mb-1">
                    <input
                      type="text"
                      name="clients_company"
                      id="clients_company"
                      className="block py-2 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-sky-300 peer"
                      placeholder="Your Clients Company "
                      required
                    />
                  </div>

                  <div className=" z-0 w-full mb-1">
                    <input
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      name="clients_address"
                      id="clients_address"
                      className="block py-2 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-white appearance-none    focus:outline-none focus:ring-0 focus:border-sky-300 peer"
                      placeholder="Clients Address "
                      required
                    />
                  </div>
                  <div className=" z-0 w-full mb-1">
                    <input
                      type="text"
                      name="city_state"
                      id="city_state"
                      className="block py-2 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-white appearance-none    focus:outline-none focus:ring-0 focus:border-sky-300 peer"
                      placeholder="City, State, Zip "
                      required
                    />
                  </div>
                  <div className=" z-0 w-full mb-1">
                    <input
                      type="text"
                      name="clients_country"
                      id="clients_country"
                      className="block py-2 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-white appearance-none    focus:outline-none focus:ring-0 focus:border-sky-300 peer"
                      placeholder="Country eg USA"
                      required
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className=" flex gap-4 items-center  w-full mb-1">
                    <label htmlFor="invoice_No" className="font-medium px-1 w-[30%] ">
                      Invoice #
                    </label>
                    <input
                      type="text"
                      name="invoice_No"
                      id="invoice_No"
                      className="block py-2 px-0  text-sm text-gray-700 bg-transparent border-0 border-b-2 border-white appearance-none  focus:outline-none focus:ring-0 focus:border-sky-300 peer"
                      placeholder="Your Company"
                      required
                    />
                  </div>
                  <div className=" flex gap-4 items-center  w-full mb-1">
                    <label htmlFor="invoice_Date" className="font-medium px-1 w-[30%] ">
                      Invoice Date
                    </label>
                    <input
                      type="date"
                      name="invoice_date"
                      id="invoice_date"
                      className="block py-2 px-0 text-sm text-gray-700 bg-transparent border-0 border-b-2 border-white appearance-none    focus:outline-none focus:ring-0 focus:border-sky-300 peer"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className=" flex gap-4 items-center  w-full mb-1">
                    <label htmlFor="invoice_due_date" className="font-medium px-1 w-[30%] ">
                      Due Date
                    </label>
                    <input
                      type="date"
                      name="invoice_due_date"
                      id="invoice_due_date"
                      className="block py-2 px-0 text-sm text-gray-700 bg-transparent border-0 border-b-2 border-white appearance-none    focus:outline-none focus:ring-0 focus:border-sky-300 peer"
                      placeholder=" "
                      required
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewInvoice;
