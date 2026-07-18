import { motion } from 'framer-motion'

/**
 * SectionWrapper — wraps each section with a consistent max-width container
 * and a fade/slide-up scroll animation via framer-motion.
 */
const SectionWrapper = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={`py-24 ${className}`}>
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  )
}

export default SectionWrapper
