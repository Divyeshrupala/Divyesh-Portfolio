import {
  Globe,
  Code,
  Smartphone,
  Database,
  Zap,
  Palette,
  Layout,
  Crown,
  Settings,
} from "lucide-react";
import { Helmet } from "react-helmet";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Creating responsive and modern websites using the latest web technologies. From landing pages to complex web applications.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Performance",
        "Cross-browser Compatible",
      ],
    },
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Building interactive user interfaces with React, JavaScript, and modern CSS frameworks for seamless user experiences.",
      features: ["React.js", "HTML5 & CSS3", "JavaScript ES6+", "Tailwind CSS"],
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Developing robust server-side applications and APIs with Node.js, ensuring secure and efficient data management.",
      features: [
        "Node.js & Express",
        "RESTful APIs",
        "Database Design",
        "Authentication",
      ],
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Ensuring your website looks perfect on all devices, from mobile phones to desktop computers.",
      features: [
        "Mobile-First",
        "Tablet Optimized",
        "Desktop Enhanced",
        "Touch Friendly",
      ],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Optimizing websites for lightning-fast load times and smooth interactions to enhance user experience.",
      features: [
        "Code Splitting",
        "Lazy Loading",
        "Image Optimization",
        "Caching Strategies",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design Implementation",
      description:
        "Transforming designs into pixel-perfect, interactive web pages with attention to detail and user experience.",
      features: [
        "Design Systems",
        "Component Libraries",
        "Animations",
        "Accessibility",
      ],
    },
  ];

  const pricingPlans = [
    {
      icon: Layout,
      title: "Static Website",
      price: "₹3999",
      description:
        "Perfect for small businesses and personal portfolios. Fast, responsive, and SEO-ready.",
      features: [
        "5 Static HTML Pages",
        "Fully Responsive Design",
        "Working Contact Form",
        "On-Page SEO Optimization",
        "Image Compression & Optimization",
        "1 Year Free Domain like .in/.com/.net",
        "Wattsapp/Call/Email Button Integration",
        "Google Map Integration",
        "30 Days Post-Launch Support",
      ],
    },
    {
      icon: Crown,
      title: "Premium Design",
      price: "₹7999",
      description:
        "Advanced features with premium design. Up to 12 pages with Great UI/UX and animations and SEO Friendly.",
      features: [
        "12 Responsive HTML Pages",
        "Mobile-First Responsive Design",
        "Contact Form + Blog Pages",
        "Advanced SEO Implementation",
        "Performance Optimization",
        "1 Year Free Domain like .in/.com/.net",
        "Wattsapp/Call/Email Button Integration",
        "60 Days Post-Launch Support",
      ],
    },
    {
      icon: Settings,
      title: "Custom Solution",
      price: "Custom",
      description:
        "Tailored websites for complex needs. Full-stack development with your specific requirements.",
      features: [
        "Unlimited Custom Pages",
        "Responsive website design",
        "Custom Functionality Development",
        "Node.js Backend Integration",
        "Database Design & Setup",
        "E-commerce Functionality Ready",
        "Wattsapp/Call/Email Button Integration",
        "Priority 24/7 Support",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        {/* Primary Local SEO */}
        <title>
          Make Your Own Website with Low Budget ₹3999 in Gandhinagar, Gujarat |
          Web Development & Internship – Divyesh Rupala
        </title>

        <meta
          name="description"
          content="Make your own website with low budget ₹3999 in Gandhinagar, Gujarat, India. Professional web development services for startups, shops, and individuals. Internship provided for freshers and last year UG students to grow their career with real projects."
        />

        <meta
          name="keywords"
          content="make your own website gandhinagar, low budget website gandhinagar, website development gandhinagar gujarat, web developer near me, website ₹3999 india, internship for freshers gujarat, web development internship gandhinagar, last year ug student internship, full-stack developer gandhinagar"
        />

        <meta name="author" content="Divyesh Rupala" />
        <meta name="robots" content="index, follow" />

        {/* Local SEO */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Gandhinagar, Gujarat, India" />
        <meta name="geo.position" content="23.2156;72.6369" />
        <meta name="ICBM" content="23.2156, 72.6369" />

        <link rel="canonical" href="https://divyeshrupala.in/services" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Divyesh Rupala" />
        <meta property="og:url" content="https://divyeshrupala.in/services" />
        <meta
          property="og:title"
          content="Low Budget Website ₹3999 in Gandhinagar | Web Development & Internship"
        />
        <meta
          property="og:description"
          content="Affordable website development in Gandhinagar, Gujarat starting at ₹3999. Also providing internships for freshers and final year UG students to build real-world skills."
        />
        <meta
          property="og:image"
          content="https://divyeshrupala.in/og-services.jpg"
        />
        <meta
          property="og:image:alt"
          content="Low Budget Website Development and Internship in Gandhinagar Gujarat"
        />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Make Your Own Website ₹3999 | Gandhinagar Gujarat"
        />
        <meta
          name="twitter:description"
          content="Low budget website development in Gandhinagar, Gujarat. Internship available for freshers & last year UG students."
        />
        <meta
          name="twitter:image"
          content="https://divyeshrupala.in/og-services.jpg"
        />
      </Helmet>

      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              My <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web development solutions tailored to your needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass p-8 rounded-2xl hover:bg-white/10 transition-all group hover:scale-105"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start gap-3 pl-1"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-1.5" />
                      <span className="text-sm text-muted-foreground text-justify leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Make Your Own Website in{" "}
                <span className="text-gradient">Low Budget</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Affordable professional websites starting at just ₹3999. Perfect
                for startups and small businesses.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className="glass p-8 rounded-2xl hover:bg-white/10 transition-all group hover:scale-105 text-center border-2 border-transparent hover:border-primary/50"
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                    <plan.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                  <div className="text-4xl font-bold text-gradient mb-6">
                    {plan.price}
                  </div>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-justify mx-4">
                    {plan.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3 pl-1"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1.5" />
                        <span className="text-sm text-muted-foreground text-justify leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="/project-inquiry"
                    className="inline-block w-full px-6 py-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white rounded-xl font-semibold transition-all hover:scale-105"
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="glass p-8 md:p-12 rounded-2xl mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              My <span className="text-gradient">Process</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  desc: "Understanding your requirements and goals",
                },
                {
                  step: "02",
                  title: "Planning",
                  desc: "Creating detailed project roadmap",
                },
                {
                  step: "03",
                  title: "Development",
                  desc: "Building with best practices and clean code",
                },
                {
                  step: "04",
                  title: "Delivery",
                  desc: "Testing, deployment, and ongoing support",
                },
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-gradient mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center glass p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your{" "}
              <span className="text-gradient">Project?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with
              professional web development services.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
