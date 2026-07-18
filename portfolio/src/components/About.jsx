import { motion } from 'framer-motion'
import { HiAcademicCap, HiLightBulb, HiRocketLaunch } from 'react-icons/hi2'
import SectionWrapper from './SectionWrapper'

const infoCards = [
  {
    icon: HiAcademicCap,
    label: 'Education',
    value: 'B.Tech Computer Science Engineering',
    color: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-50 dark:bg-blue-500/10',
  },
  {
    icon: HiLightBulb,
    label: 'Current Focus',
    value: 'React.js • Node.js • Express.js • MongoDB',
    color: 'from-indigo-500 to-purple-500',
    bg: 'bg-indigo-50 dark:bg-indigo-500/10',
  },
  {
    icon: HiRocketLaunch,
    label: 'Career Goal',
    value: 'Software Engineer',
    color: 'from-purple-500 to-pink-500',
    bg: 'bg-purple-50 dark:bg-purple-500/10',
  },
]

const About = () => {
  return (
    <SectionWrapper id="about">
      <div className="text-center mb-16">
        <motion.span
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400" />
          Get to know me
          <span className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400" />
        </motion.span>
        <h2 className="section-heading">About Me</h2>
        <p className="section-subheading">Passionate Full Stack Developer</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Bio */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card rounded-3xl p-8">
            {/* Decorative avatar/initial */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-display font-bold shadow-lg shadow-blue-500/30">
                K
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white">Krishna Gupta</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Jharkhand, India 📍</p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
              I am a Computer Science Engineering student with a strong interest in modern web development. 
              I enjoy creating beautiful user interfaces and powerful backend applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              My goal is to become an industry-ready Full Stack Developer and solve real-world problems 
              using technology. I'm currently working on the MERN stack and building production-quality applications.
            </p>
          </div>
        </motion.div>

        {/* Right - Info cards */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {infoCards.map((card, i) => (
            <motion.div
              key={card.label}
              className={`${card.bg} border border-white/50 dark:border-white/10 rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-1 transition-transform duration-200`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shrink-0 shadow-lg`}>
                <card.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">{card.label}</p>
                <p className="font-display font-bold text-gray-900 dark:text-white">{card.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default About
