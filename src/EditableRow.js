import React from "react";

function EditableRow({
  editFormData,
  handleEditFormChange,
  handleCancellClick,
}) {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          className="w-full text-black"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an adress..."
          name="address"
          className="w-full text-black"
          value={editFormData.address}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a Phone number..."
          name="phoneNumber"
          className="w-full text-black"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an Email..."
          name="email"
          className="w-full text-black"
          value={editFormData.email}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <button
          type="submit"
          className="bg-lime-600 text-white font-bold py-2 px-4 border-b-4 rounded"
        >
          Save
        </button>
        <button
          type="submit"
          onClick={handleCancellClick}
          className="bg-red-600 text-white font-bold py-2 px-4 border-b-4 rounded"
        >
          Cancell
        </button>
      </td>
    </tr>
  );
}

export default EditableRow;
