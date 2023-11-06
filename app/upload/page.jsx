"use client";
import { CldUploadButton, CldImage } from "next-cloudinary";
import React, { useState } from "react";

const page = () => {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <div className="pt-16">
      <div className="min-h-screen flex justify-center items-center gap-14 flex-col">
        upload Image
        <CldUploadButton
          onUpload={(data) => setImageUrl(data.info.secure_url)}
          className="bg-green-500 text-center py-2 px-6 text-slate-100 font-medium"
          uploadPreset="invoicepreset"
        />
        {imageUrl && (
          <CldImage width="240" height="240" src={imageUrl} sizes="100vw" alt="Description of my image" />
        )}
      </div>
    </div>
  );
};

export default page;
