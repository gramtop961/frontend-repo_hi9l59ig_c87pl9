import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      // In a full app this would POST to a backend. For this static portfolio, simulate success.
      await new Promise((r) => setTimeout(r, 800));
      setStatus('Thanks! I will get back to you soon.');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="container mx-auto px-6 md:px-10 lg:px-16 py-20">
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get in touch</h2>
        <p className="mt-2 text-gray-600">Have a project in mind, or just want to say hi? Let’s connect.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <a href="mailto:you@example.com" className="flex items-center gap-3 rounded-xl border bg-white p-4 hover:shadow-sm transition">
            <Mail className="h-5 w-5 text-blue-600" />
            <div>
              <p className="text-sm font-semibold text-gray-800">Email</p>
              <p className="text-xs text-gray-600">you@example.com</p>
            </div>
          </a>
          <a href="tel:+6200000000" className="flex items-center gap-3 rounded-xl border bg-white p-4 hover:shadow-sm transition">
            <Phone className="h-5 w-5 text-blue-600" />
            <div>
              <p className="text-sm font-semibold text-gray-800">Phone</p>
              <p className="text-xs text-gray-600">+62 000 0000</p>
            </div>
          </a>
          <div className="rounded-xl border bg-blue-600 text-white p-4">
            <p className="text-sm font-semibold">Available for Internship</p>
            <p className="text-xs/relaxed opacity-90">Open to front-end, full‑stack, or research roles.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Email address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            className="w-full rounded-lg border px-4 py-3 text-sm h-32 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Tell me about your project or message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white px-5 py-3 text-sm font-medium hover:bg-blue-700 transition"
          >
            <Send className="h-4 w-4" /> Send Message
          </button>
          {status && <p className="text-sm text-gray-600 mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
