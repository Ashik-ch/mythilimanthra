import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import data from '../content.json'

export const Expertise: React.FC = () => {
    return (

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
    )
}
