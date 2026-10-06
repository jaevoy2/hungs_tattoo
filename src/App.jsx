import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const IG = 'https://www.instagram.com/hungtattooparlorofficial'
const FB = 'https://www.facebook.com/p/Hungs-Tattoo-Parlor-61569052310712/'
const TT = 'https://www.tiktok.com/@hungtattooparlor'
const EMAIL = 'Hungtattooparlor@yahoo.com'
const PHONE = '(651) 330-2937'
const ADDRESS = ['377 University Ave W, Suite D', 'Saint Paul, MN 55103']
const MAP_SRC = 'https://www.google.com/maps?q=' + encodeURIComponent("Hung's Tattoo Parlor, 377 University Ave W Suite D, Saint Paul, MN 55103") + '&output=embed'

const SOCIALS = [
  ['Instagram', IG],
  ['Facebook', FB],
  ['TikTok', TT],
]

const ARTISTS = [
  {
    name: 'Hung',
    role: 'Owner & Main Artist',
    img: 'artist-hung.jpg',
    bio: "Owner and main artist at Hung's Tattoo Parlor. With well over 25 years of experience, Hung specializes in artwork ranging from traditional to Asian art.",
    link: IG,
    handle: '@hungtattooparlorofficial',
  },
  {
    name: 'Trish',
    role: 'Tattoo Artist',
    img: 'artist-trish.jpg',
    bio: "Trish is Hung's daughter, and has been under her father's wing since 2008. She learned from Hung while developing her own style of art.",
    link: 'https://www.instagram.com/trish_tattoo/',
    handle: '@trish_tattoo',
  },
]

const WORK = [
  ['hung-tattooing.jpg', 'Hung tattooing a full back piece'],
  ['storefront.jpg', "Hung's Tattoo storefront at night"],
  ['shop-chair.jpg', 'Tattoo station'],
  ['shop-booth.jpg', 'Flash art wall'],
  ['shop-door.jpg', 'Parlor entrance'],
  ['shop-floor.jpg', 'Inside the parlor'],
]

const SERVICES = [
  ['Custom Tattoos', 'Your idea, drawn from scratch and inked to last.'],
  ['Henna Designs', 'Intricate, temporary body art for any occasion.'],
  ['Cover-ups', 'Give an old piece a new story.'],
  ['Flash Designs', 'Walk in and pick something ready to go.'],
]

const HOURS = [
  ['Monday', '11:00 AM – 9:00 PM'],
  ['Tuesday', '11:00 AM – 9:00 PM'],
  ['Wednesday', '11:00 AM – 9:00 PM'],
  ['Thursday', '11:00 AM – 9:00 PM'],
  ['Friday', '11:00 AM – 9:00 PM'],
  ['Saturday', '11:00 AM – 9:00 PM'],
  ['Sunday', 'Closed'],
]

/* Image from /public/images; shows a textured placeholder if the file is missing */
function Img({ file, alt, className = '' }) {
  const [failed, setFailed] = useState(false)
  if (failed)
    return (
      <div className={`ph ${className}`} role="img" aria-label={alt}>
        <span>{file.replace(/\.\w+$/, '')}</span>
      </div>
    )
  return (
    <img
      className={className}
      src={`/images/${file}`}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

/* Scroll-entrance wrapper */
const Reveal = ({ children, delay = 0, y = 50, x = 0, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y, x }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
)

/* Image that drifts at a different speed than the page */
function ParallaxImg({ file, alt, range = 60, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-range, range])
  return (
    <div ref={ref} className={`pimg ${className}`}>
      <motion.div style={{ y, scale: 1.25 }} className="pimg-inner">
        <Img file={file} alt={alt} />
      </motion.div>
    </div>
  )
}

function Nav() {
  return (
    <header className="nav">
      <a href="#top" className="logo">Hung's<span>.</span></a>
      <nav>
        <a href="#about">About</a>
        <a href="#artists">Artists</a>
        <a href="#work">Gallery</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
      <a href="#book" className="btn-sm">Book now</a>
    </header>
  )
}

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-60%'])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  return (
    <section id="top" ref={ref} className="hero">
      <motion.div className="hero-bg" style={{ y: bgY }}>
        <Img file="hero-back.jpg" alt="Man showing a full back tattoo" />
      </motion.div>
      <div className="hero-shade" />
      <motion.div className="hero-content" style={{ y: titleY, opacity: fade }}>
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          You think it, we ink it
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          HUNG'S <span>TATTOO</span>
        </motion.h1>
        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Custom tattoos, traditional to Asian art, by artists with 25+ years of experience.
        </motion.p>
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <a href="#book" className="btn">Book a consultation</a>
          <a href="#work" className="btn ghost">See the parlor</a>
        </motion.div>
      </motion.div>
      <motion.div className="scroll-cue" style={{ opacity: fade }}>Scroll</motion.div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="about-wrap">
      <div className="about">
      <Reveal x={-80} y={0} className="about-img">
        <ParallaxImg file="hung-tattooing.jpg" alt="Tattoo artist at work" range={40} />
      </Reveal>
      <div className="about-text">
        <Reveal><h2>About Us</h2></Reveal>
        <Reveal delay={0.15}>
          <p>
            Every tattoo carries a story. At Hung's Tattoo Parlor we sit down with you, shape
            your idea into something that is entirely yours, and put it on skin with care,
            precision, and a steady hand.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p>
            From bold custom pieces to delicate henna, our artists treat every client's vision
            like their own. Walk in, say hello, and let's make something worth keeping.
          </p>
        </Reveal>
        <Reveal delay={0.45}><a href="#book" className="btn">Book a consultation</a></Reveal>
      </div>
      </div>
      <div className="team" id="artists">
        <Reveal><h2 className="center">Meet the Artists</h2></Reveal>
        <div className="team-grid">
          {ARTISTS.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.18} className="artist">
              <div className="artist-img"><Img file={a.img} alt={a.name} /></div>
              <div className="artist-body">
                <h3>{a.name}</h3>
                <p className="role">{a.role}</p>
                <p>{a.bio}</p>
                <a href={a.link} target="_blank" rel="noreferrer">{a.handle} →</a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Fixed-attachment parallax band: the photo stays put while the page scrolls over it */
function FixedBand({ file, children }) {
  return (
    <section className="band" style={{ backgroundImage: `url(/images/${file})` }}>
      <div className="hero-shade" />
      <Reveal className="band-inner">{children}</Reveal>
    </section>
  )
}

function Work() {
  return (
    <section id="work" className="section work">
      <Reveal><h2 className="center">Inside the Parlor</h2></Reveal>
      <div className="grid">
        {WORK.map(([f, alt], i) => (
          <Reveal key={f} delay={(i % 3) * 0.12} y={70} className="grid-item">
            <ParallaxImg file={f} alt={alt} range={30} />
          </Reveal>
        ))}
      </div>
      <Reveal className="center">
        <a href={IG} target="_blank" rel="noreferrer" className="btn">See more on Instagram</a>
      </Reveal>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="section dark">
      <Reveal><h2 className="center">Services</h2></Reveal>
      <div className="services">
        {SERVICES.map(([t, d], i) => (
          <Reveal key={t} delay={i * 0.12} className="service">
            <span className="num">0{i + 1}</span>
            <h3>{t}</h3>
            <p>{d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Book() {
  return (
    <section id="book" className="book" style={{ backgroundImage: 'url(/images/shop-booth.jpg)' }}>
      <div className="hero-shade" />
      <Reveal className="book-inner">
        <h2>You want a tattoo?</h2>
        <p>Send us a message to book your consultation.</p>
        <a href="#contact" className="btn">Contact us</a>
      </Reveal>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    const f = new FormData(e.target)
    const body = `${f.get('message')}\n\n— ${f.get('name')}\n${f.get('phone') || ''}\n${f.get('email')}`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(f.get('subject') || 'Tattoo inquiry')}&body=${encodeURIComponent(body)}`
    setSent(true)
  }
  return (
    <section id="contact" className="section contact">
      <Reveal><h2 className="center">Contact Us</h2></Reveal>
      <div className="contact-grid">
        <Reveal x={-40} y={0} className="contact-info">
          <div className="info-block">
            <h4>Visit</h4>
            <p>{ADDRESS[0]}<br />{ADDRESS[1]}</p>
          </div>
          <div className="info-block">
            <h4>Call or Text</h4>
            <p><a href={`tel:${PHONE.replace(/\D/g, '')}`}>{PHONE}</a></p>
          </div>
          <div className="info-block">
            <h4>Email</h4>
            <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
          </div>
          <div className="info-block">
            <h4>Hours</h4>
            <p>Monday – Saturday, 11 AM – 9 PM<br />Sunday: Closed</p>
          </div>
          <div className="socials">
            {SOCIALS.map(([n, u]) => (
              <a key={n} href={u} target="_blank" rel="noreferrer">{n}</a>
            ))}
          </div>
        </Reveal>
        <Reveal x={40} y={0}>
          <form className="contact-form" onSubmit={onSubmit}>
            <input name="name" placeholder="Your name" required />
            <input name="email" type="email" placeholder="Email" required />
            <input name="phone" type="tel" placeholder="Phone (optional)" />
            <input name="subject" placeholder="Subject (e.g. custom sleeve, cover-up)" />
            <textarea name="message" rows="5" placeholder="Tell us about your idea" required />
            <button type="submit" className="btn">Send message</button>
            {sent && <p className="note">Your email app should open with the message ready to send.</p>}
          </form>
        </Reveal>
      </div>
      <Reveal className="map">
        <iframe title="Hung's Tattoo Parlor location" src={MAP_SRC} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </Reveal>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <Reveal className="footer-grid">
        <div>
          <h4>Opening Hours</h4>
          <ul>{HOURS.map(([d, h]) => <li key={d}><span>{d}</span><span>{h}</span></li>)}</ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          {SOCIALS.map(([n, u]) => <p key={n}><a href={u} target="_blank" rel="noreferrer">{n}</a></p>)}
          <p><a href="https://hungstattooparlor.com" target="_blank" rel="noreferrer">hungstattooparlor.com</a></p>
        </div>
        <div>
          <h4>Hung's Tattoo Parlor</h4>
          <p>You think it, we ink it.</p>
          <p>{ADDRESS[0]}, {ADDRESS[1]}</p>
          <p><a href={`tel:${PHONE.replace(/\D/g, '')}`}>{PHONE}</a></p>
          <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        </div>
      </Reveal>
      <p className="copy privacy">This site records basic visit information (IP address, approximate location, device, browser and time) to understand traffic.</p>
      <p className="copy">© {new Date().getFullYear()} Hung's Tattoo Parlor</p>
    </footer>
  )
}

export default function App() {
  // Visit notification: production only, once per browser session
  useEffect(() => {
    if (!import.meta.env.PROD) return
    try {
      if (sessionStorage.getItem('visit-sent')) return
      sessionStorage.setItem('visit-sent', '1')
    } catch {}
    fetch('/api/visit', { method: 'POST', keepalive: true }).catch(() => {})
  }, [])
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })
  return (
    <>
      <motion.div className="progress" style={{ scaleX }} />
      <Nav />
      <Hero />
      <About />
      <FixedBand file="shop-floor.jpg">
        <p className="eyebrow">Est. since 2003</p>
        <h2>You think it, we ink it.</h2>
      </FixedBand>
      <Work />
      <Services />
      <Book />
      <Contact />
      <Footer />
    </>
  )
}
