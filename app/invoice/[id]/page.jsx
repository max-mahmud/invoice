"use client";
import { getInvoiceById } from "@/app/libs/getInvoiceById";
import FormPreview from "@/components/FormPreview";

export default async function InvoicePage({ params: { id } }) {
  const invoice = await getInvoiceById(id);
  //   console.log(invoice);

  return (
    <div className="pt-16">
      <div className=""></div>
      <FormPreview data={invoice} />
    </div>
  );
}
