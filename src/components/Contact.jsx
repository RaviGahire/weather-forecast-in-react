import React from 'react'
import { Footer } from './Footer';


export function Contact({ companyName = "Your Company" }) {
  return (
<>
    <main className="bg-gray-50 text-gray-900 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Contact {companyName}
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We'd love to hear from you! Fill out the form below or reach us directly.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-2xl shadow-sm">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Your message has been sent! (Demo form)');
            }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your full name"
                className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="How can we help you?"
                className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-medium py-3 rounded-lg hover:opacity-95 transition"
            >
              Send Message
            </button>
          </form>

          <aside className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Get in touch</h2>
              <p className="text-gray-600">
                Reach out to us using the contact form or via the details below. We’ll get back to you within 24 hours.
              </p>
            </div>

            <div className="text-gray-700 text-sm space-y-3">
              <p>
                <strong>Address:</strong><br />
                123 Innovation Street, Mumbai, India
              </p>
              <p>
                <strong>Phone:</strong><br />
                +91 98765 43210
              </p>
              <p>
                <strong>Email:</strong><br />
                <a href="mailto:hello@yourcompany.com" className="text-indigo-600 underline">
                  hello@yourcompany.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Follow us</h3>
              <div className="flex gap-4 text-indigo-600">
                <a href="#" aria-label="Facebook" className="hover:text-indigo-800 transition">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-indigo-800 transition">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-indigo-800 transition">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </aside>
        </section>
        </div>
    </main>
<Footer/>
</>
  );
}