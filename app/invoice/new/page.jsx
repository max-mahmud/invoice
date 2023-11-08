"use client";
import FormPreview from "@/components/FormPreview";
import FormTable from "@/components/FormTable";
import React, { useState, useRef } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { CldUploadButton, CldImage } from "next-cloudinary";
import { useReactToPrint } from "react-to-print";
import { toast } from "react-toastify";

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
  const [loading, setLoading] = useState(false);
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
  async function handleFormSubmit(e) {
    e.preventDefault();
    // Combine tableData with other form data
    const allFormData = {
      ...formData,
      logoUrl,
      tableData,
    };

    try {
      //  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      setLoading(true);
      const response = await fetch(`http://localhost:3000/api/invoice`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          invoiceData: { ...formData, logoUrl },
          tableData,
        }),
      });
      const createdInvoice = await response.json();
      // console.log(createdInvoice,);
      setLoading(false);
      toast.success("Invoice Created");
      router.push("/invoice");
      setPreview(!preview);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }

    setCombineDate(allFormData);
    //  setPreview(!preview);
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
                    type="text"
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
                      type="text"
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

              <div className="flex flex-col w-full my-6 px-8">
                <label
                  htmlFor="notes"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Notes
                </label>
                <textarea
                  id="notes"
                  rows="2"
                  name="notes"
                  onChange={handleInputChange}
                  value={formData.notes}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-transparent rounded-lg 
              border-0 focus:ring-blue-500 focus:border-blue-500  "
                  placeholder="Write your notes here..."
                ></textarea>
              </div>
              <div className="flex flex-col w-full my-6 px-8">
                <label
                  htmlFor="terms"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Terms and Conditions
                </label>
                <textarea
                  id="terms"
                  rows="2"
                  name="terms"
                  onChange={handleInputChange}
                  value={formData.terms}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-transparent rounded-lg 
              border-0 focus:ring-blue-500 focus:border-blue-500  "
                  placeholder="Write your terms and conditions here..."
                ></textarea>
              </div>
              {loading ? (
                <button
                  disabled
                  type="button"
                  class="px-6 py-2 ml-8 my-3 bg-violet-500 hover:bg-violet-600 text-white rounded items-center"
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    class="inline w-4 h-4 mr-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Loading...
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-2 ml-8 my-3 bg-violet-500 hover:bg-violet-600 text-white rounded"
                >
                  Save
                </button>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewInvoice;
