// pages/ProjectInquiry.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  User, Mail, Phone, Layout, DollarSign, MessageCircle,
  Award, Check, ArrowRight
} from 'lucide-react';

const ProjectInquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // MAILTO (Pure JS – SEO Safe)
  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent("New Website Project Inquiry");
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Project Type: ${formData.projectType}
Budget: ${formData.budget}

Message:
${formData.message}
    `);

    window.location.href = `mailto:divyeshrupala789@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>Custom Website Development | Starting ₹4,999 | Divyesh Rupala</title>
        <meta
          name="description"
          content="Affordable custom website development in India starting at ₹4,999. Get a professional, SEO-friendly website with fast delivery."
        />
        <meta name="author" content="Divyesh Rupala" />
        <link rel="canonical" href="https://divyeshrupala.in/project-inquiry" />

        {/* Open Graph */}
        <meta property="og:title" content="Custom Website Development | Divyesh Rupala" />
        <meta
          property="og:description"
          content="Get a professional website starting at ₹4,999. Custom design and fast delivery."
        />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Divyesh Rupala Web Development",
            "email": "divyeshrupala789@gmail.com",
            "areaServed": "India",
            "priceRange": "₹4,999+",
            "serviceType": "Website Development"
          }
          `}
        </script>
      </Helmet>

      <main className="min-h-screen py-24 px-6 lg:px-12 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-blue-900/30" />

        <section className="relative max-w-6xl mx-auto z-10">
          {/* HERO */}
          <header className="text-center mb-20">
            <Award className="w-10 h-10 text-yellow-400 mx-auto mb-4" />

            {/* H1 – IMPORTANT */}
            <h1 className="text-5xl lg:text-4xl font-black text-white mb-6">
              Custom Website Development Services
            </h1>

            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Get a professional, SEO-friendly website starting at just ₹4,999.
            </p>
          </header>

          {/* FORM SECTION */}
          <section
            className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-12 max-w-2xl mx-auto"
            aria-labelledby="project-form"
          >
            <h2 id="project-form" className="sr-only">
              Website Project Inquiry Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8" aria-label="Website project inquiry form">
              
              {/* Name */}
              <label htmlFor="name" className="block text-white font-semibold">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                onChange={handleChange}
                className="w-full h-16 px-6 rounded-2xl bg-white/10 text-white"
                placeholder="Your full name"
              />

              {/* Phone */}
              <label htmlFor="phone" className="block text-white font-semibold">
                WhatsApp Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                onChange={handleChange}
                className="w-full h-16 px-6 rounded-2xl bg-white/10 text-white"
                placeholder="+91 XXXXX XXXXX"
              />

              {/* Email */}
              <label htmlFor="email" className="block text-white font-semibold">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={handleChange}
                className="w-full h-16 px-6 rounded-2xl bg-white/10 text-white"
                placeholder="hello@business.com"
              />

              {/* Budget */}
              <label htmlFor="budget" className="block text-white font-semibold">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                required
                onChange={handleChange}
                className="w-full h-16 px-6 rounded-2xl bg-slate-800 text-white"
              >
                <option value="">Select budget</option>
                <option value="₹5K - ₹10K">₹5K - ₹10K</option>
                <option value="₹10K - ₹25K">₹10K - ₹25K</option>
                <option value="₹25K+">₹25K+</option>
              </select>

              {/* Message */}
              <label htmlFor="message" className="block text-white font-semibold">
                Project Requirements
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                onChange={handleChange}
                className="w-full px-6 py-5 rounded-2xl bg-white/10 text-white"
                placeholder="Describe your project requirements"
              />

              <button
                type="submit"
                className="w-full h-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-bold rounded-3xl flex items-center justify-center gap-4"
              >
                <Check />
                Get My Custom Proposal
                <ArrowRight />
              </button>
            </form>
          </section>
        </section>
      </main>
    </>
  );
};

export default ProjectInquiry;
