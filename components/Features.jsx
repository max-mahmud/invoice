import React from "react";
import { RxCross1 } from "react-icons/rx";
import ThemeLink from "./ThemeLink";

const Features = () => {
  let allFeatures = [
    {
      icon: <RxCross1 />,
      title: "Easy Tax Invoice",
      des: "Create, manage, send, and track tax invoices without any hassle.",
    },
    {
      icon: <RxCross1 />,
      title: "Easy Tax Invoice",
      des: "Create, manage, send, and track tax invoices without any hassle.",
    },
    {
      icon: <RxCross1 />,
      title: "Easy Tax Invoice",
      des: "Create, manage, send, and track tax invoices without any hassle.",
    },
    {
      icon: <RxCross1 />,
      title: "Easy Tax Invoice",
      des: "Create, manage, send, and track tax invoices without any hassle.",
    },
    {
      icon: <RxCross1 />,
      title: "Easy Tax Invoice",
      des: "Create, manage, send, and track tax invoices without any hassle.",
    },
    {
      icon: <RxCross1 />,
      title: "Easy Tax Invoice",
      des: "Create, manage, send, and track tax invoices without any hassle.",
    },
    {
      icon: <RxCross1 />,
      title: "Easy Tax Invoice",
      des: "Create, manage, send, and track tax invoices without any hassle.",
    },
    {
      icon: <RxCross1 />,
      title: "Easy Tax Invoice",
      des: "Create, manage, send, and track tax invoices without any hassle.",
    },
  ];
  return (
    <div className="">
      <div className="py-8 bg-violet-600">
        <div className="container mx-auto flex justify-between items-center">
          <h4 className="text-3xl text-white font-medium">Create Online Invoices for FREE</h4>
          <a href="#invoice" className="bg-red-600 text-white font-medium px-5 py-3 rounded">
            Create Invoice for Free
          </a>
        </div>
      </div>
      <div className="bg-slate-900 py-20">
        <div className="container mx-auto">
          <h3 className="text-4xl text-white font-medium text-center">Features of invoice generator</h3>
          <div className="text-white grid grid-cols-4 my-5">
            {allFeatures.map((item, i) => (
              <div key={i} className="my-5">
                <span className=" feature-icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p className="text-sm text-slate-300">
                  {item.des}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center mt-8">
            <a href="#invoice" className="bg-purple-600 text-white font-medium px-5 py-2 rounded">
              Create Invoice for Free
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
