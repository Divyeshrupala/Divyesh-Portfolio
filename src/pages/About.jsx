import { Code, GraduationCap, Briefcase, Award } from 'lucide-react';
import { Helmet } from 'react-helmet';

const About = () => {
  const skills = [
    { category: 'Languages', items: ['C/C++', 'Python', 'Java', 'JavaScript', 'SQL'] },
    { category: 'Frontend', items: ['HTML', 'CSS', 'JS', 'React JS', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'SQL Databases'] },
    { category: 'Tools & Others', items: ['Git', 'Data Analytics', 'VS Code', 'Postman'] },
  ];

  const timeline = [
    {
      icon: GraduationCap,
      title: 'Computer Engineering Student',
      subtitle: '6th Semester',
      description:
        "Currently pursuing my Bachelor's degree in Computer Engineering, focusing on software development and web technologies.",
    },
    {
      icon: Briefcase,
      title: 'Web Developer',
      subtitle: 'Current Role',
      description:
        'Creating interactive and user-friendly websites using modern web technologies and best practices.',
    },
    {
      icon: Code,
      title: 'Full Stack Development',
      subtitle: 'Specialization',
      description:
        'Experienced in both frontend and backend development, delivering complete web solutions.',
    },
    {
      icon: Award,
      title: 'Continuous Learning',
      subtitle: 'Philosophy',
      description:
        'Always exploring new technologies and methodologies to stay current in the fast-paced tech industry.',
    },
  ];

  return (
    <>
      {/* ✅ SEO CHANGES ONLY HERE - Your content 100% unchanged below */}
      <Helmet>
        <title>About | Divyesh Rupala - Frontend Developer & Full-Stack Tech Tutor</title>
        <meta
          name="description"
          content="6th semester Computer Engineering student, Frontend Developer (React JS, HTML, CSS, JavaScript) & Tech Tutor (Java, Python, Node.js, Databases, AI Tools). Gujarat-based web services & online courses."
        />
        <meta
          name="keywords"
          content="frontend developer, React JS tutor, web development courses, Java tutor, Python courses, Node.js training, Gujarat web developer, technology tutor"
        />
        <link rel="canonical" href="https://divyeshrupala.in/about" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://divyeshrupala.in/about" />
        <meta property="og:title" content="About | Divyesh Rupala - Frontend Developer & Tech Tutor" />
        <meta
          property="og:description"
          content="React JS Developer + Tutor for Web Dev, Java, Python, Node.js & AI Tools. Computer Engineering student from Gujarat, India."
        />
        <meta property="og:image" content="https://divyeshrupala.in/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About | Divyesh Rupala - Frontend Developer & Tech Tutor" />
        <meta
          name="twitter:description"
          content="Frontend Developer (React, HTML/CSS/JS) + Full-Stack Tech Tutor | Gujarat"
        />
        <meta name="twitter:image" content="https://divyeshrupala.in/og-image.jpg" />
      </Helmet>

      {/* ✅ YOUR ORIGINAL CONTENT - NOTHING CHANGED */}
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate developer dedicated to creating impactful digital experiences
            </p>
          </div>

          {/* Introduction */}
          <div className="glass p-8 rounded-2xl mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Hello! 👋</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm Divyesh Rupala, a 6th-semester Computer Engineering student with a passion for web
                development. I specialize in creating interactive and user-friendly websites that not only
                look great but also provide exceptional user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My journey in web development started with a curiosity about how websites work, and it has
                evolved into a dedicated pursuit of mastering both frontend and backend technologies. I believe
                in writing clean, efficient code and staying updated with the latest industry trends.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                projects, or sharing knowledge with fellow developers. I'm always excited to take on new
                challenges and collaborate on innovative projects.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              My <span className="text-gradient">Journey</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="glass p-6 rounded-xl hover:bg-white/10 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="text-secondary text-sm mb-2">{item.subtitle}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillGroup, index) => (
                <div
                  key={index}
                  className="glass p-6 rounded-xl hover:bg-white/10 transition-all"
                >
                  <h3 className="text-lg font-semibold mb-4 text-primary">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Years of Study', value: '3+' },
              { label: 'Projects Completed', value: '15+' },
              { label: 'Technologies', value: '10+' },
              { label: 'Happy Clients', value: '5+' },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl text-center hover:bg-white/10 transition-all"
              >
                <p className="text-3xl font-bold text-gradient mb-2">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
