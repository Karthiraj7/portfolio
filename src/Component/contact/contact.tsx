import React, { useState } from "react";
import "./contact.css";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="contact-section">
      <h1 className="contact-title">CONTACT</h1>
      <p className="contact-subtitle">
        Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. 
        Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est.
      </p>
      <div className="contact-divider"></div>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          required
          placeholder="ENTER YOUR NAME*"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="ENTER YOUR EMAIL*"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="PHONE NUMBER"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          required
          placeholder="YOUR MESSAGE*"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default ContactForm;
