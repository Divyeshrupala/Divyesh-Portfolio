import React from 'react';
import {
  GraduationCap,
  Code2,
  Server,
  BarChart3,
  Brain,
  Clock,
  Users,
  Award,
} from "lucide-react";
import { Helmet } from "react-helmet";

const Courses = () => {
  const courses = [
    {
      icon: GraduationCap,
      title: "Web Development",
      level: "Beginner",
      duration: "1 months (30 hours)",
      mode: "Online + Offline",
      price: "₹5,000",
      description: "Build responsive websites from scratch using core web technologies including HTML, CSS, and JavaScript interactivity.",
      eligibility: "B.A, B.Com, B.Tech, BCA, B.Sc. IT graduates/students",
      features: ["HTML5 semantic elements and forms", "CSS Flexbox, Grid, responsive design", "JavaScript DOM manipulation and events", "Deploying websites using GitHub Pages"],
    },
    {
      icon: Code2,
      title: "Frontend Web Development",
      level: "Advanced",
      duration: "2 months (60 hours)",
      mode: "Online + Offline",
      price: "₹10,000",
      description: "Master modern frontend frameworks to create dynamic single-page applications with state management and routing.",
      eligibility: "B.A, B.Com, B.Tech, BCA, B.Sc. IT graduates/students",
      features: ["React components, hooks, state management", "Routing with React Router", "Responsive design with Tailwind/Bootstrap", "Projects: Portfolio, Educational platform, etc." ],
    },
    {
      icon: Server,
      title: "Backend Development",
      level: "Advanced",
      duration: "3 months (90 hours)",
      mode: "Online + Offline",
      price: "₹15,000",
      description: "Develop scalable server-side applications with databases, APIs, and authentication using modern backend technologies.",
      eligibility: "B.A, B.Com, B.Tech, BCA, B.Sc. IT graduates/students",
      features: ["Node.js/Express or Python Django", "Database design with SQL/NoSQL", "RESTful APIs and JWT authentication", "Deploying backend services on cloud platforms"],
    },
    {
      icon: Code2,
      title: "Python Programming",
      level: "Beginner",
      duration: "1 months (30 hours)",
      mode: "Online + Offline",
      price: "₹5,000",
      description: "Learn Python from basics to advanced concepts including OOP, file handling, and automation scripts.",
      eligibility: "B.Tech, BCA, B.Sc. IT students with basic programming",
      features: ["Variables, loops, functions, data structures", "Object-oriented programming", "File I/O, error handling"],
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      level: "Intermediate",
      duration: "3 months (90 hours)",
      mode: "Online + Offline",
      price: "₹15,000",
      description: "Transform data into insights using Excel, SQL, Python, and visualization tools for business decision-making.",
      eligibility: "B.Tech, B.Sc., commerce graduates with basic math",
      features: ["Excel advanced functions, pivot tables", "SQL querying", "Python Pandas, data visualization"],
    },
    {
      icon: Brain,
      title: "AI Tools for Web Design & Content",
      level: "Beginner",
      duration: "1 month (30 hours)",
      mode: "Online + Offline",
      price: "₹10,000",
      description: "Harness AI tools to streamline web design, content creation, presentations, and data analysis workflows.",
      eligibility: "All graduates interested in AI productivity tools",
      features: ["AI for web design/UI generation", "Content writing, SEO optimization", "AI in Excel, PowerPoint"],
    },
  ];

  // Mailto link generator
  const getMailtoLink = (courseTitle, coursePrice, courseDuration) => {
    const subject = encodeURIComponent(`Course Inquiry: ${courseTitle}`);
    const body = encodeURIComponent(
      `Hi Divyesh,\n\nI am interested in your "${courseTitle}" course.\n\nCourse Details:\n• Price: ${coursePrice}\n• Duration: ${courseDuration}\n• Mode: ${courses[0].mode}\n\nPlease share more details, batch dates, and availability.\n\nThank you!\n\nBest regards,`
    );
    return `mailto:divyeshrupala789@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Helmet>
        <title>Courses | Divyesh Rupala - Web Development Training</title>
        <meta
          name="description"
          content="Professional Web Development Courses in Gujarat: Beginner Web Design, Advanced React JS, Backend Development, Python Programming, Data Analytics, AI Tools. Online + Offline Training."
        />
        <meta
          name="keywords"
          content="web development course Gujarat, React JS training, backend development course, Python course, data analytics training, AI tools course, web developer training Gandhinagar, Gujarat, India"
        />
        <link rel="canonical" href="https://divyeshrupala.in/courses" />
        <meta property="og:title" content="Courses | Web Development Training - Divyesh Rupala" />
        <meta property="og:description" content="Web Development | Frontend | Backend | Python | Data Analytics | AI Tools Training in Gujarat." />
        <meta property="og:image" content="https://divyeshrupala.in/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Courses</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-Ready Training with Live Projects & Job Placement Support
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {courses.map((course, index) => (
              <div
                key={index}
                className="glass p-8 rounded-2xl hover:bg-white/10 transition-all group hover:scale-105"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:bg-primary/30 transition-colors mb-4">
                    <course.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{course.title}</h3>
                  <div className="flex flex-wrap gap-3 items-center mb-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      course.level === 'Beginner' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      course.level === 'Advanced' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                      'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {course.level}
                    </span>
                    <span className="text-2xl font-bold text-gradient">{course.price}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                    <span>•</span>
                    <Users className="w-4 h-4" />
                    <span>{course.mode}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{course.description}</p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-4 flex items-center">
                    <Award className="w-5 h-5 text-primary mr-2" />
                    What's Included
                  </h4>
                  <div className="space-y-3">
                    {course.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3 pl-1">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-1.5" />
                        <span className="text-sm text-muted-foreground text-justify leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Eligibility */}
                <div className="bg-primary/10 p-4 rounded-xl mb-6 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-primary text-sm">Eligibility</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{course.eligibility}</p>
                </div>

                {/* Mailto CTA Button */}
                <a
                  href={getMailtoLink(course.title, course.price, course.duration)}
                  className="w-full inline-block px-6 py-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white rounded-xl font-semibold text-center transition-all hover:scale-105 block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enroll Now →
                </a>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center glass p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your <span className="text-gradient">Learning Journey?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Join my courses and transform your career with professional web development training. Hands-on projects included.
            </p>
            <a
              href="mailto:divyeshrupala@gmail.com?subject=Course%20Inquiry:%20All%20Courses&body=Hi%20Divyesh,%0A%0AI%20am%20interested%20in%20your%20courses.%20Please%20share%20complete%20details,%20batch%20dates,%20and%20availability.%0A%0AThank%20you!"
              className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all hover:scale-105"
            >
              Get Started Today →
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
