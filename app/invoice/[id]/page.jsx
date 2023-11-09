import { getInvoiceById } from "@/app/libs/getInvoiceById";
import Unique from "@/components/Unique";

export default async function InvoicePage({ params: { id } }) {
  const invoice = await getInvoiceById(id);
  //   console.log(invoice);

  return (
    <div className="pt-20">
      <Unique invoice={invoice} />
    </div>
  );
}
