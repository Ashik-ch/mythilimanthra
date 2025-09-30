import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import data from '../content.json'

export const Service: React.FC = () => {
    const [expandedService, setExpandedService] = useState<number | null>(null);

    return (
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
    )
}
