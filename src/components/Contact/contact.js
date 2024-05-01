import React, { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css';
import Clifton from '../../assets/clifton-logo.jpg';
import Atos from '../../assets/Atos.png';
import Mitsubishi from '../../assets/mitsubishi.png';
import Nokia from '../../assets/nokia.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import YoutTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import TwitterIcon from '../../assets/twitter.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        // Perform basic validation
        const name = form.current.your_name.value.trim();
        const email = form.current.your_email.value.trim();
        const message = form.current.message.value.trim();

        if (!name || !email || !message) {
          toast.error('Please fill out all required fields.', {
            position: "bottom-center",
            className: "toast_message_error",
          });
            return;
        }
    
        emailjs
          .sendForm('service_1l8it6c', 'template_44n3x4r', form.current, {
            publicKey: 'az9F0adGYn4K4M23x',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email sent!');
            },
            (error) => {
              toast.error('Failed to send email. Please try again later.', {
                position: "bottom-center",
                className: "toast_message_error",
              });
              console.log('FAILED...', error.text);
            },
          );
      };
    return (
        <section id="contact">
             <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">
                    I have had the opportunity to work with a diverse group of companies.
                    some of the notable companies I have worked with includes                
                </p>
                <div className="clientsImgs">
                    <img src={Clifton} alt="Client" className="clientImg" />
                    <img src={Atos} alt="Client" className="clientImg" />
                    <img src={Mitsubishi} alt="Client" className="clientImg" />
                    <img src={Nokia} alt="Client" className="clientImg" />
                </div>
             </div>
              <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form ref={form} className="contactForm" onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="your_name" />
                    <input type="email" className="email" placeholder="Your Email" name="your_email" />
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message" />
                    <button type="submit" value='Send' className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={FacebookIcon} alt="Facebook" className="link" />
                        <img src={YoutTubeIcon} alt="Youtube" className="link" />
                        <img src={InstagramIcon} alt="Instagram" className="link" />
                        <img src={TwitterIcon} alt="Twitter" className="link" />
                    </div>
                </form>
                <ToastContainer />
              </div>
        </section>
    )
}

export default Contact;