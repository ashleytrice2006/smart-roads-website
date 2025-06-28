import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://smart-roads-new-site.vercel.app/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', company: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white px-6 py-20 md:px-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-smartOrange mb-4">
          Contact Smart Roads
        </h1>
        <p className="text-gray-700 text-lg">
          Got questions, feedback, or want a demo? Fill out the form below and we’ll get back to you shortly.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
            Your Name
          </label>
          <input
            id="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Jane Doe"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-smartOrange"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-1">
            Company Name
          </label>
          <input
            id="company"
            value={formData.company}
            onChange={handleChange}
            type="text"
            placeholder="Your Company Ltd"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-smartOrange"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
            Your Email
          </label>
          <input
            id="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="you@company.com"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-smartOrange"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            placeholder="+64 21 123 4567"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-smartOrange"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            placeholder="Type your message here..."
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-smartOrange"
          />
        </div>

        <button
          type="submit"
          className="bg-smartOrange text-white px-6 py-3 rounded font-semibold hover:bg-orange-700 transition shadow-sm"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className="text-sm text-green-600 mt-2">✅ Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-600 mt-2">❌ Something went wrong. Please try again.</p>
        )}
      </form>

      <div className="max-w-2xl mx-auto mt-20 space-y-8 text-gray-800">
        <h2 className="text-xl font-bold text-center mb-4">Smart Roads Contact Details</h2>

        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <svg className="w-6 h-6 text-smartOrange mt-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm10 15a1.5 1.5 0 1 0 .001-2.999A1.5 1.5 0 0 0 12 19zm4-4.5V9H8v5.5l4 2 4-2z" />
          </svg>
          <div>
            <p className="text-sm text-gray-600 font-semibold">Email</p>
            <a
              href="mailto:support@smartroads.co.nz"
              className="text-smartOrange font-medium hover:underline"
            >
              support@smartroads.co.nz
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <svg className="w-6 h-6 text-smartOrange mt-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
          </svg>
          <div>
            <p className="text-sm text-gray-600 font-semibold">Head Office</p>
            <p className="text-sm leading-relaxed">
              211 Te Ranga Memorial Drive,<br />
              Pyes Pa, Tauranga,<br />
              Bay Of Plenty, 3112<br />
              New Zealand
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;




