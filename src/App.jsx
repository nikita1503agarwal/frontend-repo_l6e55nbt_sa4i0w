import { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { HardHat, Wrench, Road, Pipeline, Excavator, Phone, Mail, ArrowRight, Building2, MapPin } from 'lucide-react'

const Section = ({ id, children, bg = 'bg-transparent' }) => (
  <section id={id} className={`${bg} relative w-full`}>{children}</section>
)

const Container = ({ children, className = '' }) => (
  <div className={`mx-auto max-w-7xl px-6 sm:px-8 ${className}`}>{children}</div>
)

const GradientBlur = ({ className = '' }) => (
  <div className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
    <div className="absolute -top-40 right-10 h-72 w-72 rounded-full bg-gradient-to-br from-amber-400/30 to-orange-600/30 blur-3xl" />
    <div className="absolute -bottom-40 left-10 h-72 w-72 rounded-full bg-gradient-to-br from-blue-400/30 to-indigo-600/30 blur-3xl" />
  </div>
)

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/60 border border-white/30 shadow-lg shadow-black/5 rounded-2xl">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-md shadow-amber-700/20">
                <Building2 size={22} />
              </div>
              <div>
                <p className="text-lg font-extrabold tracking-tight text-gray-900 leading-none">Mani Enterprises</p>
                <p className="text-[11px] text-gray-600 -mt-0.5">Contractors & Engineers</p>
              </div>
            </a>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors">Services</a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
            </div>
            <a href="#contact" className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-xl shadow-lg shadow-orange-700/20 hover:shadow-orange-700/30 transition-all">
              <span>Get a Quote</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Hero = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 })

  return (
    <Section id="home" bg="bg-white">
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-600 to-blue-600 origin-left z-[60]" />

      <div className="relative min-h-[92vh] grid place-items-center overflow-hidden pt-24">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop"
          alt="Construction site"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-white/70" />

        <Container>
          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-white lg:text-left text-center"
            >
              <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs tracking-wide">
                Since 2010 • Uttar Pradesh, India
              </p>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                Building Excellence in Every Project
              </h1>
              <p className="mt-5 text-white/90 text-base sm:text-lg max-w-2xl">
                Mani Enterprises is a multidisciplinary contracting and engineering firm delivering civil, mechanical, road, pipeline and mining solutions—on time, safely, and with uncompromising quality.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a href="#services" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-5 py-3 rounded-xl shadow-lg shadow-orange-700/20 hover:shadow-orange-700/30 transition-all">
                  Explore Services
                  <ArrowRight size={18} />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/50 bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all">
                  Contact Us
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-white/80 text-sm">
                <span className="inline-flex items-center gap-2"><MapPin size={16} />Uttar Pradesh & beyond</span>
                <span className="inline-flex items-center gap-2"><Building2 size={16} />Industrial & Infrastructure</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/40 shadow-2xl shadow-black/20">
                <img
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop"
                  alt="Engineers planning"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-white/20 mix-blend-overlay" />
              </div>
            </motion.div>
          </div>
        </Container>
      </div>

      <Container className="py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 opacity-80">
          {[
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=600&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=600&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop',
          ].map((src, i) => (
            <motion.div key={i} whileHover={{ scale: 1.02 }} className="h-20 rounded-xl overflow-hidden border border-black/5 shadow-sm">
              <img src={src} className="h-full w-full object-cover" alt="construction" />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

const ServiceCard = ({ icon: Icon, title, desc, img }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5 }}
    className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="absolute inset-0">
      <img src={img} alt={title} className="h-full w-full object-cover opacity-20 group-hover:opacity-30 transition-opacity" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/30" />
    </div>
    <div className="relative p-6">
      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center shadow-md shadow-orange-700/20">
        <Icon size={22} />
      </div>
      <h3 className="mt-4 text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
      <div className="mt-5 inline-flex items-center gap-2 text-amber-700 font-medium">
        Learn more <ArrowRight size={16} />
      </div>
    </div>
  </motion.div>
)

const Services = () => {
  const services = [
    {
      icon: HardHat,
      title: 'Civil Construction',
      desc: 'End-to-end civil projects: industrial buildings, plants, foundations, and structural works with strict QA/QC.',
      img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop'
    },
    {
      icon: Wrench,
      title: 'Mechanical Engineering Projects',
      desc: 'Erection, fabrication, and commissioning of mechanical systems and heavy equipment with precision.',
      img: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1200&auto=format&fit=crop'
    },
    {
      icon: Road,
      title: 'Road and Highway Works',
      desc: 'High-quality road construction, widening, and maintenance adhering to IRC and MORTH specifications.',
      img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop'
    },
    {
      icon: Pipeline,
      title: 'Pipeline Installation & Maintenance',
      desc: 'Underground and above-ground pipelines, hydro-testing, and maintenance with safety-first approach.',
      img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop'
    },
    {
      icon: Excavator,
      title: 'Mining Operations & Infrastructure',
      desc: 'Mine development, haul roads, crushing & screening support, and equipment deployment at scale.',
      img: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1200&auto=format&fit=crop'
    },
  ]

  return (
    <Section id="services" bg="bg-white">
      <GradientBlur />
      <Container className="py-20">
        <div className="text-center max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex px-3 py-1 rounded-full text-xs bg-amber-100 text-amber-800"
          >
            Our Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-3 text-3xl sm:text-4xl font-black tracking-tight"
          >
            Services that power industries and infrastructure
          </motion.h2>
          <p className="mt-3 text-gray-600">Quality. Safety. Timely delivery. Every time.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

const About = () => (
  <Section id="about" bg="bg-gradient-to-b from-white to-gray-50">
    <Container className="py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">About Mani Enterprises</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We are a multidisciplinary contracting and engineering firm serving Uttar Pradesh and neighboring regions. From concept to commissioning, we deliver reliable, innovative, and cost-effective solutions across civil, mechanical, road works, pipeline works, and mining projects.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {['Quality First', 'On-Time Delivery', 'Safety Driven', 'Pan-UP Presence'].map((b, i) => (
              <span key={i} className="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-800 border border-gray-200">{b}</span>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-black/5 shadow-xl">
              <img src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1200&auto=format&fit=crop" alt="About us" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl border border-black/5 shadow-lg p-4">
              <p className="text-3xl font-black bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">250+ Projects</p>
              <p className="text-xs text-gray-500">Delivered with excellence</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  </Section>
)

const Projects = () => (
  <Section id="projects" bg="bg-white">
    <Container className="py-20">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Featured Work</h2>
        <p className="mt-3 text-gray-600">A glimpse into our cross-industry capabilities.</p>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {[
          'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
        ].map((src, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -4 }} className="group relative overflow-hidden rounded-2xl border border-black/5 shadow-lg">
            <img src={src} className="h-64 w-full object-cover" alt="project" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>
        ))}
      </div>
    </Container>
  </Section>
)

const Contact = () => (
  <Section id="contact" bg="bg-gradient-to-b from-gray-50 to-white">
    <Container className="py-20">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Let’s build something remarkable</h2>
          <p className="mt-3 text-gray-600">Share your project requirements and our team will get back to you within 24 hours.</p>
          <div className="mt-6 space-y-3">
            <a href="tel:+919999999999" className="flex items-center gap-3 text-gray-800 hover:text-amber-700">
              <span className="h-10 w-10 rounded-xl bg-amber-100 text-amber-800 grid place-items-center">
                <Phone size={18} />
              </span>
              +91 99999 99999
            </a>
            <a href="mailto:contact@manienterprises.com" className="flex items-center gap-3 text-gray-800 hover:text-amber-700">
              <span className="h-10 w-10 rounded-xl bg-amber-100 text-amber-800 grid place-items-center">
                <Mail size={18} />
              </span>
              contact@manienterprises.com
            </a>
          </div>
        </div>
        <div>
          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-black/5 bg-white p-6 shadow-lg">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Name</label>
                <input required className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500/40" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Phone</label>
                <input required className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500/40" placeholder="Contact number" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-gray-600">Email</label>
              <input className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500/40" placeholder="Email (optional)" />
            </div>
            <div className="mt-4">
              <label className="text-sm text-gray-600">Project Details</label>
              <textarea required rows={4} className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500/40" placeholder="Tell us about your project..." />
            </div>
            <button className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-5 py-3 rounded-xl shadow-lg shadow-orange-700/20 hover:shadow-orange-700/30 transition-all">
              Send Inquiry
              <ArrowRight size={18} />
            </button>
            <p className="mt-2 text-center text-xs text-gray-500">We respect your privacy. Your details are safe with us.</p>
          </form>
        </div>
      </div>
    </Container>
  </Section>
)

const Footer = () => (
  <footer className="border-t border-black/5 bg-white">
    <Container className="py-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white grid place-items-center">
            <Building2 size={20} />
          </div>
          <div>
            <p className="font-extrabold">Mani Enterprises</p>
            <p className="text-xs text-gray-600">Building Excellence in Every Project</p>
          </div>
        </div>
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Mani Enterprises. All rights reserved.</p>
      </div>
    </Container>
  </footer>
)

function App() {
  useEffect(() => {
    document.title = 'Mani Enterprises — Building Excellence in Every Project'
  }, [])

  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
