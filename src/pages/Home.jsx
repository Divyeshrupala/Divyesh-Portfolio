import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Database, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Home = () => {
  const featuredSkills = [
    { icon: Code2, name: 'Frontend Development', desc: 'React, JavaScript, HTML/CSS' },
    { icon: Database, name: 'Backend Development', desc: 'Node.js, SQL, Python' },
    { icon: Globe, name: 'Full Stack', desc: 'End-to-end web solutions' },
  ];

  return (
    <>
      <Helmet>
        <title>Home | Divyesh Rupala - Web Developer</title>
        <meta
          name="description"
          content="Explore the portfolio, skills, and featured web development projects of Divyesh Rupala, a Computer Engineering student and React developer."
        />
        <link rel="canonical" href="https://divyeshrupala.in/" />
        <meta
          property="og:title"
          content="Home | Divyesh Rupala - Web Developer"
        />
        <meta
          property="og:description"
          content="Discover React and Node.js projects by web developer and Computer Engineering student Divyesh Rupala."
        />
        <meta property="og:url" content="https://divyeshrupala.in/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                Hi, I'm <span className="text-gradient">Divyesh Rupala</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
                Web Developer & Computer Engineering Student
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Crafting interactive and user-friendly web experiences with modern technologies
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/projects"
                  className="group px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all hover:scale-105 flex items-center gap-2"
                >
                  View My Work
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3 glass hover:bg-white/10 rounded-lg font-medium transition-all"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Skills Overview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              What I <span className="text-gradient">Do</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredSkills.map((skill, index) => (
                <div
                  key={index}
                  className="glass p-8 rounded-xl hover:bg-white/10 transition-all group hover:scale-105"
                >
                  <skill.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                  <p className="text-muted-foreground">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-primary/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Featured <span className="text-gradient">Projects</span>
              </h2>
              <p className="text-muted-foreground">Check out some of my recent work</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {[
                {
                  title: 'My Personal ChatGPT',
                  desc: 'Chatbot using OpenAI API',
                  tech: 'HTML, CSS, JS, OpenAI API',
                },
                {
                  title: 'Dev Organic - An E-commerce Website',
                  desc: 'Collaborative project for organic products',
                  tech: 'HTML, CSS, JS, Google forms',
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="glass p-6 rounded-xl hover:bg-white/10 transition-all group"
                >
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.desc}</p>
                  <p className="text-sm text-secondary">{project.tech}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium"
              >
                View All Projects
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Let's Build Something <span className="text-gradient">Amazing</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all hover:scale-105"
            >
              Start a Conversation
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
