import React from "react";

const ContactForm = ({ name, number, handleSubmit, addContact }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={addContact} />
      </label>
      <label>
        Number:
        <input
          type="text"
          // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          name="number"
          onChange={addContact}
        />
        {/* <small>Format: 123-456-7890</small> */}
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
