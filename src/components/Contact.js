import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID,
      )
      .then(
        (result) => {
          // setStatus('Message sent successfully!');
          window.alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("An error occurred. Please try again.");
        },
      );
  };

  return (
    <section className="bg-background-dark pt-24 pb-12" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
              Ready to start your project?
            </h2>
            <p className="text-lg text-text-muted mb-8 max-w-md">
              Let's discuss how we can build scalable, high-performance software
              for your business.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-dark text-primary border border-[#395156]">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <div className="text-sm text-text-muted">Email</div>
                  <a
                    className="text-white hover:text-primary font-medium"
                    href="mailto:appsylofficial@gmail.com"
                  >
                    appsylofficial@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-dark text-primary border border-[#395156]">
                  <span className="material-symbols-outlined">
                    calendar_month
                  </span>
                </div>
                <div>
                  <div className="text-sm text-text-muted">Availability</div>
                  <div className="text-white font-medium">Always Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="bg-surface-dark p-8 rounded-lg border border-[#395156] shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-sm font-medium text-text-muted mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="block w-full rounded bg-background-dark border border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-12 px-4 outline-none"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-text-muted mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="block w-full rounded bg-background-dark border border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-12 px-4 outline-none"
                    id="email"
                    name="email"
                    placeholder="john@company.com"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-text-muted mb-2"
                  htmlFor="message"
                >
                  Project Details
                </label>
                <textarea
                  className="block w-full rounded bg-background-dark border border-gray-700 text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-4 outline-none"
                  id="message"
                  name="message"
                  placeholder="Tell me about your project needs..."
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                className="w-full rounded-lg bg-primary py-3.5 px-4 text-sm font-bold text-background-dark shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
                type="submit"
              >
                Send Message
              </button>
              {status && <p className="text-sm text-red-400 mt-2">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
