
import React, { useState } from 'react';
import  "./styles.css";


const EmailForm = () => {
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    text: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailData({ ...emailData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Hacer una solicitud al servidor para enviar el correo electrónico
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        console.log('Correo electrónico enviado con éxito');
      } else {
        console.error('Error al enviar el correo electrónico');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <form className='contact-form' onSubmit={handleFormSubmit}>
      <label className='contact-form' >
        Destinatario:
        <input type="email" name="to" value={emailData.to} onChange={handleInputChange} required />
      </label>
      <label className='contact-form'>
        Asunto:
        <input type="text" name="subject" value={emailData.subject} onChange={handleInputChange} required />
      </label>
      <label className='contact-form'>
        Mensaje:
        <textarea name="text" value={emailData.text} onChange={handleInputChange} required />
      </label>
      <button type="submit">Enviar Correo Electrónico</button>
    </form>
  );
};

export default EmailForm;







/*import React, { useState } from "react";
import "./styles.css";


const Contacto = () => {
  const [formState, setFormState] = useState({});

  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/contact")
      .then((response) => {
        // Check if the request was successful
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Parse the JSON in the response
        return response.json();
      })
      .then((data) => {
        // Handle the data
        console.log("Fetched", data);
      })
      .catch((error) => {
        // Handle errors
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <div>
      <form className="contact-form" onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          value={formState.name || ""}
          placeholder="Name"
          onChange={changeHandler}
        />
        <input
          type="email"
          name="email"
          value={formState.email || ""}
          placeholder="E-mail"
          onChange={changeHandler}
        />
        <textarea
          type="text"
          name="message"
          value={formState.message || ""}
          placeholder="Message"
          onChange={changeHandler}
        />
        <input type="submit" value="Send Email" />
      </form>
    </div>
  );
};

export default Contacto;*/


