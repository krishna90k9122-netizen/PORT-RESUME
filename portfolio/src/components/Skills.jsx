import { motion } from 'framer-motion'
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiPython,
  SiGit, SiGithub, SiVscodium,
} from 'react-icons/si'
import { TbBrandCpp } from 'react-icons/tb'
import { FaDatabase, FaServer } from 'react-icons/fa'
import SectionWrapper from './SectionWrapper'

const skillCategories = [
  {
    title: 'Frontend',
    gradient: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: '#e34f26', level: 90 },
      { name: 'CSS3', icon: SiCss, color: '#1572b6', level: 85 },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e', level: 80 },
      { name: 'React.js', icon: SiReact, color: '#61dafb', level: 82 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4', level: 20 },
    ],
  },
  {
    title: 'Backend',
    gradient: 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 20 },
      { name: 'Express.js', icon: SiExpress, color: '#999', level: 20 },
    ],
  },
  {
    title: 'Database',
    gradient: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47a248', level: 50 },
    ],
  },
  {
    title: 'Languages',
    gradient: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776ab', level: 20 },
      { name: 'C++', icon: TbBrandCpp, color: '#00599c', level: 68 },
    ],
  },
  {
    title: 'Tools',
    gradient: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Git', icon: SiGit, color: '#f05032', level: 82 },
      { name: 'GitHub', icon: SiGithub, color: '#181717', level: 85 },
      { name: 'VS Code', icon: SiVscodium, color: '#007acc', level: 92 },
      { name: 'MongoDB Compass', icon: FaDatabase, color: '#47a248', level: 20 },
    ],
  },
]

const SkillCard = ({ skill, index }) => (
  <motion.div
    className="glass-card rounded-2xl p-4 hover:-translate-y-1 hover:shadow-2xl transition-all duration-200 group"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="flex items-center gap-3 mb-3">
      <skill.icon
        className="w-7 h-7 shrink-0 transition-transform duration-200 group-hover:scale-110"
        style={{ color: skill.color }}
      />
      <span className="font-semibold text-gray-800 dark:text-gray-100 text-sm">{skill.name}</span>
    </div>
    {/* Progress bar */}
    <div className="h-1.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.05 + 0.3, ease: 'easeOut' }}
      />
    </div>
    <div className="text-right mt-1">
      <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}%</span>
    </div>
  </motion.div>
)

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="bg-gray-50/50 dark:bg-gray-900/50">
      <div className="text-center mb-16">
        <motion.span
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400" />
          What I work with
          <span className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400" />
        </motion.span>
        <h2 className="section-heading">Skills & Technologies</h2>
        <p className="section-subheading">Technologies I've worked with and love using</p>
      </div>

      <div className="space-y-10">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.1 }}
          >
            {/* Category header */}
            <div className="flex items-center gap-3 mb-5">
              <div className={`h-1 w-10 rounded-full bg-gradient-to-r ${cat.gradient}`} />
              <h3 className="font-display font-bold text-gray-700 dark:text-gray-200 text-lg">{cat.title}</h3>
            </div>

            {/* Skills grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {cat.skills.map((skill, si) => (
                <SkillCard key={skill.name} skill={skill} index={si + ci * 5} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Skills
