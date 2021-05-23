import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [contacts, setContacts] = useState([
   {
    name: 'John Doe',
    phoneNumber: 4568745645,
    email: 'abc@xyz.com',
   }
 ]);
 const [appointments, setAppointments] = useState([
   {
     title: 'Sample Appointment',
     contact: 'John Doe',
     date: '23-05-2021',
     time: '22:27'
   }
 ])

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addContact = (contacts) => {
    setContacts((prev) => [contacts, ...prev])
  }

  const addAppointment = (appointments) => {
    setAppointments((prev) => [appointments, ...prev])
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} handleChange={addContact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointments={appointments} handleChange={addAppointment} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
