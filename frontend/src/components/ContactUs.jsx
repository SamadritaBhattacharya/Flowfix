import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import NavHead from "./NavHead";
// import './Contact.css'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "replace with service id",
        "replace with template id",
        form.current,
        "replace with user id"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact-bg h-screen bg-gradient-to-r from-green-200 to-emerald-800">
   <NavHead/>
    <StyledContactForm>
       
      <h2 id="contact" className="heading">Contact Us</h2>
      <div className="contact">
        
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      </div>
    </StyledContactForm>
    </section>

  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`;
  

  form {
    
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    color:black;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      background-color:#d1d5db;

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      background-color:#d1d5db;

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
       background:#065f46;
      color: white;
      border-radius: 15px;
      width:200px;
      margin-left: 36%;
    }
  }
`