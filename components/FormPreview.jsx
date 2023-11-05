import React from 'react'

const FormPreview = ({data}) => {
  const {
    companyName,
    invoiceAuthor,
    companyAddress,
    companyCity,
    companyCountry,
    clientCompany,
    clientAddress,
    clientCity,
    clientCountry,
    invoiceNumber,
    invoiceDate,
    invoiceDueDate,
    terms,
    notes,
    logoUrl,
    tableData,
  } = data;
  return (
    <div>
      <div className="py-4 my-4 bg-gray-400">Preview</div>
    </div>
  )
}

export default FormPreview
