import React, { useState } from "react";

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
    console.log("Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-2xl font-semibold border-2 border-black py-2 px-6 inline-block mb-6 tracking-widest">
          CONTACT
        </h1>
        <p className="mb-6 text-gray-600">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est.
        </p>
        <hr className="w-16 mx-auto border-t-2 border-black mb-10" />

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            required
            placeholder="ENTER YOUR NAME*"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-b-2 border-black bg-transparent py-2 px-4 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="ENTER YOUR EMAIL*"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b-2 border-black bg-transparent py-2 px-4 focus:outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="PHONE NUMBER"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border-b-2 border-black bg-transparent py-2 px-4 focus:outline-none"
          />
          <textarea
            name="message"
            required
            placeholder="YOUR MESSAGE*"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full border-2 border-black bg-transparent py-2 px-4 focus:outline-none resize-none"
          />
          <button
            type="submit"
            className="mt-4 border-t-2 border-black pt-4 tracking-widest"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
