import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'MascotsB - IELTS Coaching & Visa Consultancy Platform',
      description: 'A comprehensive frontend solution for an IELTS coaching institute and visa consultancy service, designed to streamline student engagement and exam preparation.',
      technologies: ['HTML', 'CSS', 'JS', 'Google form'],
      image: 'images/mascots.png',
      githubUrl: 'https://github.com/Divyeshrupala/MascotsB_new', // Add your GitHub URL
      liveUrl: 'https://mascotsb.vercel.app/' // Optional: Add live demo URL
    },
    {
      title: 'SSV School - Comprehensive Educational Website',
      description: 'A full-featured school management and information portal with extensive content architecture spanning 10+ interconnected pages and sub-pages.',
      technologies: ['HTML', 'CSS', 'JS'],
      image: 'images/ssv.png',
      githubUrl: 'https://github.com/Divyeshrupala/ssv-campus',
      liveUrl: 'https://ssv-campus.vercel.app/'
    },
    {
      title: 'Portfolio Website',
      description: 'A customizable portfolio website builder allowing users to create professional portfolios with drag-and-drop components.',
      technologies: ['HTML', 'CSS', 'JS', 'Tailwind CSS'],
      image: 'images/portfolio.png',
      githubUrl: 'https://github.com/Divyeshrupala/Portfolio',
      liveUrl: 'https://divyeshrupala.vercel.app/'
    },
    {
      title: 'ChatGPT Clone - AI-Powered Conversational Interface',
      description: 'A functional frontend implementation of ChatGPT leveraging OpenAI\'s API to create an interactive AI conversation platform.',
      technologies: ['HTML', 'CSS', 'JS', 'Open AI API'],
      image: 'images/Chatbot.png',
      githubUrl: 'https://github.com/Divyeshrupala/MyPersonalChatGPT',
      liveUrl: 'https://mypersonalchatgpt-1.onrender.com'
    },
    {
      title: 'Dev Organic - E-commerce Platform with Secure Contact Integration',
      description: 'A strategic e-commerce solution for organic products sales, prioritizing customer safety through controlled contact mechanisms rather than direct payment processing.',
      technologies: ['HTML', 'CSS', 'JS', 'Google form'],
      image: 'images/dev-organic.png',
      githubUrl: 'https://github.com/Divyeshrupala/DevAyurvedic---Ayurvedic-Medine-Website-',
      liveUrl: 'https://dev-organic.vercel.app/index.html'
    },
    {
      title: 'Flora Enterprise - Landscaping & Gardening Services Website',
      description: 'A visually appealing and functional website for a professional landscaping and gardening business, designed to showcase services, projects, and facilitate customer inquiries.',
      technologies: ['HTML', 'CSS', 'JS'],
      image: 'images/flora.png',
      githubUrl: 'https://github.com/Divyeshrupala/flora-enterprise-main---Copy',
      liveUrl: 'https://flora-enterprise-main-copy.vercel.app/'
    },
    {
      title: 'Dr. Ranu K Dutta - Medical Professional Portfolio',
      description: 'A dedicated portfolio website for Dr. Ranu K Dutta, highlighting medical expertise, services offered, and patient testimonials to enhance professional online presence.',
      technologies: ['HTML', 'CSS', 'JS', 'React', 'Email Authentication'],
      image: 'images/ranu-dutta.png',
      githubUrl: 'https://github.com/yourusername/ranu-dutta',
      liveUrl: 'https://ranu-dutta.vercel.app/'
    },
    {
      title: 'Blog Platform',
      description: 'Modern blogging platform with markdown support, rich text editor, categories, tags, comments system, and SEO optimization for content creators.',
      technologies: ['HTML', 'CSS', 'JS', 'Google form'],
      image: 'images/dev-organic.png',
      githubUrl: 'https://github.com/yourusername/blog-platform',
      liveUrl: 'https://blog-platform-demo.com'
    },
  ];

  // Function to handle GitHub link click
  const handleGithubClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Function to handle External link click
  const handleExternalClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all group hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 gap-3">
                  <button 
                    onClick={() => handleGithubClick(project.githubUrl)}
                    className="p-2 bg-primary rounded-lg hover:bg-primary/90 transition-colors hover:scale-110"
                    title="View on GitHub"
                  >
                    <Github size={20} />
                  </button>
                  {project.liveUrl && (
                    <button 
                      onClick={() => handleExternalClick(project.liveUrl)}
                      className="p-2 bg-primary rounded-lg hover:bg-primary/90 transition-colors hover:scale-110"
                      title="View Live Demo"
                    >
                      <ExternalLink size={20} />
                    </button>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links (visible on mobile/alternative) */}
                <div className="flex gap-3 mt-4 md:hidden">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center glass p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Interested in <span className="text-gradient">Collaborating?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always looking for new and exciting projects to work on. Let's create something amazing together!
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all hover:scale-105"
          >
            Start a Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
