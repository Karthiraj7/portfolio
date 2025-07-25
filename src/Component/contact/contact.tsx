import React, { useState } from "react";
import "./contact.css";

export default function ContactForm() {
  const [result, setResult] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    formData.append("access_key", "a59b9d54-8c67-4139-80ac-82a468c2d97e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form submitted successfully!");
        form.reset();
      } else {
        console.error("Submission error:", data);
        setResult(data.message || "Submission failed. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <div className="contact-section" id="contact">
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
          placeholder="ENTER YOUR NAME*"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="ENTER YOUR EMAIL*"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="PHONE NUMBER"
        />
        <textarea
          name="message"
          placeholder="YOUR MESSAGE*"
          required
        ></textarea>
        <button type="submit">SUBMIT</button>
        <span className="form-result">{result}</span>
      </form>
    </div>
  );
}
