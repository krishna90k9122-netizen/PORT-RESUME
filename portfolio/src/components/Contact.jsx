import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import SectionWrapper from './SectionWrapper'

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'krishna90k2006@gmail.com',
    href: 'mailto:krishna90k2006@gmail.com',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FiPhone,
    label: 'WhatsApp',
    value: '+91 91229 57274',
    href: 'https://wa.me/919122957274',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Jharkhand, India',
    href: '#',
    gradient: 'from-purple-500 to-pink-500',
  },
]

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // 'success' | 'error' | 'loading'

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email'
    if (!form.subject.trim()) errs.subject = 'Subject is required'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setStatus('loading')

    try {
      // TODO: Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      // Sign up free at https://formspree.io — create a new form and paste the ID below
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }

    setTimeout(() => setStatus(null), 5000)
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border ${
      errors[field]
        ? 'border-red-400 dark:border-red-500'
        : 'border-gray-200 dark:border-white/10 focus:border-blue-500 dark:focus:border-blue-400'
    } text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-sm`

  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-16">
        <motion.span
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400" />
          Get in touch
          <span className="w-8 h-0.5 bg-blue-600 dark:bg-blue-400" />
        </motion.span>
        <h2 className="section-heading">Let's Work Together</h2>
        <p className="section-subheading">Have a project in mind or want to hire me? Let's talk!</p>
      </div>

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Left column — contact info */}
        <motion.div
          className="lg:col-span-2 flex flex-col gap-5"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {contactInfo.map(item => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-200 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{item.label}</p>
                <p className="font-semibold text-gray-800 dark:text-white text-sm mt-0.5">{item.value}</p>
              </div>
            </a>
          ))}

          {/* Quick social links */}
          <div className="glass-card rounded-2xl p-5">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Find me on</p>
            <div className="flex flex-col gap-3">
              {[
                { icon: FiGithub, label: 'GitHub', href: 'https://github.com/krishna90k9122-netizen', color: 'hover:text-gray-900 dark:hover:text-white' },
                { icon: FiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/krishna-gupta-b00779324', color: 'hover:text-blue-700 dark:hover:text-blue-400' },
                { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/919122957274', color: 'hover:text-green-600 dark:hover:text-green-400' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 text-gray-600 dark:text-gray-300 ${s.color} transition-colors duration-200 group`}
                >
                  <s.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-sm">{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right column — contact form */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="glass-card rounded-3xl p-8">
            <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Krishna Gupta"
                    className={inputClass('name')}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass('email')}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Internship Opportunity"
                  className={inputClass('subject')}
                />
                {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell me about your project or opportunity..."
                  className={`${inputClass('message')} resize-none`}
                />
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full btn-primary justify-center py-3.5 text-base disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm font-semibold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-500/10 py-3 rounded-xl border border-green-200 dark:border-green-500/20"
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/10 py-3 rounded-xl border border-red-200 dark:border-red-500/20"
                >
                  ❌ Something went wrong. Please try again or email me directly.
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default Contact
