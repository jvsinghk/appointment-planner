import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label for='name'>Name:</label>
      <input 
        id='name' 
        className='name'
        type='text' 
        value={name} 
        onChange={({target}) => (setName(target.value))}
        required
        placeholder="Contact Name"
      />

      <label for='phone'>Phone:</label>
      <input 
        id='tel' 
        className='phone'
        name='phone'
        type='tel' 
        value={phone} 
        pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
        onChange={({target}) => (setPhone(target.value))}
        required
        placeholder="Contact Phone (###-###-####)"
      />

      <label for='email'>Email:</label>
      <input 
        id='email'
        className='email'
        name='email' 
        type='email' 
        value={email}
        onChange={({target}) => (setEmail(target.value))} 
        required
        placeholder="Contact Email"
      />

      <input type='submit' value='Add Contact' />
    </form>
  );
};
