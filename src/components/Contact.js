import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, e.target, process.env.REACT_APP_EMAILJS_USER_ID)
      .then((result) => {
        // setStatus('Message sent successfully!');
        window.alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); 
      }, (error) => {
        setStatus('An error occurred. Please try again.');
      });
  };

  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="container px-4 md:px-6 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
            I'm always excited to connect with new people and discuss
            potential collaborations. Feel free to reach out!
          </p>
        </div>
        <form className="max-w-md mx-auto grid gap-4" onSubmit={handleSubmit}>
          <input
            className="flex h-10 border border-input text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full px-4 py-2 rounded-md bg-background focus:ring-1 focus:ring-primary focus:outline-none"
            name="name"
            placeholder="Name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="flex h-10 border border-input text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full px-4 py-2 rounded-md bg-background focus:ring-1 focus:ring-primary focus:outline-none"
            name="email"
            placeholder="Email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            className="flex min-h-[80px] border border-input text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full px-4 py-2 rounded-md bg-background focus:ring-1 focus:ring-primary focus:outline-none"
            name="message"
            placeholder="Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            className="rounded-full border-grey-400 h-10 border cursor-pointer shadow-sm shadow-white bg-black text-center font-bold text-lg text-white "
            type="submit"
          >
            Send
          </button>
          {status && <p>{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
