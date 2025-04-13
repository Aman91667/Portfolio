import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Brain, ChevronDown, Globe, Rocket, Star, Award, Cpu, Database, Cloud } from 'lucide-react';

function App() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Quantum Computing Simulator",
      description: "Advanced quantum circuit simulation platform with real-time visualization and quantum algorithm implementation",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
      tech: ["Python", "Qiskit", "React", "WebAssembly"],
      link: "https://github.com/Aman91667"
    },
    {
      title: "Neural Network Framework",
      description: "High-performance deep learning framework with GPU acceleration and distributed training capabilities",
      image: "https://images.unsplash.com/photo-1676299081847-5c7fe8b09211?auto=format&fit=crop&q=80&w=800",
      tech: ["PyTorch", "CUDA", "C++", "Python"],
      link: "https://github.com/Aman91667"
    },
    {
      title: "Blockchain Analytics Platform",
      description: "Real-time blockchain data analysis platform with ML-powered fraud detection and market predictions",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
      tech: ["Solidity", "Graph QL", "Next.js", "Python"],
      link: "https://github.com/Aman91667"
    }
  ];

  const skills = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Core Engineering",
      items: ["System Architecture", "Distributed Systems", "High-Performance Computing", "Microservices"],
      proficiency: 95
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Machine Learning",
      items: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP"],
      proficiency: 90
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data & Cloud",
      items: ["Big Data Processing", "Cloud Architecture", "DevOps", "Security"],
      proficiency: 92
    }
  ];

  const achievements = [
    { 
      icon: <Award className="w-6 h-6" />, 
      text: "Published research in quantum computing",
      detail: "Featured in International Journal of Quantum Information"
    },
    { 
      icon: <Star className="w-6 h-6" />, 
      text: "Led $2M enterprise AI project",
      detail: "Increased client revenue by 300%"
    },
    { 
      icon: <Globe className="w-6 h-6" />, 
      text: "International tech speaker",
      detail: "Keynote at major tech conferences"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen relative grid-bg"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
        
        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-2 px-5 mb-8 animate-glow"
          >
            <span className="text-blue-400">Full-Stack Engineer & AI Specialist</span>
          </motion.div>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-7xl md:text-9xl font-bold mb-6 text-gradient text-center"
          >
            Aman Jain
          </motion.h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-200 mb-12 text-center max-w-3xl leading-relaxed"
          >
            Pioneering the future of technology through innovative solutions in 
            quantum computing, artificial intelligence, and distributed systems
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-8"
          >
            {[
              { href: "https://github.com/Aman91667", icon: <Github className="w-8 h-8" /> },
              { href: "https://www.linkedin.com/in/aman-jain-130167258/", icon: <Linkedin className="w-8 h-8" /> },
              { href: "mailto:contact@example.com", icon: <Mail className="w-8 h-8" /> }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 hover:bg-white/10 transition-all duration-300 transform hover:scale-110"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="text-blue-400 text-sm font-light">Explore My Work</div>
          <ChevronDown className="w-6 h-6 text-blue-400" />
        </motion.div>
      </motion.section>

      {/* Achievements Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/5 grid-bg" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
          >
            Notable Achievements
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-8 hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-full">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-300">{achievement.text}</h3>
                </div>
                <p className="text-gray-400">{achievement.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
          >
            Innovative Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card overflow-hidden group"
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent" />
                </div>
                <div className="p-6 relative">
                  <h3 className="text-2xl font-bold mb-3 text-gradient">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 glass-card text-sm text-blue-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
          >
            Technical Expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-8 hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-full">
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gradient">{skill.title}</h3>
                </div>
                <div className="mb-6 bg-white/5 h-2 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </div>
                <ul className="space-y-3">
                  {skill.items.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="text-gray-300 flex items-center gap-3"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">Let's Build the Future Together</h2>
          <p className="text-xl text-blue-200 mb-12 leading-relaxed">
            Ready to push the boundaries of technology and create groundbreaking solutions?
            Let's collaborate and bring your vision to life.
          </p>
          <motion.a
            href="mailto:contact@example.com"
            className="inline-flex items-center gap-3 glass-card px-8 py-4 text-lg font-semibold hover:bg-white/10 transition-all transform hover:scale-105"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Conversation
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}

export default App;