import { Globe, Code, Smartphone, Database, Zap, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Creating responsive and modern websites using the latest web technologies. From landing pages to complex web applications.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Cross-browser Compatible'],
    },
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Building interactive user interfaces with React, JavaScript, and modern CSS frameworks for seamless user experiences.',
      features: ['React.js', 'HTML5 & CSS3', 'JavaScript ES6+', 'Tailwind CSS'],
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Developing robust server-side applications and APIs with Node.js, ensuring secure and efficient data management.',
      features: ['Node.js & Express', 'RESTful APIs', 'Database Design', 'Authentication'],
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Ensuring your website looks perfect on all devices, from mobile phones to desktop computers.',
      features: ['Mobile-First', 'Tablet Optimized', 'Desktop Enhanced', 'Touch Friendly'],
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing websites for lightning-fast load times and smooth interactions to enhance user experience.',
      features: ['Code Splitting', 'Lazy Loading', 'Image Optimization', 'Caching Strategies'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design Implementation',
      description: 'Transforming designs into pixel-perfect, interactive web pages with attention to detail and user experience.',
      features: ['Design Systems', 'Component Libraries', 'Animations', 'Accessibility'],
    },
  ];

  return (
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
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="glass p-8 md:p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            My <span className="text-gradient">Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                desc: 'Understanding your requirements and goals',
              },
              {
                step: '02',
                title: 'Planning',
                desc: 'Creating detailed project roadmap',
              },
              {
                step: '03',
                title: 'Development',
                desc: 'Building with best practices and clean code',
              },
              {
                step: '04',
                title: 'Delivery',
                desc: 'Testing, deployment, and ongoing support',
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-gradient mb-4">{phase.step}</div>
                <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center glass p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your <span className="text-gradient">Project?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help bring your ideas to life with professional web development services.
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
  );
};

export default Services;
