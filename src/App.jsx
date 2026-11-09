import { useState } from 'react'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown,
  Crosshair, Factory, Headphones, Menu, PenTool, ShieldCheck, Sparkles, X,
} from 'lucide-react'

// Actualiza este número con el WhatsApp comercial de Prodetech (código de país incluido, sin + ni espacios).
const WHATSAPP_NUMBER = ''
const waLink = (message) => WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  : `https://wa.me/?text=${encodeURIComponent(message)}`

const categories = [
  { number: '01', title: 'Láser de diodo', subtitle: 'Ideas que toman forma', detail: 'Grabado y corte para personalización, decoración y pequeños talleres.', mark: 'DIODE', kind: 'diode' },
  { number: '02', title: 'Láser CO₂', subtitle: 'Producción con precisión', detail: 'Corta y graba madera, MDF, acrílico y otros materiales compatibles.', mark: 'CO₂', kind: 'co2' },
  { number: '03', title: 'Láser de fibra', subtitle: 'Marca sobre metal', detail: 'Marcado preciso para piezas, herramientas, placas y productos metálicos.', mark: 'FIBER', kind: 'fiber' },
]

const products = [
  { name: 'Falcon 2 · 12W', category: 'LÁSER DE DIODO', note: 'Precisión para comenzar a producir', badge: 'Más elegido', kind: 'diode' },
  { name: 'CO₂ 40 × 40 cm', category: 'LÁSER CO₂', note: 'Formato compacto para tu taller', badge: 'Versátil', kind: 'co2' },
  { name: 'Fibra · 30W', category: 'LÁSER DE FIBRA', note: 'Marcado ágil para metal', badge: 'Industrial', kind: 'fiber' },
]

function MachineArt({ kind = 'co2', className = '' }) {
  return <div className={`machine-art ${kind} ${className}`} aria-hidden="true">
    <span className="art-halo" />
    {kind === 'fiber' ? <svg viewBox="0 0 500 360" role="presentation">
      <ellipse cx="256" cy="315" rx="178" ry="23" fill="#050607" opacity=".65" />
      <path d="m115 115 190-43 101 50-192 50-99-57Z" fill="#3b4249" stroke="#687078" strokeWidth="2" />
      <path d="m115 115 99 57v103l-99-57V115Z" fill="#20262b" stroke="#50575d" strokeWidth="2" />
      <path d="m214 172 192-50v103l-192 50V172Z" fill="#141a1e" stroke="#4b5258" strokeWidth="2" />
      <path d="m242 192 132-34v56l-132 35v-57Z" fill="#090c0e" stroke="#646c71" />
      <path d="m250 204 105-27v33l-105 28v-34Z" fill="#1d272c" />
      <path d="m270 251 24-7 8 32-24 7-8-32Z" fill="#8a9193" /><path d="m281 281 9-3 4 23-9 3-4-23Z" fill="#adb2b2" />
      <path d="m287 306 1-15" stroke="#ff7653" strokeWidth="3"/><circle cx="288" cy="311" r="12" fill="#ff6a42" opacity=".24"/><circle cx="288" cy="311" r="4" fill="#ff754f" />
      <rect x="142" y="132" width="43" height="12" rx="5" fill="#ff6845"/><circle cx="369" cy="144" r="7" fill="#ff6845"/>
    </svg> : kind === 'diode' ? <svg viewBox="0 0 500 360" role="presentation">
      <ellipse cx="257" cy="310" rx="180" ry="25" fill="#050607" opacity=".65" />
      <path d="m111 231 190-62 92 48-192 65-90-51Z" fill="#252d32" stroke="#697178" strokeWidth="2" />
      <path d="m116 118 185-58v19L117 137v-19Z" fill="#616a71" stroke="#8a9196" />
      <path d="m132 128 10 5v100l-10-5V128Zm167-52 10-3v105l-10 4V76Zm-152 48 10 5v101l-10-5V124Zm167-51 10-3v104l-10 3V73Z" fill="#a8adb0" />
      <path d="m177 221 106-36 40 22-107 37-39-23Z" fill="#151a1d" stroke="#81888c" />
      <path d="m262 196 20-7 9 26-19 8-10-27Z" fill="#aeb4b6"/><path d="m272 221-2 24" stroke="#ff6946" strokeWidth="3"/><circle cx="269" cy="249" r="10" fill="#ff6946" opacity=".35"/>
      <path d="m117 235 91 51v22l-91-52v-21Zm184-64 92 46v22l-92-47v-21Z" fill="#111518" stroke="#464e53" />
      <circle cx="155" cy="264" r="7" fill="#ff6845"/><circle cx="357" cy="235" r="7" fill="#ff6845"/>
    </svg> : <svg viewBox="0 0 500 360" role="presentation">
      <ellipse cx="254" cy="311" rx="176" ry="23" fill="#050607" opacity=".64" />
      <path d="m111 124 181-60 99 48-182 62-98-50Z" fill="#545d63" stroke="#8b9296" strokeWidth="2" />
      <path d="m111 124 98 50v111l-98-52V124Z" fill="#2a3035" stroke="#687177" strokeWidth="2" />
      <path d="m209 174 182-62v108l-182 65V174Z" fill="#191f23" stroke="#626a70" strokeWidth="2" />
      <path d="m137 137 57 29v84l-57-30v-83Z" fill="#111619" stroke="#555e63"/><path d="m147 147 37 19v69l-37-19v-69Z" fill="#263238" />
      <path d="m232 183 136-47v63l-136 48v-64Z" fill="#090d0f" stroke="#3d464c"/>
      <path d="m273 177 45-16 11 13-46 16-10-13Z" fill="#90979a"/><path d="m292 187 22-8 8 42-22 8-8-42Z" fill="#bbc0c1"/><path d="m301 230 1 29" stroke="#ff6b48" strokeWidth="3" />
      <circle cx="302" cy="264" r="11" fill="#ff714d" opacity=".25"/><circle cx="302" cy="264" r="4" fill="#ff714d"/>
      <rect x="230" y="226" width="131" height="5" rx="2" fill="#59636a"/><circle cx="130" cy="147" r="4" fill="#ff704b"/><circle cx="367" cy="128" r="5" fill="#ff704b"/>
    </svg>}
    <span className="art-caption">PRECISIÓN · CONTROL · RESULTADOS</span>
  </div>
}

function Brand() { return <a className="brand" href="#inicio" aria-label="Prodetech, inicio"><span className="brand-mark"><svg viewBox="0 0 32 32"><path d="m18 3-12 16h9l-2 10 13-18h-9l1-8Z" fill="currentColor" /></svg></span><span className="brand-name">PRODETECH<span>TECNOLOGÍA LÁSER · ECUADOR</span></span></a> }

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState(0)
  const closeMenu = () => setMenuOpen(false)
  const navItems = [['Soluciones', '#soluciones'], ['Equipos', '#equipos'], ['Aplicaciones', '#aplicaciones'], ['Nosotros', '#nosotros']]
  const faqs = [
    ['¿Qué máquina láser necesito para mi proyecto?', 'Depende del material, el tamaño de las piezas y el tipo de producción que tienes en mente. Cuéntanos qué quieres fabricar y te orientamos sobre la tecnología y configuración adecuadas.'],
    ['¿Ofrecen capacitación y soporte?', 'Sí. Te acompañamos con orientación para poner tu equipo en marcha, conocer el software y trabajar tus primeras aplicaciones.'],
    ['¿Puedo cotizar desde cualquier ciudad de Ecuador?', 'Claro. Escríbenos con la máquina que te interesa y tu ciudad para recibir información sobre disponibilidad, entrega y asesoría.'],
  ]

  return <>
    <div className="topline"><div className="wrap topline-inner"><span><span className="status-dot" /> Acompañamiento técnico desde Quito, Ecuador</span><a href={waLink('Hola Prodetech, deseo información sobre sus equipos.')}>Hablemos de tu proyecto <ArrowUpRight size={13} /></a></div></div>
    <header className="site-header"><div className="wrap nav-wrap"><Brand />
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Navegación principal">{navItems.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}</nav>
      <a className="button button-nav" href={waLink('Hola Prodetech, quiero asesoría para elegir una máquina láser.')}>Solicitar asesoría <ArrowUpRight size={15} /></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}>{menuOpen ? <X /> : <Menu />}</button>
    </div></header>

    <main>
      <section className="hero" id="inicio"><div className="hero-grid" />
        <div className="wrap hero-layout"><div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> TECNOLOGÍA LÁSER · ECUADOR</div>
          <h1>Haz que tus<br /><span>ideas tomen</span><br />forma.</h1>
          <p className="hero-lead">Equipos láser para crear, producir y crecer. Te ayudamos a encontrar la tecnología correcta y a ponerla a trabajar.</p>
          <div className="hero-actions"><a className="button" href={waLink('Hola Prodetech, quiero cotizar una máquina láser.')}>Encuentra tu equipo <ArrowRight size={16} /></a><a className="text-link" href="#soluciones">Explorar soluciones <ArrowDown size={15} /></a></div>
          <div className="hero-proof"><div className="proof-icon"><ShieldCheck size={17} /></div><div><strong>Más que una máquina</strong><span>Asesoría y acompañamiento técnico</span></div><span className="proof-divider"/><div className="proof-icon"><Crosshair size={17} /></div><div><strong>La tecnología correcta</strong><span>Para tu material y tu proyecto</span></div></div>
        </div>
        <div className="hero-visual"><div className="visual-index"><span>01 / TECNOLOGÍA</span><span>FIG. 001</span></div><div className="visual-beam"/><MachineArt kind="co2" className="hero-machine"/><div className="visual-callout callout-top"><span className="callout-dot"/><span>CORTE Y GRABADO<br /><strong>CON PRECISIÓN</strong></span></div><div className="visual-callout callout-bottom"><span className="callout-number">01</span><span>CONTROL EN CADA<br />DETALLE</span></div><div className="visual-vertical">EQUIPOS · ASESORÍA · SOPORTE</div><div className="visual-footer"><span>TECNOLOGÍA PARA PRODUCIR</span><span>PRODETECH / EC</span></div></div>
      </div>
      <div className="wrap hero-bottom"><span>TECNOLOGÍA QUE SE CONVIERTE EN OPORTUNIDAD</span><a href="#soluciones">DESLIZA PARA EXPLORAR <ArrowDown size={13}/></a></div>
      </section>

      <section className="trust-strip"><div className="wrap trust-grid"><div className="trust-intro">SOLUCIONES PARA CADA<br />ETAPA DE PRODUCCIÓN</div><div><PenTool/><span>Emprendimientos<br />creativos</span></div><div><Factory/><span>Talleres y<br />fabricación</span></div><div><Sparkles/><span>Personalización<br />de productos</span></div><div><Crosshair/><span>Marcado<br />industrial</span></div></div></section>

      <section className="section solutions-section" id="soluciones"><div className="wrap"><div className="section-head"><div><div className="eyebrow"><span className="eyebrow-line"/> NUESTRAS SOLUCIONES</div><h2>Tres tecnologías.<br /><span>Más posibilidades.</span></h2></div><p>Conoce las opciones y encuentra la que conecta con tus materiales, tus ideas y tus metas de producción.</p></div>
        <div className="category-grid">{categories.map(item => <a className="category-card" href="#equipos" key={item.number}><div className="category-top"><span>{item.number} / {item.mark}</span><span className="round-arrow"><ArrowUpRight size={17}/></span></div><MachineArt kind={item.kind}/><div className="category-copy"><span className="category-subtitle">{item.subtitle}</span><h3>{item.title}</h3><p>{item.detail}</p><span className="category-link">Explorar equipos <ArrowRight size={14}/></span></div></a>)}</div>
      </div></section>

      <section className="featured-section" id="equipos"><div className="wrap"><div className="featured-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> EQUIPOS DESTACADOS</div><h2>Una máquina para<br /><span>lo que imaginas.</span></h2></div><p>Te asesoramos para elegir el equipo que mejor se adapta a tu trabajo, tu espacio y tu presupuesto.</p></div>
        <div className="product-grid">{products.map((product, i) => <article className="product-card" key={product.name}><div className="product-visual"><span className="product-badge">{product.badge}</span><span className="product-index">P / 0{i + 1}</span><MachineArt kind={product.kind}/></div><div className="product-info"><span className="product-category">{product.category}</span><h3>{product.name}</h3><p>{product.note}</p><a href={waLink(`Hola Prodetech, me interesa ${product.name}. ¿Me pueden compartir información?`)}>Consultar equipo <ArrowRight size={15}/></a></div></article>)}</div>
        <div className="catalog-cta"><span>¿Buscas otro formato o configuración?</span><a className="text-link" href={waLink('Hola Prodetech, busco una configuración diferente. ¿Me pueden asesorar?')}>Conversemos sobre lo que necesitas <ArrowUpRight size={15}/></a></div>
      </div></section>

      <section className="application-section" id="aplicaciones"><div className="wrap application-layout"><div className="application-copy"><div className="eyebrow"><span className="eyebrow-line"/> DE LA IDEA A LA PRODUCCIÓN</div><h2>Una herramienta.<br /><span>Un mundo por crear.</span></h2><p>Con la tecnología láser puedes convertir diseños en productos, personalizar objetos y abrir nuevas posibilidades de negocio.</p><a className="button button-outline" href={waLink('Hola Prodetech, quiero conversar sobre aplicaciones de máquinas láser.')}>Cuéntanos tu idea <ArrowRight size={16}/></a></div>
        <div className="application-list"><div className="application-item"><span className="app-number">01</span><div><h3>Madera y MDF</h3><p>Señalética, decoración, souvenirs y piezas a medida.</p></div><ArrowUpRight/></div><div className="application-item"><span className="app-number">02</span><div><h3>Acrílico y plásticos compatibles</h3><p>Letreros, exhibidores, empaques y proyectos creativos.</p></div><ArrowUpRight/></div><div className="application-item"><span className="app-number">03</span><div><h3>Metal y herramientas</h3><p>Marcado de piezas, placas, accesorios y productos.</p></div><ArrowUpRight/></div><div className="application-item"><span className="app-number">04</span><div><h3>Personalización</h3><p>Regalos, artículos promocionales y productos únicos.</p></div><ArrowUpRight/></div></div>
      </div></section>

      <section className="support-section" id="nosotros"><div className="wrap support-layout"><div className="support-visual"><div className="support-ring ring-one"/><div className="support-ring ring-two"/><div className="support-crosshair">+</div><div className="support-quote">“</div><div className="support-mark"><span className="brand-mark"><svg viewBox="0 0 32 32"><path d="m18 3-12 16h9l-2 10 13-18h-9l1-8Z" fill="currentColor" /></svg></span><span>TECNOLOGÍA QUE<br />IMPULSA IDEAS</span></div><span className="support-coord">0° 11' 46.5" S<br/>78° 29' 21.2" W</span></div>
        <div className="support-copy"><div className="eyebrow"><span className="eyebrow-line"/> EL RESPALDO DE PRODETECH</div><h2>El equipo importa.<br /><span>El respaldo también.</span></h2><p>Comprar una máquina es el inicio. Te acompañamos para que puedas entenderla, configurarla y llevar tus ideas a la práctica con confianza.</p><div className="benefit-list"><div><span><Check size={14}/></span><div><strong>Asesoría antes de elegir</strong><small>Revisamos contigo materiales, aplicaciones y objetivos.</small></div></div><div><span><Check size={14}/></span><div><strong>Orientación para comenzar</strong><small>Capacitación y guía para poner tu equipo en marcha.</small></div></div><div><span><Check size={14}/></span><div><strong>Soporte técnico cercano</strong><small>Respuestas de personas que conocen estas tecnologías.</small></div></div></div><a className="text-link" href={waLink('Hola Prodetech, quisiera conocer más sobre la asesoría y soporte.')}>Conoce cómo podemos ayudarte <ArrowRight size={15}/></a></div>
      </div></section>

      <section className="faq-section"><div className="wrap faq-layout"><div><div className="eyebrow"><span className="eyebrow-line"/> PREGUNTAS FRECUENTES</div><h2>Hablemos con<br /><span>claridad.</span></h2><p>¿Tienes una pregunta? Estamos para orientarte.</p><a href={waLink('Hola Prodetech, tengo una consulta sobre sus máquinas láser.')} className="text-link">Haznos tu consulta <ArrowUpRight size={15}/></a></div><div className="faq-list">{faqs.map(([question, answer], i) => <div className={`faq-item ${activeFaq === i ? 'active' : ''}`} key={question}><button onClick={() => setActiveFaq(activeFaq === i ? -1 : i)} aria-expanded={activeFaq === i}><span><b>0{i + 1}</b>{question}</span><ChevronDown size={18}/></button>{activeFaq === i && <p>{answer}</p>}</div>)}</div></div></section>

      <section className="closing-cta"><div className="wrap closing-inner"><div className="closing-glow"/><div className="eyebrow"><span className="eyebrow-line"/> TU PRÓXIMO PROYECTO EMPIEZA AQUÍ</div><h2>¿Qué quieres<br /><span>crear hoy?</span></h2><p>Conversemos sobre tu idea. Te ayudamos a encontrar el equipo y el camino para hacerla realidad.</p><a className="button" href={waLink('Hola Prodetech, quiero conversar sobre mi próximo proyecto.')}>Hablemos de tu proyecto <ArrowRight size={16}/></a><div className="closing-side">PRODETECH<br/>QUITO · ECUADOR</div></div></section>
    </main>

    <footer className="site-footer"><div className="wrap footer-main"><div><Brand/><p>Tecnología láser para crear,<br/>producir y crecer.</p></div><div className="footer-col"><strong>EXPLORA</strong><a href="#soluciones">Soluciones</a><a href="#equipos">Equipos</a><a href="#aplicaciones">Aplicaciones</a></div><div className="footer-col"><strong>ACOMPAÑAMIENTO</strong><a href="#nosotros">Asesoría</a><a href="#nosotros">Capacitación</a><a href="#nosotros">Soporte técnico</a></div><div className="footer-contact"><strong>¿TIENES UN PROYECTO?</strong><a href={waLink('Hola Prodetech, quiero información sobre sus equipos.')}>Conversemos <ArrowUpRight size={14}/></a><span>Quito, Ecuador</span></div></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Prodetech · Tecnología láser, Ecuador.</span><span>HECHO PARA CREAR.</span></div></footer>
    <a className="floating-contact" href={waLink('Hola Prodetech, quisiera asesoría sobre una máquina láser.')} aria-label="Solicitar asesoría por WhatsApp"><Headphones size={19}/><span>Hablemos</span></a>
  </>
}

export default App
