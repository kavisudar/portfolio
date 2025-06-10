import React, { useState } from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub,FaEnvelope } from 'react-icons/fa';
export default function Contact() {
  const [notificationVisible, setNotificationVisible] = useState(false); // State for notification visibility

  const handle = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const form = e.target.closest('form'); // Get the form element
    if (form) {
      const formData = new FormData(form);
      const action = form.action;

      fetch(action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })
        .then((response) => {
          if (response.ok) {
            // Show the notification
            setNotificationVisible(true);

            // Open Formspree confirmation in a new tab
            window.open('https://formspree.io/f/xkgrwjwq', '_blank');

            // Reset the form after successful submission
            form.reset();

            // Hide the notification after 4 seconds
            setTimeout(() => {
              setNotificationVisible(false);
            }, 4000);
          } else {
            alert('There was an error sending your message. Please try again.');
          }
        })
        .catch(() => {
          alert('There was an error sending your message. Please try again.');
        });
    }
  };
let year=new Date().getFullYear();
  return (
    <>
      <div className='footer'>
        <div className='details'>
          <h1>Get In Touch</h1>
          <h3>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</h3>
          <div className="icon-info">
          <div>
          <FaLinkedin style={{fontSize:"3rem",color:"#2F6CB4"}}/>
          <a href='https://www.linkedin.com/in/kavisudarbe1411/' target='_blank' rel="noreferrer">LinkedIn</a>
        </div>
        <div>
            <FaGithub style={{fontSize:"3rem",color:"#000"}}/>
            <a href='https://github.com/kavisudar' target='_blank' rel="noreferrer">Github</a>
        </div>
        <div>
            <FaEnvelope style={{fontSize:"3rem",color:"#000",marginTop:"8px"}}/>
            <a href='mailto:kavisudar.be14@gmail.com'>Mail</a>
        </div>
          </div>
          
        </div>
        <h1>Contact</h1>
        <h3>Have a question, collaboration idea, or just want to connect?</h3>
        <img src="Mail.svg" alt="img failed" id='mail'/>
        <div className="contact">
          <form action="https://formspree.io/f/xkgrwjwq" method="POST">
            <table>
              <tbody>
                <tr>
                  <td><label>Name</label></td>
                  <td><input type="text" id="name" name="name" required placeholder='Enter Your Name' /></td>
                </tr>
                <tr>
                  <td><label>Email</label></td>
                  <td><input type="email" id="email" name="email" placeholder='Enter Your Email Id' required /></td>
                </tr>
                <tr>
                  <td><label htmlFor="message">Message</label></td>
                  <td><textarea id="message" name="message" rows="4" placeholder='Enter Your Message' required></textarea></td>
                </tr>
                <tr>
                  <td colSpan="2"><button type="submit" onClick={handle}>Send</button></td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
      <footer>
        <div className="footer-content">
          <div className="footer-logo">
          <p>&copy; {year} Kavisudar. All rights reserved.</p>
          <p>Designed and Developed by Kavisudar❤️</p>
          </div>
        </div>
      </footer>
      {/* Notification */}
      {notificationVisible && (
        <div className="center">
          <div className="check">
            <span>Form Submitted!</span>
          </div>
        </div>
      )}
      
    </>
  );
}
