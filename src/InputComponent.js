import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import data from "./mock-data.json";

function InputComponent({ contacts, setContacts }) {
  // first make state for new contactform
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  // second create function to save new contact

  const handeleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  // last when form is submitted show it

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  return (
    <div className="max-w-[1640px] mx-auto p-4 text-center">
      <h2 className="text-xl max-w-[1640px] mx-auto p-4 text-center text-white">
        Add new contact
      </h2>
      <div>
        <form onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            name="fullName"
            required="required"
            placeholder="Enter a name ... "
            className="p-2 w-10 sm:w-32 md:w-40 lg:w-64"
            onChange={handeleAddFormChange}
          />
          <input
            type="text"
            name="address"
            required="required"
            placeholder="Enter a address ... "
            className="p-2 w-10 sm:w-32 md:w-40 lg:w-64"
            onChange={handeleAddFormChange}
          />
          <input
            type="text"
            name="phoneNumber"
            required="required"
            placeholder="Enter a phone number ... "
            className="p-2 w-10 sm:w-32 md:w-40 lg:w-64"
            onChange={handeleAddFormChange}
          />
          <input
            type="text"
            name="email"
            required="required"
            placeholder="Enter a email ... "
            className="p-2 w-10 sm:w-32 md:w-40 lg:w-64"
            onChange={handeleAddFormChange}
          />
          <button
            type="submit"
            className="bg-gray-400 text-white font-bold py-2 px-4"
          >
            Add
          </button>
        </form>
      </div>

      <p className="mt-60">2023</p>
    </div>
  );
}

export default InputComponent;
