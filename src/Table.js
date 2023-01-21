
import data from "./mock-data.json";
import { useState } from "react";
import InputComponent from "./InputComponent";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import { nanoid } from "nanoid";

const Table = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

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

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <>
      <div className="max-w-[1640px]  mx-auto p-4  text-center lg:justify-center flex  overflow-x-auto ">
        <form onSubmit={handleEditFormSubmit}>
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
                      handleCancellClick={handleCancelClick}
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
        </form>
      </div>
      <InputComponent contacts={contacts} setContacts={setContacts} />
    </>
  );
};

export default Table;
