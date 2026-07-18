import { motion } from 'framer-motion'
import { HiOutlineDownload } from 'react-icons/hi'
import { HiAcademicCap, HiCommandLine, HiUserGroup, HiTrophy } from 'react-icons/hi2'
import SectionWrapper from './SectionWrapper'

const education = [
  {
    title: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
    institution: 'Netaji Subhas University, Jamshedpur',
    date: '2024 – 2028 (2nd Year, Present)',
    description: 'Focusing on core software concepts, frontend systems, and full stack web development architectures.'
  }
]

const experience = [
  {
    title: 'Frontend Developer (Projects & Practice)',
    date: 'Ongoing Practice',
    bullets: [
      'Built responsive web pages using HTML, CSS, and JavaScript.',
      'Focused on clean UI, structured layouts, and user-friendly design.'
    ]
  }
]

const leadership = [
  {
    role: 'Campus Ambassador',
    organization: 'IIT Roorkee',
    bullets: [
      'Promoted initiatives, events, and programs while coordinating student participation.'
    ]
  },
  {
    role: 'E-Cell Associate (Documentation)',
    organization: 'IIT Bombay',
    bullets: [
      'Prepared event reports and official records for entrepreneurship programs.',
      'National Entrepreneurship Challenge (NEC) 2025 – Rank 187 (E-Cell IIT Bombay)'
    ]
  }
]

const achievements = [
  {
    title: 'HackNation – Nirman Hackathon',
    role: 'Participant',
    location: 'Silicon University, Odisha'
  },
  {
    title: 'Hack4Delhi – IEEE NSUT Delhi',
    role: 'Final Round Shortlisted',
    location: 'Delhi'
  },
  {
    title: 'AI for Bharat Hackathon',
    role: 'Participant',
    location: 'Online'
  }
]

const Resume = () => {
  return (
    <SectionWrapper id="resume" className="bg-gray-50/50 dark:bg-gray-900/50">
      <div className="text-center mb-16">
        <motion.span
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400" />
          My Credentials
          <span className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400" />
        </motion.span>
        <h2 className="section-heading">Resume & Timeline</h2>
        <p className="section-subheading">A summary of my education, practice experience, and leadership roles</p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start mb-16">
        
        {/* Left Column: Education & Experience */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Education Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-400/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <HiAcademicCap className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white">Education</h3>
          </div>

          {education.map((item, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 relative border-l-4 border-blue-500 pl-6">
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">
                {item.date}
              </span>
              <h4 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-1">
                {item.title}
              </h4>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                {item.institution}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

          {/* Experience Header */}
          <div className="flex items-center gap-3 mt-10 mb-6">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 dark:bg-indigo-400/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
              <HiCommandLine className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white">Experience</h3>
          </div>

          {experience.map((item, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 relative border-l-4 border-indigo-500 pl-6">
              <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block mb-1">
                {item.date}
              </span>
              <h4 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-3">
                {item.title}
              </h4>
              <ul className="space-y-2">
                {item.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Right Column: Leadership */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 dark:bg-purple-400/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
              <HiUserGroup className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white">Leadership Roles</h3>
          </div>

          {leadership.map((item, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 relative border-l-4 border-purple-500 pl-6">
              <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider block mb-1">
                {item.organization}
              </span>
              <h4 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-3">
                {item.role}
              </h4>
              <ul className="space-y-2">
                {item.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Hackathons & Achievements Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-6xl mx-auto glass-card rounded-3xl p-8 mb-12"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-yellow-500/10 dark:bg-yellow-400/10 flex items-center justify-center text-yellow-600 dark:text-yellow-400">
            <HiTrophy className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white">Hackathons & Achievements</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-gray-100/50 dark:bg-white/5 border border-white/50 dark:border-white/5 hover:-translate-y-1 transition-transform duration-200">
              <h4 className="font-display font-bold text-gray-900 dark:text-white mb-1">{ach.title}</h4>
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase mb-2">{ach.role}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{ach.location}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Action Download / View Printable Resume */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <a
          href="/resume.html"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2 px-10 py-4 text-lg"
        >
          <HiOutlineDownload className="w-5 h-5" />
          View / Print Full Resume
        </a>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">PDF-compatible print version • A4 Optimized</p>
      </motion.div>
    </SectionWrapper>
  )
}

export default Resume
