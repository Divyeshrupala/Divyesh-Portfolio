import { Github, Linkedin, Mail, Heart, Home, Briefcase, User, FileText, ArrowUp, Twitter, Instagram, Youtube, MessageSquare, Phone, MapPin, ChevronRight, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Show scroll to top button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { href: "/", label: "Home", icon: <Home size={16} /> },
    { href: "/about", label: "About", icon: <User size={16} /> },
    { href: "/projects", label: "Projects", icon: <Briefcase size={16} /> },
    { href: "/blog", label: "Blog", icon: <FileText size={16} /> },
    { href: "/contact", label: "Contact", icon: <Mail size={16} /> },
  ];

  // Quick links
  const quickLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/sitemap", label: "Sitemap" },
    { href: "/faq", label: "FAQ" },
  ];

  // Tech stack
  const techStack = [
    "HTML", "CSS", "JavaScript", "React","Node JS", "SQL", "Tailwind CSS","Java", "Python","Pandas","Numpy","Matplotlib", "Github"
  ];

  return (
    <footer className="relative bg-gradient-to-t from-background to-background/95 border-t border-white/10 mt-20">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg transition-all duration-300 z-50 ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="font-bold text-white">DR</span>
              </div>
              <h3 className="text-xl font-bold">Divyesh Rupala</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full-stack developer passionate about creating beautiful, functional web experiences. 
              Let's build something amazing together!
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/Divyeshrupala"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-all hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/divyeshrupala157/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-all hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/divyesh_rupala/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-all hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:divyeshrupala789@gmail.com"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-all hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <ChevronRight size={16} className="text-primary" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary hover:translate-x-1 transition-all group text-sm"
                  >
                    {link.icon}
                    {link.label}
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <ChevronRight size={16} className="text-primary" />
              Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary hover:bg-primary/20 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <h5 className="text-sm font-medium mb-2">Currently Learning</h5>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded text-xs">
                  AI/ML
                </span>
                <span className="px-2 py-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded text-xs">
                  Data Science
                </span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <ChevronRight size={16} className="text-primary" />
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <a href="mailto:divyeshrupala789@gmail.com" className="hover:text-primary transition-colors">
                  divyeshrupala789@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <span>+91 6354218069</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary mt-1" />
                <span>Gandhinagar</span>
              </li>
            </ul>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h5 className="text-sm font-medium mb-2">Join Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/5 border border-r-0 border-white/10 rounded-l-lg focus:outline-none focus:border-primary text-sm"
                />
                  <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-r-lg text-sm font-medium transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                No spam. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright & Links */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              © {currentYear} Divyesh Rupala. All rights reserved.
            </p>
            <div className="flex gap-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Visitor counter (example) */}
          <div className="text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>Visitors: </span>
              <span className="font-mono">+999</span>
            </span>
          </div>
        </div>

        {/* Back to top for mobile */}
        <div className="md:hidden mt-6 text-center">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowUp size={16} />
            Back to top
          </button>
        </div>
      </div>

      {/* Attribution */}
      <div className="bg-black/30 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-muted-foreground">
            Designed and developed by Divyesh Rupala with ❤️.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;