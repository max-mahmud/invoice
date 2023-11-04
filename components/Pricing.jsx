import React from "react";
import  Link  from "next/link";
import { RxCross1 } from "react-icons/rx";
const Pricing = () => {
  return (
    <div className="bg-slate-100">
      <div className="container mx-auto py-14">
        <h3 className="text-4xl text-center font-medium py-3">Pricing of invoice generator</h3>
        <p className="text-center py-2">Only Pay When You Need Premium Features.</p>
        <div className="grid grid-cols-2  gap-10 mt-5">
          <div className="shadow-lg bg-white p-7 rounded-md flex flex-col gap-6">
            <span className="p-2 bg-purple-100 w-16 h-16 rounded-full flex justify-center items-center"><RxCross1 className=" rounded-full w-8 h-8 bg-purple-100 p-1 text-purple-600 border border-purple-500" /></span>
            <h3 className="text-xl font-medium">Free Plan</h3>
            <p>
              Create up to 100 invoices and other documents in a year - completely free. Invoices, Quotations,
              Pro Forma, Expenses and more. No hidden charges.
            </p>
            <a href="#invoice"  className="text-purple-700">Create Free Invoice</a>
          </div>
          <div className="shadow-lg bg-white p-7 rounded-md flex flex-col gap-6">
            <span className="p-2 bg-purple-100 w-16 h-16 rounded-full flex justify-center items-center"><RxCross1 className=" rounded-full w-8 h-8 bg-purple-100 p-1 text-purple-600 border border-purple-500" /></span>
            <h3 className="text-xl font-medium">Premium Plan</h3>
            <p>
            Manage your accounting at faster pace with additional premium features at minimal cost.
            </p>
            <Link href={'/'} className="text-purple-700">Explore Premium Features</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
