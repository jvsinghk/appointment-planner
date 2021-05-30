import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactNames = () => {
    return contacts.map((contact) => contact.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for='title'>Title:</label>
      <input 
      type='text'
      name='title'
      value={title} 
      onChange={({target}) => setTitle(target.value)}
      required
      placeholder="Appointment Title"
      />
      
      <label for='date'>Date:</label>
      <input 
        type='date'
        name='date'
        value={date}
        min={getTodayString()}
        onChange={({target}) => setDate(target.value)}
        required
      />

      <label for='time'>Time:</label>
      <input 
        type='time'
        name='time'
        value={time}
        onChange={({target}) => setTime(target.value)}
        required
      />

      <ContactPicker 
        name='contact'
        contacts={getContactNames()}
        value={contact}
        onChange={({target}) => setContact(target.value)}
        placeholder='Appointment With'
      />

      <input type='submit' value='Add Appointment'/>
    </form>
  );
};
