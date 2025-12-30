import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    education: '',
    phone: '',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.education || !formData.phone || !formData.description) {
      alert('Error: Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Error: Please enter a valid email address');
      return;
    }

    // Phone validation (basic)
    const phoneRegex = /^[+]?[0-9\s\-()]{10,}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      alert('Error: Please enter a valid phone number');
      return;
    }

    setIsSubmitting(true);

    // Create email content in the format you want
    const subject = `Contact Form Submission from ${formData.name}`;
    const body = `
CONTACT FORM SUBMISSION - DIVYESH RUPALA'S PORTFOLIO

Contact Details:
────────────────
• Name: ${formData.name}
• Email: ${formData.email}
• Education Level: ${formData.education}
• Phone Number: ${formData.phone}

Message:
────────────────
${formData.description}

────────────────
Submitted on: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
    `;

    // Alternative format: name:divyesh, email:abc@email, etc.
    const bodySimple = `
name: ${formData.name}, 
email: ${formData.email}, 
education: ${formData.education}, 
phone: ${formData.phone}, 
message: ${formData.description}
    
Submitted on: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
    `;
    
    // Open user's default email client with pre-filled content
    const mailtoLink = `mailto:divyeshrupala789@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodySimple)}`;
    window.open(mailtoLink, '_blank');
    
    // Show success message
    alert(`✅ Message Prepared Successfully!\n\nYour email client has opened with a pre-filled message.\n\n📧 TO: divyeshrupala789@gmail.com\n📋 Subject: ${subject}\n\nPlease review and send the email to complete your message.\n\n✅ The message will be sent in this format:\nname: ${formData.name}, email: ${formData.email}, education: ${formData.education}, phone: ${formData.phone}, message: ${formData.description}`);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      education: '',
      phone: '',
      description: '',
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass p-6 rounded-2xl hover:bg-white/10 transition-all group hover:scale-[1.02]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a 
                    href="mailto:divyesh@example.com" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    divyeshrupala789@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl hover:bg-white/10 transition-all group hover:scale-[1.02]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a 
                    href="tel:+919876543210" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 6354218069
                  </a>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl hover:bg-white/10 transition-all group hover:scale-[1.02]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-sm text-muted-foreground">Gujarat, India</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl">
              <h3 className="font-semibold mb-3">How It Works</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Fill the form, click submit, and your email client will open with a pre-filled message. Just review and send!
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-400">Direct Email Method</span>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl">
              <h3 className="font-semibold mb-3">Email Format</h3>
              <p className="text-sm text-muted-foreground">
                Your message will be sent in this format:
              </p>
              <div className="mt-2 p-2 bg-background rounded text-xs font-mono">
                name: ..., email: ..., education: ..., phone: ..., message: ...
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Divyesh Rupala"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="abc@gmail.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="education" className="block text-sm font-medium mb-2">
                    Education <span className="text-primary">*</span>
                  </label>
                  <select
                    id="education"
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    required
                    disabled={isSubmitting}
                  >
                    <option value="">Select your education level</option>
                    <option value="high-school">High School</option>
                    <option value="undergraduate">Undergraduate</option>
                    <option value="graduate">Graduate</option>
                    <option value="postgraduate">Postgraduate</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number <span className="text-primary">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="+91 XXXXX XXXXX"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="description" className="block text-sm font-medium mb-2">
                  Why are you contacting me? <span className="text-primary">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell me about your project, question, or how I can help you..."
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Opening Email...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Open Email to Send
                  </>
                )}
              </button>

              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <p className="text-sm text-blue-500/90 flex items-center gap-2">
                  <span className="text-blue-500">ℹ️</span>
                  <span>
                    <strong>Note:</strong> After submitting, your email client will open with a pre-filled message. 
                    Just review and click send. Your message will be sent in the format: 
                    <code className="ml-2 px-2 py-1 bg-black/20 rounded text-xs">name: ..., email: ..., education: ..., phone: ..., message: ...</code>
                  </span>
                </p>
              </div>

              <p className="text-xs text-muted-foreground mt-4">
                By submitting this form, you agree to our privacy policy. Your information is secure and will only be used to respond to your inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;