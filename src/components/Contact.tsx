import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import data from '../content.json'

import { FormField } from '../types' 
  
export const Contact: React.FC = () => {
    return (
        <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-2xl sm:text-3xl font-semibold text-gold-300 text-center mb-16">
                {data.contact.heading}
            </motion.h2>
            
            {/* Clinic Showcase */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }}
                className="mb-16 relative overflow-hidden rounded-3xl"
            >
                <img 
                    src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                    alt="Mythili Manthra clinic interior"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gold-300 mb-2">Visit Our Luxurious Clinic</h3>
                    <p className="text-neutral-300 max-w-2xl">Experience our beautiful, modern facility designed for your comfort and relaxation.</p>
                </div>
            </motion.div>

            <div className="grid gap-12 lg:grid-cols-2">
                {/* Contact Info & Map */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div className="rounded-2xl bg-neutral-900/60 p-8 gold-ring">
                        <h3 className="text-xl font-semibold text-gold-300 mb-6">Get In Touch</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gold-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-neutral-100 font-medium">Address</p>
                                    <p className="text-neutral-300">{data.contact.address}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gold-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-neutral-100 font-medium">Phone</p>
                                    <p className="text-neutral-300">{data.contact.phone}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gold-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-neutral-100 font-medium">Email</p>
                                    <p className="text-neutral-300">{data.contact.email}</p>
                                </div>
                            </div>
                        </div>
                        <a className="inline-flex items-center mt-6 text-gold-400 hover:text-gold-300 transition-colors" href={data.contact.mapLink} target="_blank" rel="noreferrer">
                            <span>View on Google Maps</span>
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                    
                    <div className="aspect-video w-full overflow-hidden rounded-2xl gold-ring bg-neutral-950">
                        <iframe title="Map" className="h-full w-full" src={`https://www.google.com/maps?q=${encodeURIComponent(data.contact.address)}&output=embed`} loading="lazy" />
                    </div>
                </motion.div>

                {/* Appointment Form */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.8 }}
                >
                    <Form fields={data.contact.appointmentForm.fields as FormField[]} services={data.services.map(s => s.name)} />
                </motion.div>
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