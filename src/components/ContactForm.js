import "./ContactFormStyles.css"
import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";

//npm i @emailjs/browser

const ContactForm = () =>{
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
        'service_p7p00y8', 
        'template_2d6fo1g', 
        form.current, '22HMRt0Gi4SBmP2TD')
        .then((result) => {
            console.log(result.text);
            console.log("Message Has Been Sent")
        }, (error) => {
            console.log(error.text);
        });
    };

    return(
        <div className="form-container">
            <h1>Send a Message to us</h1>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <button type="submit" value="Send">Send Message</button>
                </form>
        </div>
    )
}

export default ContactForm;