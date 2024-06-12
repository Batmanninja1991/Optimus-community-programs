import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    service: "",
    message: "",
  });

  const generateMailtoLink = () => {
    const subject = encodeURIComponent(`New Application from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.number}\nEmail: ${formData.email}\nService: ${formData.service}\n\n ${formData.message}`
    );
    return `mailto:optimuscommunityprograms@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    window.location.href = generateMailtoLink();
  };

  return (
    <div
      id="contact"
      className="w-full h-screen mt-24 flex items-center justify-center bg-gray-100 p-6"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full h-full md:w-2/3 md:h-2/3">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="user_name"
            >
              Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="user_email"
            >
              Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="user_message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your message"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
