import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import SectionWrapper from './SectionWrapper'

const projects = [
  {
    id: 1,
    title: 'Learning Management System',
    description: 'A complete LMS platform with authentication, course management, video lectures and a feature-rich student dashboard. Built with a full MERN stack.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    category: 'fullstack',
    github: 'https://github.com/krishna90k9122-netizen',
    live: '#',
    gradient: 'from-blue-500 to-cyan-500',
    emoji: '📚',
  },
  {
    id: 2,
    title: 'Student Management System',
    description: 'Manage student records with full CRUD operations, role-based access, and secure JWT authentication for admins.',
    tags: ['React.js', 'Node.js', 'MongoDB'],
    category: 'fullstack',
    github: 'https://github.com/krishna90k9122-netizen',
    live: '#',
    gradient: 'from-indigo-500 to-purple-500',
    emoji: '🎓',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Modern responsive portfolio with scroll animations, dark mode toggle, typewriter effects and a clean professional UI.',
    tags: ['React.js', 'Tailwind CSS'],
    category: 'frontend',
    github: 'https://github.com/krishna90k9122-netizen',
    live: '#',
    gradient: 'from-purple-500 to-pink-500',
    emoji: '🖥️',
  },
  {
    id: 4,
    title: 'CareerForge CLI',
    description: 'AI-powered command-line tool for resume analysis and personalized career path guidance, built with Node.js.',
    tags: ['Node.js', 'JavaScript'],
    category: 'backend',
    github: 'https://github.com/krishna90k9122-netizen',
    live: '#',
    gradient: 'from-orange-500 to-red-500',
    emoji: '🤖',
  },
  {
    id: 5,
    title: 'Hospital Management System',
    description: 'A full-stack Hospital Management System with authentication, patient management, doctor management and appointment booking.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    category: 'fullstack',
    github: 'https://github.com/krishna90k9122-netizen',
    live: '#',
    gradient: 'from-green-500 to-emerald-500',
    emoji: '🏥',
  },
]

const filters = ['all', 'fullstack', 'frontend', 'backend']

const ProjectCard = ({ project, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="glass-card rounded-3xl overflow-hidden group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
  >
    {/* Project visual header */}
    <div className={`h-52 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center overflow-hidden`}>
      <span className="text-7xl filter drop-shadow-xl">{project.emoji}</span>
      {/* Decorative blobs */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-xl" />
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/10 rounded-full blur-xl" />
      {/* Action buttons on hover */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white rounded-xl text-gray-900 hover:bg-blue-500 hover:text-white transition-all duration-200"
          onClick={e => e.stopPropagation()}
        >
          <FiGithub className="w-5 h-5" />
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white rounded-xl text-gray-900 hover:bg-blue-500 hover:text-white transition-all duration-200"
          onClick={e => e.stopPropagation()}
        >
          <FiExternalLink className="w-5 h-5" />
        </a>
      </div>
    </div>

    {/* Card body */}
    <div className="p-6">
      <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-500/20"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-semibold transition-all duration-200"
        >
          <FiGithub className="w-4 h-4" /> Code
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
        >
          <FiExternalLink className="w-4 h-4" /> Live Demo
        </a>
      </div>
    </div>
  </motion.div>
)

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = projects.filter(p => activeFilter === 'all' || p.category === activeFilter)

  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-12">
        <motion.span
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400" />
          What I've built
          <span className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400" />
        </motion.span>
        <h2 className="section-heading">Featured Projects</h2>
        <p className="section-subheading">A collection of things I've built with passion</p>
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full text-sm font-semibold capitalize transition-all duration-200 ${
              activeFilter === filter
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
                : 'bg-white dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500'
            }`}
          >
            {filter === 'all' ? 'All Projects' : filter}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <AnimatePresence>
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  )
}

export default Projects
