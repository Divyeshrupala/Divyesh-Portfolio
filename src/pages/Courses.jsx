import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Code2,
  Server,
  BarChart3,
  Brain,
  Clock,
  Users,
  Award,
  BookOpen,
  CheckCircle2,
  X,
  FileText,
  Sparkles,
  Database,
} from "lucide-react";
import { Helmet } from "react-helmet";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      icon: GraduationCap,
      title: "Web Development",
      level: "Beginner",
      duration: "1 months (30 hours)",
      mode: "Online + Offline",
      price: "₹5,000",
      description:
        "Build responsive websites from scratch using core web technologies including HTML, CSS, and JavaScript interactivity.",
      eligibility: "B.A, B.Com, B.Tech, BCA, B.Sc. IT graduates/students",
      features: [
        "HTML5 semantic elements",
        "CSS Flexbox & Grid",
        "JavaScript DOM Events",
        "GitHub Deployment",
      ],
      detailedSyllabus: [
        "Web Architecture & HTTP Basics",
        "HTML5 Semantic Tags & Forms Validation",
        "Modern CSS: Flexbox, Grid, and Animations",
        "Responsive Design Principles",
        "JavaScript Fundamentals",
        "DOM Manipulation & UI Logic",
        "Git & GitHub Version Control",
      ],
      practice:
        "5+ Mini-projects, 1 Live Portfolio Website, Daily Coding Exercises.",
      deliverables: [
        "Verified Certificate",
        "Project Source Code",
        "Industry Resume Template",
      ],
    },
    {
      icon: Code2,
      title: "Frontend Web Development",
      level: "Advanced",
      duration: "2 months (60 hours)",
      mode: "Online + Offline",
      price: "₹10,000",
      description:
        "Master modern frontend frameworks to create dynamic single-page applications with state management.",
      eligibility: "B.A, B.Com, B.Tech, BCA, B.Sc. IT graduates/students",
      features: [
        "React Hooks & Context API",
        "React Router Navigation",
        "Tailwind CSS Integration",
        "API Integration",
      ],
      detailedSyllabus: [
        "Modern ES6+ JavaScript",
        "React Basics: JSX, Props, and State",
        "Advanced Hooks (useEffect, useContext)",
        "State Management with Redux Toolkit",
        "Client-side Routing",
        "Tailwind CSS & Framer Motion",
        "Consuming REST APIs",
      ],
      practice: "E-commerce UI Clone, Real-time Dashboard, API-driven Project.",
      deliverables: [
        "Professional Certificate",
        "GitHub Repository Portfolio",
        "Interview Prep Session",
      ],
    },
    {
      icon: Server,
      title: "Backend Development",
      level: "Advanced",
      duration: "3 months (90 hours)",
      mode: "Online + Offline",
      price: "₹15,000",
      description:
        "Develop scalable server-side applications with databases, APIs, and authentication.",
      eligibility: "B.A, B.Com, B.Tech, BCA, B.Sc. IT graduates/students",
      features: [
        "Node.js & Express",
        "MongoDB & SQL",
        "JWT Authentication",
        "Cloud Deployment",
      ],
      detailedSyllabus: [
        "Node.js Runtime & NPM",
        "Express Framework & Middleware",
        "NoSQL: MongoDB & Mongoose",
        "Relational Database: SQL Basics",
        "JWT & OAuth Authentication",
        "Secure REST API Design",
        "Cloud Deployment Basics",
      ],
      practice: "User Auth System, Blog CMS Backend, Real-time Chat Server.",
      deliverables: [
        "Course Completion Certificate",
        "Backend Project Showcase",
        "Deployment Guide",
      ],
    },
    {
      icon: Code2,
      title: "Python Programming",
      level: "Beginner",
      duration: "1 months (30 hours)",
      mode: "Online + Offline",
      price: "₹5,000",
      description:
        "Learn Python from basics to advanced concepts including OOP, file handling, and automation scripts.",
      eligibility: "B.Tech, BCA, B.Sc. IT students with basic programming",
      features: [
        "Variables, loops, functions",
        "Object-oriented programming",
        "File I/O, error handling",
      ],
      detailedSyllabus: [
        "Python Installation & Environment Setup",
        "Data Types: Lists, Tuples, Dictionaries",
        "Control Flow & Logical Operators",
        "Functions & Functional Programming",
        "OOP: Classes, Inheritance & Polymorphism",
        "Exception Handling & Debugging",
        "File Operations & JSON Processing",
      ],
      practice: "Calculator App, Automation Scripts, Simple Data Scraper.",
      deliverables: [
        "Course Certificate",
        "Python Script Collection",
        "Logic Building Guide",
      ],
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      level: "Intermediate",
      duration: "3 months (90 hours)",
      mode: "Online + Offline",
      price: "₹15,000",
      description:
        "Transform data into insights using Excel, SQL, Python, and visualization tools for business decision-making.",
      eligibility: "B.Tech, B.Sc., commerce graduates with basic math",
      features: [
        "Advanced Excel & Pivot",
        "SQL Database Querying",
        "Python Pandas & Viz",
      ],
      detailedSyllabus: [
        "Advanced Excel: VLOOKUP, HLOOKUP, Macros",
        "SQL: Joins, Subqueries & Aggregations",
        "Python for Data Science (NumPy, Pandas)",
        "Data Cleaning & Pre-processing",
        "Exploratory Data Analysis (EDA)",
        "Data Visualization with Matplotlib/Seaborn",
        "Business Intelligence Basics",
      ],
      practice:
        "Sales Data Analysis, SQL Database Case Study, Interactive Dashboards.",
      deliverables: [
        "Specialization Certificate",
        "Data Case Study Portfolio",
        "SQL Query Bank",
      ],
    },
    {
      icon: Brain,
      title: "AI Tools for Web & Content",
      level: "Beginner",
      duration: "1 month (30 hours)",
      mode: "Online + Offline",
      price: "₹10,000",
      description:
        "Harness AI tools to streamline web design, content creation, presentations, and data analysis workflows.",
      eligibility: "All graduates interested in AI productivity tools",
      features: [
        "AI UI/UX Generation",
        "SEO Content Writing",
        "AI in Excel & PPT",
      ],
      detailedSyllabus: [
        "Generative AI Fundamentals (ChatGPT, Claude)",
        "Prompt Engineering Techniques",
        "AI for UI Design (Midjourney, v0.dev)",
        "AI Content Writing & SEO Optimization",
        "Automating Excel Workflows with AI",
        "Creating AI-driven Presentations",
        "Future of AI in Web Development",
      ],
      practice:
        "AI-Generated Landing Page, Content Strategy Plan, Automated Reporting.",
      deliverables: [
        "AI Power User Certificate",
        "Prompt Library",
        "AI Tool Resource List",
      ],
    },
  ];

  const getMailtoLink = (courseTitle, coursePrice, courseDuration) => {
    const subject = encodeURIComponent(`Course Inquiry: ${courseTitle}`);
    const body = encodeURIComponent(
      `Hi Divyesh,\n\nI am interested in your "${courseTitle}" course.\n\nCourse Details:\n• Price: ${coursePrice}\n• Duration: ${courseDuration}\n\nPlease share more details regarding batch timings.\n\nThank you!`
    );
    return `mailto:divyeshrupala789@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Helmet>
        <title>Courses | Divyesh Rupala - Industry-Ready Training</title>
        <meta
          name="description"
          content="Professional Web Development, Python, and Data Analytics Courses in Gujarat."
        />
      </Helmet>

      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Courses</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Master In-Demand Skills with Expert-Led Training and Real-World
              Projects
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {courses.map((course, index) => (
              <div
                key={index}
                className="glass p-8 rounded-2xl hover:bg-white/10 transition-all group hover:scale-105 border border-transparent hover:border-primary/50"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors mb-4">
                    <course.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
                  <div className="flex flex-wrap gap-3 items-center mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {course.level}
                    </span>
                    <span className="text-2xl font-bold text-gradient">
                      {course.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 p-3 bg-white/5 rounded-lg border border-white/10">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{course.duration}</span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm h-16 overflow-hidden line-clamp-3">
                    {course.description}
                  </p>
                </div>

                {/* Buttons Action */}
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-medium transition-all text-sm"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    View Curriculum
                  </button>
                  <a
                    href={getMailtoLink(
                      course.title,
                      course.price,
                      course.duration
                    )}
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white rounded-xl font-bold transition-all hover:scale-105 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enroll Now →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center glass p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">
              Transform Your{" "}
              <span className="text-gradient">Professional Career</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Join industry-ready training programs designed to help you build a
              strong portfolio and land your dream job.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* --- Detailed Curriculum Modal --- */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass border border-white/20 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-zinc-900/90 backdrop-blur-md p-6 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <selectedCourse.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">{selectedCourse.title}</h2>
              </div>
              <button
                onClick={() => setSelectedCourse(null)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-muted-foreground hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-8 text-left">
              {/* Syllabus Section */}
              <section>
                <h3 className="flex items-center text-lg font-bold mb-4 text-primary">
                  <FileText className="w-5 h-5 mr-2" />
                  Detailed Syllabus
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedCourse.detailedSyllabus.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              {/* Practice Methodology */}
              <section className="bg-primary/5 border border-primary/10 p-5 rounded-2xl">
                <h3 className="flex items-center text-lg font-bold mb-2 text-white">
                  <Brain className="w-5 h-5 mr-2 text-primary" />
                  Practice & Projects
                </h3>
                <p className="text-muted-foreground text-sm italic">
                  {selectedCourse.practice}
                </p>
              </section>

              {/* Eligibility Section */}
              <section className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="font-bold text-primary text-xs uppercase">
                    Target Audience
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {selectedCourse.eligibility}
                </p>
              </section>

              {/* Deliverables */}
              <section>
                <h3 className="flex items-center text-lg font-bold mb-4">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  Course Benefits
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCourse.deliverables.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-lg text-[11px] font-bold uppercase"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>

              {/* Final Action */}
              <div className="pt-4">
                <a
                  href={getMailtoLink(
                    selectedCourse.title,
                    selectedCourse.price,
                    selectedCourse.duration
                  )}
                  className="w-full inline-block px-6 py-4 bg-gradient-to-r from-primary to-primary/90 text-white rounded-xl font-bold text-center transition-all hover:scale-[1.02]"
                >
                  Confirm Enrollment for {selectedCourse.price}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Courses;
