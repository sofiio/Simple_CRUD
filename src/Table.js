import React, { Fragment } from "react";
import data from "./mock-data.json";
import { useState } from "react";
import InputComponent from "./InputComponent";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import { nanoid } from "nanoid";

function Table() {
  const [contacts, setContacts] = useState(data);
  const [editContactId, setEditContactId] = useState(null);

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

  const handleCancellClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };
    setEditFormData(formValues);
  };

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);
  };

  return (
    <form onSubmit={handleEditFormSubmit}>
      <div className="max-w-[1640px]  mx-auto p-4  text-center lg:justify-center flex  overflow-x-auto ">
        <table className="  border-slate-300 text-white mt-10 ">
          <thead className=" border-slate-300 w-auto">
            <tr className="bg-green-800 ">
              <th className="border border-slate-300">
                <strong>Name</strong>
              </th>
              <th className="border border-slate-300 ">
                <strong>Adress</strong>
              </th>
              <th className="border border-slate-300 ">
                <strong>Phone Number</strong>
              </th>
              <th className="border border-slate-300 ">
                <strong>Email</strong>
              </th>
              <th className="border border-slate-300 ">
                <strong>Actions</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleCancellClick={handleCancellClick}
                    handleEditFormChange={handleEditFormChange}
                  />
                ) : (
                  <ReadOnlyRow
                    handleDeleteClick={handleDeleteClick}
                    contact={contact}
                    handleEditClick={handleEditClick}
                  />
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>

      <InputComponent contacts={contacts} setContacts={setContacts} />
    </form>
  );
}

export default Table;
