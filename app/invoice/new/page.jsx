"use client";
import FormPreview from "@/components/FormPreview";
import FormTable from "@/components/FormTable";
import React, { useState, useRef } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { CldUploadButton, CldImage } from "next-cloudinary";
import { useReactToPrint } from "react-to-print";

const NewInvoice = () => {
  const [logoUrl, setlogoUrl] = useState("");
  const [tableData, setTableData] = useState([
    {
      itemDescription: "",
      qty: "",
      unitPrice: "",
      tax: "",
      amount: "",
    },
    {
      itemDescription: "",
      qty: "",
      unitPrice: "",
      tax: "",
      amount: "",
    },
  ]);
  const [combineData, setCombineDate] = useState({});
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
    const allFormData = {
      ...formData,
      logoUrl,
      tableData,
    };
    setCombineDate(allFormData);
    setPreview(!preview);
  }

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

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
            <button
              onClick={handlePrint}
              className="px-4 py-1 bg-slate-100 border-2 border-sky-300 shadow-md text-slate-500 hover:text-sky-500"
            >
              Print / Download
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
          <div ref={componentRef}>
            <FormPreview data={combineData} />
          </div>
        ) : (
          <div className="pb-10">
            <form onSubmit={handleFormSubmit} className="bg-white w-[65vw]  mx-auto min-h-screen">
              <div className="flex justify-between items-center gap-10 p-8 ">
                <div className="flex items-center justify-center w-[22%] mb-5 ">
                  {logoUrl ? (
                    <CldImage width="240" height="240" src={logoUrl} alt="Description of my image" />
                  ) : (
                    <label
                      htmlFor="inv-file"
                      className="flex flex-col items-center justify-center w-full h-36 border-2 border-slate-200  border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 "
                    >
                      <div className="flex flex-col items-center justify-center pt-2 pb-3">
                        <AiOutlineCloudUpload className="text-sky-400 text-4xl" />
                        <p className="mb-2 text-sm text-gray-700">
                          <CldUploadButton
                            id="inv-file"
                            onUpload={(data) => setlogoUrl(data.info.secure_url)}
                            className=" py-2 px-6"
                            uploadPreset="invoicepreset"
                          />
                        </p>
                        <p className="text-xs text-gray-700 text-center">PNG or JPG (MAX. 240x240px)</p>
                      </div>
                    </label>
                  )}
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
                  />
                </div>
                <div className=" z-0 w-full mb-1">
                  <input
                    type="text"
                    name="invoiceAuthor"
                    id="invoiceAuthor"
                    className="custom_input peer focus:outline-none"
                    placeholder="Your Name "
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
                      onChange={handleInputChange}
                      value={formData.invoiceDueDate}
                    />
                  </div>
                </div>
              </div>
              <FormTable prevData={tableData} updateTableData={updateTableData} />
              <button
                type="submit"
                className="px-6 py-2 ml-8 my-2 bg-violet-500 hover:bg-violet-600 text-white rounded"
              >
                Create Invoice
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewInvoice;
