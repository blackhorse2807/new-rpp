'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What products does VelebitGreen offer?',
    answer: 'We offer a wide range of eco-friendly and sustainable agriculture products including fertilizers, seeds, and tools.',
  },
  {
    question: 'How can I become a seller on your platform?',
    answer: 'You can register through the "Seller" section and follow the onboarding process. Our team will assist you at every step.',
  },
  {
    question: 'Where do you operate?',
    answer: 'Currently, we operate pan-India and are expanding to global markets soon.',
  },
  {
    question: 'How do I contact support?',
    answer: 'Use the contact form or email us at support@velebitgreen.com. We usually respond within 24 hours.',
  },
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-green-200 rounded-md">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-3 flex justify-between items-center font-semibold text-lg text-[#027e3f] hover:bg-green-50 transition"
      >
        {question}
        {open ? <ChevronUp className="w-5 h-5 text-green-600" /> : <ChevronDown className="w-5 h-5 text-green-600" />}
      </button>
      <div
        className={`px-4 pt-0 pb-3 text-gray-700 transition-all duration-300 ease-in-out ${
          open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen px-4 py-12 bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#027e3f] mb-10">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-md">
          {/* Office Contact Details */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Office</h2>
            <p className="mb-2"><strong>Address:</strong> C312, Patel Hall of Residence, IIT Kharagpur</p>
            <p className="mb-2"><strong>Email:</strong> info@velebitgreen.com</p>
            <p className="mb-2"><strong>Phone:</strong> +91 98765 43210</p>
            <p className="mb-2"><strong>Support:</strong> support@velebitgreen.com</p>
            <p className="mt-6 text-sm text-gray-600">We&apos;re available Mon-Fri, 9:00 AM to 6:00 PM IST</p>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-700 hover:bg-[#027e3f] text-white font-semibold py-2 rounded-md transition"
              >
                Send Message
              </button>
              {submitted && (
                <p className="text-green-600 text-sm mt-2">Thank you! Your message has been sent.</p>
              )}
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-700 mb-4 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
