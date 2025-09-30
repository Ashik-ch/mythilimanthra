import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import data from '../content.json'

export const About: React.FC = () => {
    return (
        <section id="about" className="mx-auto max-w-7xl px-6 py-20">
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl sm:text-3xl font-semibold text-gold-300">
                {data.about.heading}
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-4 text-neutral-300 leading-relaxed gold-ring rounded-xl bg-neutral-900/50 p-6">
                {data.about.content}
            </motion.p>
        </section>
    )
}
