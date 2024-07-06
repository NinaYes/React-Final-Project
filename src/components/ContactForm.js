import Swal from 'sweetalert2';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


function ContactForm() {

  const [state, handleSubmit] = useForm("mgegqwle");
  if (state.succeeded) {
      return <p className="containerEleven">Thanks for reaching out!</p>;
  }
  const handleAlert = () => {
    Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your form has been sent!",
        showConfirmButton: false,
        timer: 1500
      });
  }
  return (
      <form className="field"onSubmit={handleSubmit}>
      <label className="name1"htmlFor="name">
        Your full name
      </label>
      <input className="name"
        id="name"
        type="name" 
        name="name"
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      <label className="name1" htmlFor="email">
        Email Address
      </label>
      <input className="name"
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label className="name1" htmlFor="Message">
        Your message
      </label>
      <textarea className="name"
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className="btn4"type="submit" disabled={state.submitting} onClick={ handleAlert }>
        Submit
      </button>
    </form>
  );
}
export default ContactForm;