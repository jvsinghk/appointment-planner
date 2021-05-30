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
      />

      <label for='phone'>Phone:</label>
      <input 
        id='number' 
        className='phone'
        type='tel' 
        value={phone} 
        pattern='^[6-9][0-9]{9}$'
        onChange={({target}) => (setPhone(target.value))}
        required
      />

      <label for='email'>Email:</label>
      <input 
        id='email'
        className='email' 
        type='email' 
        value={email}
        onChange={({target}) => (setEmail(target.value))} 
        required
      />

      <input type='submit' />
    </form>
  );
};
