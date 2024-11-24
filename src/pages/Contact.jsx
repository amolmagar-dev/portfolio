import React, { useState } from 'react';
import { Mail, Github, Linkedin, Phone, MapPin } from 'lucide-react';

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="p-6">
      <h2 className={`text-2xl font-bold mb-4 ${theme.activeText}`}>Contact Me</h2>

      <div className={`mb-8 grid md:grid-cols-2 gap-8`}>
        <div className="space-y-4">
          <p className={`flex items-center ${theme.text}`}>
            <Mail className={`mr-2 ${theme.highlightText}`} size={16} />
            magaramol09@gmail.com
          </p>
          <p className={`flex items-center ${theme.text}`}>
            <Phone className={`mr-2 ${theme.highlightText}`} size={16} />
            +91 9730989996
          </p>
          <p className={`flex items-center ${theme.text}`}>
            <MapPin className={`mr-2 ${theme.highlightText}`} size={16} />
            Pune, India, 411041
          </p>
          <p className={`flex items-center ${theme.text}`}>
            <Github className={`mr-2 ${theme.highlightText}`} size={16} />
            github.com/magaramol09
          </p>
          <p className={`flex items-center ${theme.text}`}>
            <Linkedin className={`mr-2 ${theme.highlightText}`} size={16} />
            linkedin.com/in/amol-magar
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-2 rounded-md border ${theme.border} ${theme.bg} ${theme.text}`}
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 rounded-md border ${theme.border} ${theme.bg} ${theme.text}`}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full p-2 rounded-md border ${theme.border} ${theme.bg} ${theme.text}`}
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className={`w-full p-2 rounded-md border ${theme.border} ${theme.bg} ${theme.text}`}
              required
            />
          </div>
          <button
            type="submit"
            className={`px-4 py-2 rounded-md ${theme.highlightText} border ${theme.border} hover:opacity-80`}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;