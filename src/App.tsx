import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Particles from 'react-tsparticles'
import type { Container, ISourceOptions } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'
import data from './content.json'
import { Footer } from './components/Footer';


type FormField = {
    name: string
    label: string
    type: string
    required?: boolean
    options?: string[]
}

export default function App() {
    const particlesOptions: ISourceOptions = useMemo(() => ({
        fullScreen: { enable: false },
        background: { color: 'transparent' },
        particles: {
            number: { value: 40 },
            color: { value: ['#F2C237', '#D4A42A', '#8F6817'] },
            opacity: { value: 0.35 },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 0.6 },
            links: { enable: true, color: '#D4A42A', opacity: 0.12 }
        }
    }), [])

    const [expandedService, setExpandedService] = useState<number | null>(null)

    return (
        <div className="min-h-screen w-full">
            {/* Hero */}
            <section id="home" className="relative overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <Particles
                        id="tsparticles"
                        options={particlesOptions}
                        init={async (engine) => { await loadFull(engine) }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/30 to-neutral-950" />
                </div>
                <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36 lg:py-44">
                    <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-700 drop-shadow">{data.hero.title}</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-4 max-w-2xl text-lg text-neutral-300">
                        {data.hero.tagline}
                    </motion.p>
                    <motion.a href={data.hero.ctaLink} whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(242,194,55,0.35)' }} whileTap={{ scale: 0.98 }} className="inline-flex mt-8 items-center rounded-full bg-gold-600/90 hover:bg-gold-600 text-neutral-50 px-6 py-3 font-medium transition-colors shadow-glow">
                        {data.hero.ctaText}
                    </motion.a>
                </div>
            </section>

            {/* About */}
            <section id="about" className="mx-auto max-w-7xl px-6 py-20">
                <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl sm:text-3xl font-semibold text-gold-300">
                    {data.about.heading}
                </motion.h2>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-4 text-neutral-300 leading-relaxed gold-ring rounded-xl bg-neutral-900/50 p-6">
                    {data.about.content}
                </motion.p>
            </section>

            {/* Services */}
            <section id="services" className="mx-auto max-w-7xl px-6 py-20">
                <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-2xl sm:text-3xl font-semibold text-gold-300">
                    Services
                </motion.h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {data.services.map((svc, idx) => (
                        <motion.button key={svc.name} onClick={() => setExpandedService(expandedService === idx ? null : idx)} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -4 }} transition={{ duration: 0.4 }} className="text-left rounded-2xl bg-neutral-900/60 p-6 gold-ring hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/50">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-lg font-medium text-neutral-100">{svc.name}</h3>
                                    <p className="mt-2 text-sm text-neutral-300">{svc.description}</p>
                                </div>
                                <div className="h-10 w-10 rounded-full bg-gold-700/20 flex items-center justify-center gold-ring" aria-hidden />
                            </div>
                            <AnimatePresence initial={false}>
                                {expandedService === idx && (
                                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} className="mt-4 text-neutral-300/90 text-sm">
                                        Learn more about our {svc.name.toLowerCase()}—tailored plans using advanced technology for your unique goals.
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    ))}
                </div>
            </section>

            {/* Expertise */}
            <section id="expertise" className="mx-auto max-w-7xl px-6 py-20">
                <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-2xl sm:text-3xl font-semibold text-gold-300">
                    {data.expertise.heading}
                </motion.h2>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} className="mt-4 text-neutral-300 leading-relaxed">
                    {data.expertise.content}
                </motion.p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {["Consultation", "Diagnosis", "Personalized Plan", "Treatment"].map((step, i) => (
                        <motion.div key={step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="rounded-xl bg-neutral-900/60 p-4 gold-ring">
                            <p className="text-sm text-neutral-300">{step}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
                <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-2xl sm:text-3xl font-semibold text-gold-300">
                    {data.contact.heading}
                </motion.h2>
                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                    <div className="rounded-xl bg-neutral-900/60 p-6 gold-ring">
                        <p className="text-neutral-300">{data.contact.address}</p>
                        <p className="text-neutral-300 mt-2">{data.contact.phone}</p>
                        <p className="text-neutral-300">{data.contact.email}</p>
                        <a className="text-gold-400 underline inline-block mt-3" href={data.contact.mapLink} target="_blank" rel="noreferrer">Open Map</a>
                        <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg gold-ring bg-neutral-950">
                            <iframe title="Map" className="h-full w-full" src={`https://www.google.com/maps?q=${encodeURIComponent(data.contact.address)}&output=embed`} loading="lazy" />
                        </div>
                    </div>
                    <Form fields={data.contact.appointmentForm.fields as FormField[]} services={data.services.map(s => s.name)} />
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}

function Form({ fields, services }: { fields: FormField[]; services: string[] }) {
    return (
        <form className="rounded-xl bg-neutral-900/60 p-6 gold-ring">
            <div className="grid gap-4 sm:grid-cols-2">
                {fields.map((f) => (
                    <div key={f.name} className={f.type === 'textarea' ? 'sm:col-span-2' : ''}>
                        <label htmlFor={f.name} className="block text-sm text-neutral-300 mb-1">{(f.label)}</label>
                        {f.type === 'select' ? (
                            <select id={f.name} required={f.required} className="w-full rounded-md bg-neutral-950/80 border border-neutral-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold-600">
                                <option value="">Select...</option>
                                {(f.options ?? services).map((o) => <option key={o} value={o}>{o}</option>)}
                            </select>
                        ) : f.type === 'textarea' ? (
                            <textarea id={f.name} required={f.required} rows={4} className="w-full rounded-md bg-neutral-950/80 border border-neutral-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold-600" />
                        ) : (
                            <input id={f.name} type={f.type} required={f.required} className="w-full rounded-md bg-neutral-950/80 border border-neutral-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold-600" />
                        )}
                    </div>
                ))}
            </div>
            <motion.button whileHover={{ scale: 1.02, boxShadow: '0 0 24px rgba(242,194,55,0.35)' }} whileTap={{ scale: 0.98 }} className="mt-6 inline-flex items-center rounded-md bg-gold-600/90 hover:bg-gold-600 px-5 py-2.5 font-medium">
                Submit
            </motion.button>
        </form>
    )
}


