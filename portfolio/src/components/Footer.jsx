import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

const socials = [
  { icon: FiGithub, href: 'https://github.com/krishna90k9122-netizen', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/krishna-gupta-b00779324', label: 'LinkedIn' },
  { icon: FaWhatsapp, href: 'https://wa.me/919122957274', label: 'WhatsApp' },
  { icon: FiMail, href: 'mailto:krishna90k2006@gmail.com', label: 'Email' },
]

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-white/5 bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo & copyright */}
          <div className="text-center sm:text-left">
            <span className="font-display text-2xl font-bold text-gradient">Krishna.</span>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              © 2026 Krishna Gupta. Designed & Developed by Krishna Gupta.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-blue-50 dark:hover:bg-blue-500/10 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                whileHover={{ y: -4, scale: 1.1 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
