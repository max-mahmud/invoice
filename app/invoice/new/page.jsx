"use client";
import FormPreview from "@/components/FormPreview";
import FormTable from "@/components/FormTable";
import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const NewInvoice = () => {
  const [tableData, setTableData] = useState([]);
  const [preview, setPreview] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    invoiceAuthor: "",
    companyAddress: "",
    companyCity: "",
    companyCountry: "",
    clientCompany: "",
    clientAddress: "",
    clientCity: "",
    clientCountry: "",
    invoiceNumber: "",
    invoiceDate: "",
    invoiceDueDate: "",
    terms: "",
    notes: "",
  });
  const updateTableData = (newTableData) => {
    setTableData(newTableData);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  function handleFormSubmit(e) {
    e.preventDefault();
   // Combine tableData with other form data
   const combinedData = {
    ...formData,
    tableData,
  };
    setPreview(!preview);

  }
  
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
        {/* Invoice Form & Preview  */}
        {preview ? (
          <FormPreview data={formData} />
        ) : (
          <div className="pb-10">
            <form onSubmit={handleFormSubmit} className="bg-white w-[65vw]  mx-auto min-h-screen">
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
                      <p className="text-xs text-gray-700 text-center">PNG or JPG (MAX. 240x240px)</p>
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
                    name="companyName"
                    id="companyName"
                    className="custom_input peer focus:outline-none"
                    placeholder="Your Company"
                    onChange={handleInputChange}
                    value={formData.companyName}
                    required
                  />
                </div>
                <div className=" z-0 w-full mb-1">
                  <input
                    type="text"
                    name="invoiceAuthor"
                    id="invoiceAuthor"
                    className="custom_input peer focus:outline-none"
                    placeholder="Your Name "
                    required
                    onChange={handleInputChange}
                    value={formData.invoiceAuthor}
                  />
                </div>

                <div className=" z-0 w-full mb-1">
                  <input
                    type="tel"
                    name="companyAddress"
                    id="companyAddress"
                    className="custom_input peer focus:outline-none"
                    placeholder="Company Address "
                    required
                    onChange={handleInputChange}
                    value={formData.companyAddress}
                  />
                </div>
                <div className=" z-0 w-full mb-1">
                  <input
                    type="text"
                    name="companyCity"
                    id="companyCity"
                    className="custom_input peer focus:outline-none"
                    placeholder="City, State, Zip "
                    required
                    onChange={handleInputChange}
                    value={formData.companyCity}
                  />
                </div>
                <div className=" z-0 w-full mb-1">
                  <input
                    type="text"
                    name="companyCountry"
                    id="companyCountry"
                    className="custom_input peer focus:outline-none"
                    placeholder="Country eg USA"
                    required
                    onChange={handleInputChange}
                    value={formData.companyCountry}
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
                      name="clientCompany"
                      id="clientCompany"
                      className="custom_input peer focus:outline-none"
                      placeholder="Your Clients Company "
                      required
                      onChange={handleInputChange}
                      value={formData.clientCompany}
                    />
                  </div>

                  <div className=" z-0 w-full mb-1">
                    <input
                      type="tel"

                      name="clientAddress"
                      id="clientAddress"
                      className="custom_input peer focus:outline-none"
                      placeholder="Clients Address "
                      required
                      onChange={handleInputChange}
                      value={formData.clientAddress}
                    />
                  </div>
                  <div className=" z-0 w-full mb-1">
                    <input
                      type="text"
                      name="clientCity"
                      id="clientCity"
                      className="custom_input peer focus:outline-none"
                      placeholder="City, State, Zip "
                      required
                      onChange={handleInputChange}
                      value={formData.clientCity}
                    />
                  </div>
                  <div className=" z-0 w-full mb-1">
                    <input
                      type="text"
                      name="clientCountry"
                      id="clientCountry"
                      className="custom_input peer focus:outline-none"
                      placeholder="Country eg USA"
                      required
                      onChange={handleInputChange}
                      value={formData.clientCountry}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className=" flex gap-4 items-center  w-full mb-1">
                    <label htmlFor="invoiceNumber" className="font-medium px-1 w-[30%] ">
                      Invoice #
                    </label>
                    <input
                      type="text"
                      name="invoiceNumber"
                      id="invoiceNumber"
                      className="block py-2 px-0 text-sm text-gray-700 bg-transparent border-0 border-b-2 border-white appearance-none focus:ring-0 focus:border-sky-300 focus:outline-none"
                      placeholder="INV-147"
                      required
                      onChange={handleInputChange}
                      value={formData.invoiceNumber}
                    />
                  </div>
                  <div className=" flex gap-4 items-center  w-full mb-1">
                    <label htmlFor="invoiceDate" className="font-medium px-1 w-[30%] ">
                      Invoice Date
                    </label>
                    <input
                      type="date"
                      name="invoiceDate"
                      id="invoiceDate"
                      className=""
                      placeholder=""
                      required
                      onChange={handleInputChange}
                      value={formData.invoiceDate}
                    />
                  </div>
                  <div className=" flex gap-4 items-center  w-full mb-1">
                    <label htmlFor="invoiceDueDate" className="font-medium px-1 w-[30%] ">
                      Due Date
                    </label>
                    <input
                      type="date"
                      name="invoiceDueDate"
                      id="invoiceDueDate"
                      className=""
                      placeholder=" "
                      required
                      onChange={handleInputChange}
                      value={formData.invoiceDueDate}
                    />
                  </div>
                </div>
              </div>
              <FormTable updateTableData={updateTableData}/>
              <button type="submit" onClick={()=>setPreview(true)} className="px-6 py-2 ml-8 my-2 bg-violet-500 hover:bg-violet-600 text-white rounded">Create Invoice</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewInvoice;