import React, { useState } from 'react';
import { Footer } from './Footer';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, User, Building, CheckCircle } from 'lucide-react';

export  function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      info: "support@weatherpro.com",
      subInfo: "We'll respond within 24 hours",
      color: "from-blue-500 to-cyan-500",
      link: "mailto:support@weatherpro.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      subInfo: "Mon-Fri from 8am to 6pm",
      color: "from-purple-500 to-pink-500",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      info: "123 Weather Street",
      subInfo: "San Francisco, CA 94102",
      color: "from-green-500 to-emerald-500",
      link: "#"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      info: "Monday - Friday",
      subInfo: "8:00 AM - 6:00 PM PST",
      color: "from-orange-500 to-red-500",
      link: "#"
    }
  ];

  const socialLinks = [
    { name: "Twitter", icon: "𝕏", link: "#", color: "hover:bg-blue-600" },
    { name: "LinkedIn", icon: "in", link: "#", color: "hover:bg-blue-700" },
    { name: "Facebook", icon: "f", link: "#", color: "hover:bg-blue-600" },
    { name: "Instagram", icon: "📷", link: "#", color: "hover:bg-pink-600" }
  ];

  const faqs = [
    {
      question: "How accurate are your forecasts?",
      answer: "Our forecasts maintain 99.9% accuracy using advanced AI models."
    },
    {
      question: "Do you offer API access?",
      answer: "Yes! We provide comprehensive API documentation for developers."
    },
    {
      question: "What regions do you cover?",
      answer: "We provide weather data for over 150 countries worldwide."
    }
  ];

  return (
    <>
    <div className="min-h-screen  bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-white">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0  bg-gradient-to-bl from-blue-400 via-blue-600 to-blue-800"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-3 py-8 md:px-6 md:py-16 text-center">
          <div className="animate-fadeIn">
            <div className="inline-flex items-center gap-2 bg-gray-800/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-blue-500/20">
              <MessageSquare className="w-5 h-5" />
              <span className=" text-sm font-medium">Get In Touch</span>
            </div>
            
            <h1 className="text-3xl md:text-6xl font-bold mb-6 ">
              Let's Start a Conversation
            </h1>
            
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Have questions about our weather services? We're here to help. 
              Reach out to us and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="max-w-7xl mx-auto px-3 py-6 md:px-6 md:py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="bg-[#1e293b] rounded-2xl p-6 border border-gray-700/50 hover:scale-105 hover:border-blue-500/50 transition-all group"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className={`inline-flex p-4 bg-gradient-to-br ${item.color} rounded-xl mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-white mb-1">{item.info}</p>
              <p className="text-gray-400 text-sm">{item.subInfo}</p>
            </a>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-[#1e293b] rounded-3xl p-3 md:p-8 border border-gray-700/50">
              <h2 className="text-lg md:text-3xl font-bold mb-6 flex items-center gap-3">
                <Send className="md:w-8 md:h-8 text-blue-400" />
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="text-center py-16 animate-fadeIn">
                  <div className="inline-flex p-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-6 animate-bounce">
                    <CheckCircle className="w-8 h-8 md:w-16 md:h-16" />
                  </div>
                  <h3 className=" text-lg md:text-2xl font-bold mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="relative">
                      <label className="block text-sm font-medium mb-2 text-gray-300">Full Name *</label>
                      <div className="relative">
                        <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'name' ? 'text-blue-400' : 'text-gray-500'}`} />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-12 py-4 focus:border-blue-500 focus:outline-none transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <label className="block text-sm font-medium mb-2 text-gray-300">Email Address *</label>
                      <div className="relative">
                        <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'email' ? 'text-blue-400' : 'text-gray-500'}`} />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-12 py-4 focus:border-blue-500 focus:outline-none transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone Field */}
                    <div className="relative">
                      <label className="block text-sm font-medium mb-2 text-gray-300">Phone Number</label>
                      <div className="relative">
                        <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'phone' ? 'text-blue-400' : 'text-gray-500'}`} />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-12 py-4 focus:border-blue-500 focus:outline-none transition-colors"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    {/* Company Field */}
                    <div className="relative">
                      <label className="block text-sm font-medium mb-2 text-gray-300">Company</label>
                      <div className="relative">
                        <Building className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'company' ? 'text-blue-400' : 'text-gray-500'}`} />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('company')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-12 py-4 focus:border-blue-500 focus:outline-none transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-4 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="How can we help you?"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-4 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* FAQ Section */}
            <div className="bg-[#1e293b] rounded-3xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-bold mb-4">Quick Answers</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-[#0f172a] rounded-xl p-4 hover:scale-105 transition-transform">
                    <h4 className="font-semibold mb-2 text-blue-400">{faq.question}</h4>
                    <p className="text-gray-400 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-[#1e293b] rounded-3xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`bg-[#0f172a] rounded-xl p-4 text-center font-bold transition-all hover:scale-105 ${social.color}`}
                  >
                    <div className="text-2xl mb-1">{social.icon}</div>
                    <div className="text-sm">{social.name}</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Support Hours */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-6">
              <Clock className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-sm opacity-90">
                Our team is always here to help. Get instant responses to your queries anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section (Placeholder) */}
      <div className="max-w-7xl mx-auto px-3 py-6 md:px-6 md:py-12">
        <div className="bg-[#1e293b] rounded-3xl overflow-hidden border border-gray-700/50 h-96 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 mx-auto mb-4 text-blue-400" />
            <h3 className="text-2xl font-bold mb-2">Visit Our Office</h3>
            <p className="text-gray-400">123 Weather Street, San Francisco, CA 94102</p>
          </div>
        </div>
      </div>

    
    </div>
    <Footer/>
    </>
  );
}