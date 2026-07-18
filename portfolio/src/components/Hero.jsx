import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import { HiOutlineDownload } from 'react-icons/hi'
import { MdWork } from 'react-icons/md'
import useScrollAnimation from '../hooks/useScrollAnimation'

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/krishna90k9122-netizen', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/krishna-gupta-b00779324', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:krishna90k2006@gmail.com', label: 'Email' },
]

const Hero = () => {
  const { ref, inView } = useScrollAnimation()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-grid"
      ref={ref}
    >
      {/* Background blobs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.span
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400 inline-block" />
            Hi there, I'm Krishna Gupta 👋
          </motion.span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black leading-tight text-gray-900 dark:text-white mb-6">
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2500,
                'React.js Developer', 2500,
                'CS Engineering Student', 2500,
                'Problem Solver', 2500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gradient"
            />
            <br />
            <span className="text-gray-900 dark:text-white">& Computer Science Student</span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-xl">
            I am a passionate Computer Science Engineering student focused on Full Stack Web Development. 
            I love building responsive websites, scalable backend systems and modern web applications 
            using <span className="font-semibold text-blue-600 dark:text-blue-400">React.js, Node.js, Express.js</span> and <span className="font-semibold text-blue-600 dark:text-blue-400">MongoDB</span>.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#projects" className="btn-primary">
              View Projects
              <FiArrowDown className="w-4 h-4" />
            </a>
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <HiOutlineDownload className="w-4 h-4" />
              View Resume
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400 dark:text-gray-500">Find me on</span>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => {
                const hoverColor = 
                  label === 'GitHub' ? 'hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-950 hover:border-gray-900 dark:hover:border-white' :
                  label === 'LinkedIn' ? 'hover:bg-blue-600 hover:text-white hover:border-blue-600' :
                  'hover:bg-red-500 hover:text-white hover:border-red-500';
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm font-semibold text-gray-600 dark:text-gray-300 shadow-sm cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md ${hoverColor}`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right — Profile Card */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="relative">
            {/* Decorative rings */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/20 to-indigo-400/20 blur-2xl transform scale-110" />

            {/* Main profile card */}
            <div className="relative glass-card rounded-3xl p-8 w-80 float-card">
              {/* Avatar */}
              <div className="relative mb-6 flex justify-center group">
                <div className="w-28 h-28 rounded-2xl overflow-hidden shadow-xl ring-4 ring-blue-500/20 dark:ring-blue-400/20 group-hover:ring-blue-500 dark:group-hover:ring-blue-400 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-blue-500/30 bg-gray-100 dark:bg-gray-800">
                  <img src="/avatar.jpg" alt="Krishna Gupta Portrait" className="w-full h-full object-cover" />
                </div>
                {/* Status dot */}
                <span className="absolute bottom-1 right-16 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-gray-900" />
              </div>

              <div className="text-center mb-6">
                <h2 className="text-xl font-display font-bold text-gray-900 dark:text-white">Krishna Gupta</h2>
                <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mt-1">Full Stack Developer</p>
              </div>

              {/* Status badge */}
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/30 mb-4">
                <MdWork className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-sm font-semibold text-green-700 dark:text-green-400">Available for Internship</span>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { value: '4+', label: 'Projects' },
                  { value: 'MERN', label: 'Stack' },
                  { value: 'CSE', label: 'B.Tech' },
                ].map(stat => (
                  <div key={stat.label} className="bg-gray-50 dark:bg-white/5 rounded-xl p-3">
                    <div className="font-display font-bold text-gray-900 dark:text-white text-sm">{stat.value}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <FiArrowDown className="w-4 h-4" />
      </motion.div>
    </section>
  )
}

export default Hero
