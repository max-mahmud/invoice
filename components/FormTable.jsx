"use client";
import React, { useState } from "react";
import { AiOutlineCloseCircle, AiOutlinePlus } from "react-icons/ai";

const FormTable = ({ prevData, updateTableData }) => {
  const [tableData, setTableData] = useState(prevData);
  const addRow = () => {
    setTableData([
      ...tableData,
      {
        itemDescription: "",
        qty: "",
        unitPrice: "",
        tax: "",
        amount: "",
      },
    ]);
  };

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedData = [...tableData];
    updatedData[index][name] = value;

    if (name == "qty" || name == "unitPrice") {
      const qty = parseFloat(updatedData[index].qty);
      const price = parseFloat(updatedData[index].unitPrice);
      if (!isNaN(qty) && !isNaN(price)) {
        updatedData[index].amount = (qty * price).toFixed(2);
      } else {
        updatedData[index].amount = "";
      }
    }

    setTableData(updatedData);
    updateTableData(updatedData);
  };

  const removeItem = (index) => {
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    setTableData(updatedData);
    updateTableData(updatedData);
  };

  return (
    <div className="mx-8">
      <div className="relative overflow-x-auto shadow-sm sm:rounded-lg my-6">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-3 py-3">
                Item Description
              </th>
              <th scope="col" className="px-3 py-3">
                Qty
              </th>
              <th scope="col" className="px-3 py-3">
                Unit Price
              </th>
              <th scope="col" className="px-3 py-3">
                Tax
              </th>
              <th scope="col" className="px-3 py-3">
                Amount
              </th>
              <th scope="col" className="px-1 py-3">
                <span className="sr-only">Edit</span>
              </th>
              {/* Add a new column for Remove button */}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className="bg-white border-b   hover:bg-gray-50 ">
                <td className="px-2 py-3">
                  <input
                    className="bg-slate-50 text-base border-0 p-1 mb-2 h-7 w-60 text-slate-700 placeholder:text-slate-400"
                    type="text"
                    placeholder="item description"
                    name="itemDescription"
                    value={row.itemDescription}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td className="px-2 py-3">
                  <input
                    className="bg-slate-50 text-base border-0 p-1 mb-2 h-7 w-16 text-slate-700 placeholder:text-slate-400"
                    type="number"
                    placeholder="2"
                    name="qty"
                    value={row.qty}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td className="px-2 py-3">
                  <input
                    className="bg-slate-50 text-base border-0 p-1 mb-2 h-7 w-20 text-slate-700 placeholder:text-slate-400"
                    type="number"
                    placeholder="5"
                    name="unitPrice"
                    value={row.unitPrice}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td className="px-2 py-3">
                  <input
                    className="bg-slate-50 text-base border-0 p-1 mb-2 h-7 w-12 text-slate-700 placeholder:text-slate-400"
                    type="number"
                    placeholder="10"
                    name="tax"
                    value={row.tax}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td className="px-2 py-3">
                  <input
                    className="bg-slate-50 text-base border-0 p-1 mb-2 h-7 w-24 text-slate-700 placeholder:text-slate-400"
                    type="number"
                    placeholder="2"
                    name="amount"
                    value={row.amount}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td className=" py-3 text-right">
                  <span onClick={() => removeItem(index)}>
                    <AiOutlineCloseCircle className="text-xl text-red-600 cursor-pointer" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <span
          onClick={addRow}
          type="button"
          className="my-3 flex items-center space-x-2 text-purple-600 font-bold"
        >
          <AiOutlinePlus className="text-base" />
          <span className="cursor-pointer">Add line item</span>
        </span>
      </div>
    </div>
  );
};

export default FormTable;
