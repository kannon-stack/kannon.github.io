import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  Brackets,
  Check,
  CircleDot,
  Code2,
  Copy,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Mic2,
  MoveUpRight,
  Phone,
  Radio,
  Terminal,
  X,
} from "lucide-react";

const projects = [
  {
    number: "01",
    kind: "IT / consulting",
    title: "AGKBuilds / IT Services",
    description: "Computer builds and repair, data recovery, custom business applications, network diagnostics, website design, phone repair, and client consultation.",
    tag: "MAY 2025—NOW",
    accent: "lime",
  },
  {
    number: "02",
    kind: "Field work",
    title: "Independent Contractor",
    description: "Bidding and completing landscaping, hardscaping, general repairs, painting, make-readies, wood repair, lock work, roof repair, and trash hauls across Central Texas.",
    tag: "2016—2019",
    accent: "mint",
  },
  {
    number: "03",
    kind: "Construction",
    title: "R&S / Heavy Equipment",
    description: "Operated a variety of construction equipment, handled job-site issues and minor repairs, communicated with management, and took a leadership role when needed.",
    tag: "2019—2021",
    accent: "amber",
  },
  {
    number: "04",
    kind: "Remodeling",
    title: "Real Star / Remodels",
    description: "Replaced windows, installed kitchen cabinets, created wood structures, repaired roofs and floors, coordinated laborers, and collaborated with other craftsmen.",
    tag: "2021—2022",
    accent: "purple",
  },
  {
    number: "05",
    kind: "Production",
    title: "UGN / Toyota Components",
    description: "Assembled trunk components for Toyota vehicles on a production line while meeting daily quality and output targets.",
    tag: "JAN—MAY 2025",
    accent: "blue",
  },
  {
    number: "06",
    kind: "Customer care",
    title: "Service / Communication",
    description: "Supported healthcare members, collected payments, and delivered customer service across Teleperformance and GC Services.",
    tag: "2014—2015",
    accent: "pink",
  },
];

const experience = [
  {
    year: "2025—NOW",
    role: "AGKBuilds / Owner · IT Consultant",
    scope: "San Antonio, TX",
    detail: "Builds and repairs computer systems, performs data recovery, develops custom applications for small businesses, diagnoses networks, designs websites, repairs phones, and consults with clients.",
  },
  {
    year: "2025",
    role: "UGN / Production · Assembly",
    scope: "Somerset, KY",
    detail: "Assembled trunk components for Toyota vehicles on a production line while meeting daily quality and output targets.",
  },
  {
    year: "2022—2025",
    role: "AGKBuilds / Owner · IT Consultant",
    scope: "San Antonio, TX",
    detail: "Independent IT consulting across computer systems, data recovery, business applications, network troubleshooting, websites, phone repair, and client support.",
  },
  {
    year: "2021—2022",
    role: "Real Star Property Management / Remodeling",
    scope: "Killeen, TX",
    detail: "Replaced windows, installed cabinets, built wood structures, repaired roofs and floors, coordinated laborers, and handled demolition work.",
  },
  {
    year: "2019—2021",
    role: "R&S Excavation / Heavy Equipment Operator",
    scope: "San Antonio, TX",
    detail: "Operated construction equipment, handled job-site issues and minor repairs, communicated with management, and took a leadership role on site.",
  },
  {
    year: "2016—2019",
    role: "Central Texas Area / Independent Contractor",
    scope: "Central Texas",
    detail: "Bidded and completed landscaping, hardscaping, general repairs, painting, make-readies, wood repair, lock work, roof repair, and trash hauls.",
  },
  {
    year: "2009—2016",
    role: "Crew lead · customer care · maintenance",
    scope: "Killeen · Harker Heights · Copperas Cove, TX",
    detail: "Led lawn crews, maintained equipment, supported property make-readies, handled healthcare customer care and collections, welded, operated forklifts, repaired vehicles, and maintained properties.",
  },
];

const recognition = [
  { icon: Mic2, label: "TALKS", title: "No public talks listed.", detail: "The résumé points to hands-on, client-facing work rather than stage appearances.", state: "NOT LISTED" },
  { icon: Award, label: "AWARDS", title: "No formal awards listed.", detail: "The strongest proof points are range, steady progression, and work that holds up on site.", state: "NOT LISTED" },
  { icon: Radio, label: "SIGNAL", title: "90 words per minute.", detail: "Fast, clear communication across IT consulting, production, customer care, and field work.", state: "SKILL" },
];

function MatrixGlyphs() {
  const glyphs = ["01", "//", "[]", "<> ", "++", "::", "TX", "AG", "07", "_", "=", "{}"];
  return (
    <div className="matrix-glyphs" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, index) => (
        <div className="glyph-column" key={index} style={{ ["--delay" as string]: `${(index % 7) * -1.2}s`, ["--speed" as string]: `${10 + (index % 5) * 2}s` }}>
          {Array.from({ length: 9 }).map((__, glyphIndex) => (
            <span key={glyphIndex}>{glyphs[(index + glyphIndex * 3) % glyphs.length]}</span>
          ))}
        </div>
      ))}
    </div>
  );
}

function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <div className="section-label">
      <span className="section-index">{index}</span>
      <span>{children}</span>
    </div>
  );
}

function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const move = (event: PointerEvent) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.matchMedia("(pointer: coarse)").matches) return;
      const bounds = hero.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width) * 100;
      const y = ((event.clientY - bounds.top) / bounds.height) * 100;
      hero.style.setProperty("--pointer-x", `${x}%`);
      hero.style.setProperty("--pointer-y", `${y}%`);
      hero.style.setProperty("--hero-rotate-x", `${(50 - y) * 0.035}deg`);
      hero.style.setProperty("--hero-rotate-y", `${(x - 50) * 0.035}deg`);
    };

    hero.addEventListener("pointermove", move);
    return () => hero.removeEventListener("pointermove", move);
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard?.writeText("dylanborgen@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="AGKBUILDS home">
          <span className="wordmark-cursor" aria-hidden="true">_</span>
          <span>AGK</span><strong>BUILDS</strong>
          <span className="wordmark-meta">TX // 01</span>
        </a>
        <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Primary navigation">
          <a href="#work" onClick={closeMenu}>Work <span>01</span></a>
          <a href="#about" onClick={closeMenu}>About <span>02</span></a>
          <a href="#experience" onClick={closeMenu}>Experience <span>03</span></a>
          <a href="#contact" onClick={closeMenu}>Contact <span>04</span></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
        <a className="header-status" href="#contact"><span className="status-dot" /> IT / web / repair / field work</a>
      </header>

      <section className="hero" id="top" ref={heroRef}>
        <MatrixGlyphs />
        <div className="hero-signal" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-prompt">&gt;_</span> owner / IT consultant / san antonio</p>
          <h1>I make the<br /><span className="h1-outline">complicated</span><br /><span className="h1-signal">useful<span className="blink">_</span></span></h1>
          <p className="hero-intro">I’m Dylan Borgen — owner of AGKBuilds in San Antonio. I build and repair computer systems, solve network and data problems, design websites, and bring the same practical mindset to field work.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">See selected work <ArrowDownRight size={16} /></a>
            <a className="text-link" href="#about">How I work <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <div className="hero-card-wrap" aria-hidden="true">
          <div className="hero-card">
            <div className="hero-card-top"><span>AGK / SYSTEM ONLINE</span><span className="hero-card-live"><span className="status-dot" /> LIVE</span></div>
            <div className="hero-card-mark"><Brackets size={32} strokeWidth={1.2} /><span>build<br />something<br /><em>useful</em></span></div>
            <div className="hero-card-bottom"><span>SAN ANTONIO</span><span>TX / USA</span><span>v.01</span></div>
          </div>
          <div className="hero-card-caption">cursor-sensitive interface / move around</div>
        </div>
        <div className="hero-footer"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /><span>001 / 005</span></div>
      </section>

      <section className="statement section-pad">
        <div className="statement-mark" aria-hidden="true"><span>AGK</span><span>+</span><span>∞</span></div>
        <div className="statement-copy"><SectionLabel index="00" children="A quick read" /><h2>Useful is a skill. <span>Range is the advantage.</span></h2></div>
        <div className="statement-aside"><p>From IT consulting and custom applications to welding, remodeling, equipment operation, and landscaping — I’m comfortable learning the problem and getting to work.</p><a href="#contact" className="text-link">Start a conversation <ArrowUpRight size={15} /></a></div>
      </section>

      <section className="about section-pad" id="about">
        <div className="section-heading"><SectionLabel index="01" children="About / operating system" /><span className="heading-note">DIGITAL SYSTEMS / PHYSICAL SYSTEMS</span></div>
        <div className="bento-grid">
          <article className="bento-card bento-main">
            <div className="bento-icon"><Terminal size={20} /></div><span className="card-kicker">// 01 / THE SHORT VERSION</span>
            <h3>Many fields.<br /><span>One useful habit.</span></h3>
            <p>AGKBuilds is Dylan’s independent practice for IT consulting and hands-on problem solving. The throughline is simple: diagnose clearly, communicate directly, and leave the system better than it was.</p>
            <div className="card-foot"><span>01—06</span><span>KEEP IT MOVING <ArrowUpRight size={14} /></span></div>
          </article>
          <article className="bento-card bento-signal"><div className="signal-orbit"><span className="orbit-core">AGK</span><span className="orbit-ring ring-one" /><span className="orbit-ring ring-two" /></div><span className="card-kicker">// CURRENT SIGNAL</span><h4>Curious, calm,<br /><em>resourceful.</em></h4><span className="mini-caption">the working trio</span></article>
          <article className="bento-card bento-location"><MapPin size={18} /><span className="card-kicker">// BASED IN</span><strong>San Antonio</strong><span className="mini-caption">Texas / available for practical work</span></article>
          <article className="bento-card bento-stack"><span className="card-kicker">// THE TOOLKIT</span><div className="stack-list"><span><Code2 size={14} /> IT + web</span><span><Layers3 size={14} /> networks</span><span><Brackets size={14} /> repair</span><span><CircleDot size={14} /> field work</span></div></article>
          <article className="bento-card bento-note"><span className="quote-mark">“</span><p>Diagnose first. Then make the fix useful.</p><span className="mini-caption">operating principle / 001</span></article>
        </div>
      </section>

      <section className="work section-pad" id="work">
        <div className="section-heading"><SectionLabel index="02" children="Selected work" /><span className="heading-note">SIX RÉSUMÉ THREADS, ONE PRACTICAL APPROACH</span></div>
        <div className="projects-grid">{projects.map((project) => <article className={`project-card accent-${project.accent}`} key={project.number}><div className="project-top"><span className="project-number">{project.number}</span><span className="project-kind">{project.kind}</span><ArrowUpRight className="project-arrow" size={18} /></div><div className="project-visual"><span className="visual-mark">{project.number === "01" ? "//" : project.number === "02" ? "[]" : project.number === "03" ? "<>" : project.number === "04" ? "✳" : project.number === "05" ? "↗" : "∞"}</span><span className="visual-grid" /></div><div className="project-bottom"><div><h3>{project.title}</h3><p>{project.description}</p></div><span className="project-tag">{project.tag}</span></div></article>)}</div>
      </section>

      <section className="experience section-pad" id="experience">
        <div className="section-heading"><SectionLabel index="03" children="Experience / timeline" /><span className="heading-note">2009—NOW / SAN ANTONIO + CENTRAL TEXAS</span></div>
        <div className="timeline">{experience.map((item, index) => <article className="timeline-row" key={item.year}><div className="timeline-year">{item.year}</div><div className="timeline-marker"><span className={index === 0 ? "marker-dot active" : "marker-dot"} /></div><div className="timeline-content"><h3>{item.role}</h3><span className="timeline-scope">{item.scope}</span><p>{item.detail}</p></div><div className="timeline-index">0{index + 1}</div></article>)}</div>
      </section>

      <section className="recognition section-pad" id="recognition">
        <div className="section-heading"><SectionLabel index="04" children="Talks / awards / signal" /><span className="heading-note">THE RECEIPTS ARE IN THE WORK</span></div>
        <div className="recognition-grid">{recognition.map((item) => { const Icon = item.icon; return <article className="recognition-card" key={item.label}><div className="recognition-icon"><Icon size={17} /></div><div><span className="card-kicker">// {item.label}</span><h3>{item.title}</h3><p>{item.detail}</p></div><span className="recognition-state"><span className="status-dot" /> {item.state}</span></article>; })}</div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="contact-panel"><MatrixGlyphs /><div className="contact-content"><SectionLabel index="05" children="Contact / open channel" /><h2>Need a fix?<br /><span>Let’s talk.</span></h2><p>For IT consulting, website work, repair, custom applications, or a practical problem that needs a second set of hands.</p><div className="contact-actions"><a className="button button-primary" href="mailto:dylanborgen@gmail.com">dylanborgen@gmail.com <ArrowUpRight size={16} /></a><a className="copy-button" href="tel:+12545892646"><Phone size={15} /> (254) 589-2646</a><button className="copy-button" onClick={copyEmail}>{copied ? <><Check size={15} /> copied</> : <><Copy size={15} /> copy email</>}</button></div></div><div className="contact-side"><span className="contact-side-label">AGKBUILDS / SAN ANTONIO</span><div className="contact-glyph"><Brackets size={45} strokeWidth={1} /></div><span className="contact-side-note">No gatekeepers.<br />Just a clear next step.</span></div></div>
      </section>

      <footer className="site-footer"><a className="wordmark" href="#top"><span className="wordmark-cursor">_</span><span>AGK</span><strong>BUILDS</strong></a><span className="footer-copy">© {new Date().getFullYear()} Dylan Borgen. Built in San Antonio, with intent.</span><div className="footer-links"><a href="mailto:dylanborgen@gmail.com" aria-label="Email"><Mail size={16} /></a></div><a className="back-top" href="#top">BACK TO TOP <MoveUpRight size={14} /></a></footer>
    </main>
  );
}

export default Home;
