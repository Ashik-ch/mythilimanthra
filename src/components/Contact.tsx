import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import data from '../content.json'

export const Contact: React.FC = () => {
    return (
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