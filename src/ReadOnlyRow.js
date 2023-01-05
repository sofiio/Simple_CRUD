import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <>
      <tr key={contact.id} className="bg-green-600">
        <td className="border border-slate-300 text-xs sm:text-xl md:text-xl lg:text-xl">{contact.fullName}</td>
        <td className="border border-slate-300 text-xs sm:text-xl md:text-xl lg:text-xl">{contact.address}</td>
        <td className="border border-slate-300 text-xs sm:text-xl md:text-xl lg:text-xl">{contact.phoneNumber}</td>
        <td className="border border-slate-300 text-xs sm:text-xl md:text-xl lg:text-xl">{contact.email}</td>
        <td className="border border-slate-300 text-xs sm:text-xl md:text-xl lg:text-xl">
          <button
            className="bg-black text-white font-bold py-2 px-4 border-b-4 rounded"
            onClick={(event) => handleEditClick(event, contact)}
          >
            Edit
          </button>
          <button
            onClick={() => handleDeleteClick(contact.id)}
            className="bg-gray-400 text-white font-bold py-2 px-4 border-b-4 rounded "
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default ReadOnlyRow;
