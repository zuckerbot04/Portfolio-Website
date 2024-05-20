// src/components/Contact.js
import './Contact.css'

import React from 'react';

function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <p>You can reach me at <a href="mailto:your.email@example.com">your.email@example.com</a></p>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Message:
                    <textarea name="message" />
                </label>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;

