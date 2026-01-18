import { Code, GraduationCap, Briefcase, Award } from "lucide-react";
import { Helmet } from "react-helmet";

const About = () => {
  const skills = [
    {
      category: "Languages",
      items: ["C/C++", "Python", "Java", "JavaScript", "SQL"],
    },
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JS", "React JS", "Tailwind CSS"],
    },
    { category: "Backend", items: ["Node.js", "Express", "SQL Databases"] },
    {
      category: "Tools & Others",
      items: ["Git", "Data Analytics", "VS Code", "Postman"],
    },
  ];

  const timeline = [
    {
      icon: GraduationCap,
      title: "Computer Engineering Student",
      subtitle: "6th Semester",
      description:
        "Currently pursuing my Bachelor's degree in Computer Engineering, focusing on software development and web technologies.",
    },
    {
      icon: Briefcase,
      title: "Web Developer",
      subtitle: "Current Role",
      description:
        "Working as a freelance web developer, creating responsive and user-friendly websites for clients using modern web technologies and best practices.",
    },
    {
      icon: Code,
      title: "Full Stack Development",
      subtitle: "Specialization",
      description:
        "Experienced in both frontend and backend development, delivering complete web solutions.",
    },
    {
      icon: Award,
      title: "Continuous Learning",
      subtitle: "Philosophy",
      description:
        "Always exploring new technologies and methodologies to stay current in the fast-paced tech industry.",
    },
  ];

  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>
          About Divyesh Rupala | Computer Engineering Student & Web Developer in
          Gujarat
        </title>

        <meta
          name="description"
          content="About Divyesh Rupala, a 6th semester Computer Engineering student and Web Developer from Gujarat, India. Skilled in frontend (React JS, HTML, CSS, JavaScript), backend (Node.js, SQL), and continuously learning full-stack web technologies."
        />

        <meta
          name="keywords"
          content="about divyesh rupala, computer engineering student gujarat, web developer gujarat, frontend developer react js, full stack developer student, software engineering student india, web development learner"
        />

        <meta name="author" content="Divyesh Rupala" />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://divyeshrupala.in/about" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Divyesh Rupala" />
        <meta property="og:url" content="https://divyeshrupala.in/about" />
        <meta
          property="og:title"
          content="About Divyesh Rupala | Web Developer & Computer Engineering Student"
        />
        <meta
          property="og:description"
          content="Computer Engineering student specializing in web development, frontend technologies, and full-stack learning. Passionate about clean code, modern tools, and continuous growth."
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Divyesh Rupala | Web Developer & Engineering Student"
        />
        <meta
          name="twitter:description"
          content="6th semester Computer Engineering student and Web Developer skilled in React JS, JavaScript, Node.js and modern web technologies."
        />
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
              A passionate developer dedicated to creating impactful digital
              experiences
            </p>
          </div>

          {/* Introduction */}
          <div className="glass p-8 rounded-2xl mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Hello! 👋</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm Divyesh Rupala, a 6th-semester Computer Engineering student
                with a strong interest in web development and modern software
                technologies. I enjoy building interactive and user-friendly
                websites that focus on performance, usability, and clean design.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Along with my learning journey, I actively work as a freelance
                web developer, helping individuals, startups, and small
                businesses build responsive and professional websites using
                modern tools like React, JavaScript, and Node.js.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I also guide students and freshers by providing online and
                offline courses, where I share practical knowledge based on
                real-world development scenarios. My focus is on helping
                learners understand concepts clearly and apply them in real
                projects.
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
                      <h3 className="text-xl font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-secondary text-sm mb-2">
                        {item.subtitle}
                      </p>
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
              { label: "Years of Study", value: "3+" },
              { label: "Projects Completed", value: "15+" },
              { label: "Technologies", value: "10+" },
              { label: "Happy Clients", value: "5+" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl text-center hover:bg-white/10 transition-all"
              >
                <p className="text-3xl font-bold text-gradient mb-2">
                  {stat.value}
                </p>
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
