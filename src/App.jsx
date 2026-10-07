import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue, useInView } from 'framer-motion'
import { BrowserRouter, Routes, Route, Link, useLocation, useParams } from 'react-router-dom'
import { BEFORE, AFTER, REVIEWS, HIGHLIGHTS, GOOGLE_REVIEWS, RATING, POSTS, fmtDate } from './content.js'

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
    meta: ['25+ years', 'Traditional', 'Asian art'],
  },
  {
    name: 'Trish',
    role: 'Tattoo Artist',
    img: 'artist-trish.jpg',
    bio: "Trish is Hung's daughter, and has been under her father's wing since 2008. She learned from Hung while developing her own style of art.",
    link: 'https://www.instagram.com/trish_tattoo/',
    handle: '@trish_tattoo',
    meta: ['Since 2008', 'Trained by Hung', 'Her own style'],
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
      <Link to="/" className="logo">Hung's<span>.</span></Link>
      <nav>
        <Link to="/#about">About</Link>
        <Link to="/#work">Gallery</Link>
        <Link to="/#services">Services</Link>
        <Link to="/#prepare">Prep &amp; Aftercare</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/#contact">Contact</Link>
      </nav>
      <Link to="/#book" className="btn-sm">Book now</Link>
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

/* Artist feature: masked photo reveal, parallax ghost name, 3D tilt on hover */
function ArtistRow({ a, i }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const flip = i % 2 === 1
  // trigger from the unclipped wrapper: an element clipped to nothing never counts as in view
  const wrapRef = useRef(null)
  const seen = useInView(wrapRef, { once: true, amount: 0.3 })
  const nameX = useTransform(scrollYProgress, [0, 1], flip ? ['12%', '-12%'] : ['-12%', '12%'])
  const photoY = useTransform(scrollYProgress, [0, 1], [-12, 12])

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 140, damping: 18 })
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 140, damping: 18 })
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => { mx.set(0); my.set(0) }

  return (
    <div ref={ref} className={`artist-row${flip ? ' flip' : ''}`}>
      <motion.span className="ghost-name" aria-hidden="true" style={{ x: nameX }}>{a.name}</motion.span>
      <div ref={wrapRef} className="artist-photo-wrap" onMouseMove={onMove} onMouseLeave={onLeave}>
        <motion.div className="artist-photo" style={{ rotateX: rotX, rotateY: rotY }}>
          <motion.div
            className="artist-mask"
            initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
            animate={{ clipPath: seen ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)' }}
            transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.div className="artist-photo-inner" style={{ y: photoY }}>
              <motion.div
                initial={{ scale: 1.25 }}
                animate={{ scale: seen ? 1.02 : 1.25 }}
                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ height: '100%' }}
              >
                <Img file={a.img} alt={a.name} />
              </motion.div>
            </motion.div>
          </motion.div>
          <span className="artist-frame" />
        </motion.div>
        <motion.span
          className="artist-badge"
          initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, type: 'spring', stiffness: 160, damping: 14 }}
        >
          <b>0{i + 1}</b>
          <small>{a.role.split(' ')[0]}</small>
        </motion.span>
      </div>
      <div className="artist-info">
        <Reveal x={flip ? -40 : 40} y={0}>
          <p className="role">{a.role}</p>
        </Reveal>
        <Reveal delay={0.1}><h3 className="artist-name">{a.name}</h3></Reveal>
        <motion.span
          className="artist-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
        <Reveal delay={0.25}><p className="artist-bio">{a.bio}</p></Reveal>
        <Reveal delay={0.35}>
          <ul className="chips">{a.meta.map((m) => <li key={m}>{m}</li>)}</ul>
        </Reveal>
        <Reveal delay={0.45}>
          <a className="artist-link" href={a.link} target="_blank" rel="noreferrer">
            <span>{a.handle}</span><i aria-hidden="true">→</i>
          </a>
        </Reveal>
      </div>
    </div>
  )
}

function Artists() {
  return (
    <section id="artists" className="artists">
      <Reveal><p className="eyebrow center-eyebrow">The hands behind the ink</p></Reveal>
      <Reveal delay={0.1}><h2 className="center">Meet the Artists</h2></Reveal>
      {ARTISTS.map((a, i) => <ArtistRow key={a.name} a={a} i={i} />)}
    </section>
  )
}

function useMedia(query) {
  const [m, setM] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches)
  useEffect(() => {
    const mq = window.matchMedia(query)
    const on = () => setM(mq.matches)
    on()
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [query])
  return m
}

function Lightbox({ index, onClose, onStep }) {
  useEffect(() => {
    const key = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onStep(1)
      if (e.key === 'ArrowLeft') onStep(-1)
    }
    window.addEventListener('keydown', key)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', key)
      document.body.style.overflow = prev
    }
  }, [onClose, onStep])
  const [file, alt] = WORK[index]
  return (
    <motion.div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button className="lb-close" onClick={onClose} aria-label="Close">×</button>
      <button className="lb-nav prev" onClick={(e) => { e.stopPropagation(); onStep(-1) }} aria-label="Previous photo">←</button>
      <button className="lb-nav next" onClick={(e) => { e.stopPropagation(); onStep(1) }} aria-label="Next photo">→</button>
      <AnimatePresence mode="wait">
        <motion.figure
          key={file}
          className="lb-fig"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          <img src={`/images/${file}`} alt={alt} />
          <figcaption><b>{String(index + 1).padStart(2, '0')}</b> {alt}</figcaption>
        </motion.figure>
      </AnimatePresence>
    </motion.div>
  )
}

/* Gallery: scroll down to pull a horizontal film strip sideways (desktop); swipe strip on touch/small screens */
function Work() {
  const wide = useMedia('(min-width: 900px) and (hover: hover)')
  const section = useRef(null)
  const track = useRef(null)
  const [dist, setDist] = useState(0)
  const [open, setOpen] = useState(null)

  useEffect(() => {
    if (!wide || !track.current) return
    const measure = () => setDist(Math.max(0, track.current.scrollWidth - window.innerWidth))
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(track.current)
    window.addEventListener('resize', measure)
    return () => { ro.disconnect(); window.removeEventListener('resize', measure) }
  }, [wide])

  const { scrollYProgress } = useScroll({ target: section, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist])
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })
  const step = (d) => setOpen((o) => (o + d + WORK.length) % WORK.length)
  const close = () => setOpen(null)

  return (
    <section id="work" ref={section} className="gallery" style={wide ? { height: `calc(100vh + ${dist}px)` } : undefined}>
      <div className="gallery-stick">
        <div className="gallery-head">
          <div>
            <Reveal><p className="eyebrow">Gallery</p></Reveal>
            <Reveal delay={0.1}><h2>Inside the Parlor</h2></Reveal>
          </div>
          <p className="gallery-hint">{wide ? 'Keep scrolling' : 'Swipe'} · tap a photo to enlarge</p>
        </div>
        <motion.div ref={track} className="gallery-track" style={wide ? { x } : undefined}>
          {WORK.map(([f, alt], i) => (
            <motion.button
              key={f}
              type="button"
              className={`gcard g${i % 3}`}
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, y: 80, rotate: i % 2 ? 4 : -4 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1.2 : -1.2 }}
              whileHover={{ rotate: 0, y: -10, scale: 1.02 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              aria-label={`Enlarge: ${alt}`}
            >
              <Img file={f} alt={alt} />
              <span className="gnum">{String(i + 1).padStart(2, '0')}</span>
              <span className="gcap">{alt}</span>
              <span className="gplus" aria-hidden="true">+</span>
            </motion.button>
          ))}
          <a className="gcard gcta" href={IG} target="_blank" rel="noreferrer">
            <span>More on</span>
            <b>Instagram</b>
            <i aria-hidden="true">→</i>
          </a>
        </motion.div>
        {wide && <motion.div className="gallery-bar" style={{ scaleX: bar }} />}
      </div>
      <AnimatePresence>
        {open !== null && <Lightbox index={open} onClose={close} onStep={step} />}
      </AnimatePresence>
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

function PrepCare() {
  return (
    <section id="prepare" className="section">
      <Reveal><h2 className="center">Before &amp; After Your Tattoo</h2></Reveal>
      <div className="prep-grid">
        {[['Before getting tattooed', BEFORE], ['Aftercare', AFTER]].map(([title, items], c) => (
          <Reveal key={title} x={c ? 40 : -40} y={0} className="prep-col">
            <h3>{title}</h3>
            <ol>
              {items.map(([t, d]) => (
                <li key={t}><strong>{t}</strong><span>{d}</span></li>
              ))}
            </ol>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Stars({ n }) {
  return <span className="stars" role="img" aria-label={`${n} out of 5 stars`}>{'★'.repeat(n)}{'☆'.repeat(5 - n)}</span>
}

const CLAMP_CHARS = 200

function ReviewCard({ r }) {
  const [open, setOpen] = useState(false)
  const long = r.text.length > CLAMP_CHARS
  return (
    <div className="review">
      <Stars n={r.rating} />
      <p className={long && !open ? 'clamped' : ''}>“{r.text}”</p>
      {long && (
        <button type="button" className="more" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? 'Show less' : 'Read more'}
        </button>
      )}
      {r.photos && (
        <div className="review-photos">
          {r.photos.map((f) => <Img key={f} file={f} alt={`Tattoo shared by ${r.name}`} />)}
        </div>
      )}
      <p className="who">{r.name}<span> · Google review</span></p>
    </div>
  )
}

function Highlights() {
  return (
    <>
      <div className="reviews">
        {HIGHLIGHTS.items.map(([t, d], i) => (
          <Reveal key={t} delay={i * 0.12}>
            <div className="review"><Stars n={5} /><h3>{t}</h3><p>{d}</p></div>
          </Reveal>
        ))}
      </div>
      <p className="center muted src">Source: <a href={HIGHLIGHTS.url} target="_blank" rel="noreferrer">{HIGHLIGHTS.source}</a></p>
    </>
  )
}

function ReviewsPreview() {
  return (
    <section id="reviews" className="section dark">
      <Reveal><h2 className="center">What Clients Say</h2></Reveal>
      {REVIEWS.length > 0 ? (
        <div className="reviews">
          {REVIEWS.slice(0, 3).map((r, i) => (
            <Reveal key={i} delay={i * 0.12}><ReviewCard r={r} /></Reveal>
          ))}
        </div>
      ) : <Highlights />}
      <Reveal className="center">
        <Link to="/reviews" className="btn">Read all reviews</Link>
      </Reveal>
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
          <p><Link to="/reviews">Reviews</Link></p>
          <p><Link to="/blog">Blog</Link></p>
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

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Artists />
      <FixedBand file="shop-floor.jpg">
        <p className="eyebrow">Est. since 2003</p>
        <h2>You think it, we ink it.</h2>
      </FixedBand>
      <Work />
      <Services />
      <PrepCare />
      <ReviewsPreview />
      <Book />
      <Contact />
    </>
  )
}

function PageHead({ title, children }) {
  return (
    <Reveal className="page-head">
      <h1>{title}</h1>
      {children}
    </Reveal>
  )
}

function ReviewsPage() {
  return (
    <main className="section page">
      <PageHead title="Reviews">
        <p>What our clients say about Hung's Tattoo Parlor.</p>
        <p className="rating"><Stars n={5} /> <strong>{RATING.score}</strong> · {RATING.count} reviews on Google</p>
      </PageHead>
      {REVIEWS.length > 0 ? (
        <div className="reviews wall">
          {REVIEWS.map((r, i) => <ReviewCard key={i} r={r} />)}
        </div>
      ) : <Highlights />}
      <div className="center">
        <p className="muted">A selection of our {RATING.count} Google reviews.</p>
        <a href={GOOGLE_REVIEWS} target="_blank" rel="noreferrer" className="btn">See all reviews on Google</a>
        <Link to="/#contact" className="btn ghost">Book your tattoo</Link>
      </div>
    </main>
  )
}

function BlogPage() {
  return (
    <main className="section page">
      <PageHead title="Blog"><p>News and updates from the parlor.</p></PageHead>
      <div className="posts">
        {POSTS.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 0.08} y={30}>
            <Link to={`/blog/${p.slug}`} className="post">
              {p.image && <div className="post-img"><Img file={p.image[0]} alt={p.image[1]} /></div>}
              <time>{fmtDate(p.date)}</time>
              <h3>{p.title}</h3>
              <p>{p.body[0]}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </main>
  )
}

function PostPage() {
  const post = POSTS.find((p) => p.slug === useParams().slug)
  if (!post) return <NotFound />
  return (
    <main className="section page narrow">
      <PageHead title={post.title}><time>{fmtDate(post.date)}</time></PageHead>
      {post.image && <div className="post-hero"><Img file={post.image[0]} alt={post.image[1]} /></div>}
      <div className="prose">{post.body.map((t, i) => <p key={i}>{t}</p>)}</div>
      <Link to="/blog" className="btn ghost">← All posts</Link>
    </main>
  )
}

function NotFound() {
  return (
    <main className="section page center">
      <PageHead title="Page not found" />
      <Link to="/" className="btn">Back home</Link>
    </main>
  )
}

/* Scroll to the #hash target, or to the top on a new page */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  const prevPath = useRef(pathname)
  useEffect(() => {
    // html has smooth scrolling; jump instantly when the page changes so the new page isn't left mid-scroll
    const behavior = prevPath.current === pathname ? 'smooth' : 'instant'
    prevPath.current = pathname
    if (!hash) {
      window.scrollTo({ top: 0, behavior })
      return
    }
    const t = setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior }), 80)
    return () => clearTimeout(t)
  }, [pathname, hash])
  return null
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
    <BrowserRouter>
      <ScrollManager />
      <motion.div className="progress" style={{ scaleX }} />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<PostPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
