import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (
    <select onChange={onChange}>
      <option value=''>Select a Contact</option>
      {contacts.map(contact => <option value={contact.name}>{contact.name}</option>)}
    </select>
  );
};
