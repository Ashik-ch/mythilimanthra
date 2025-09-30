import React, { useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import data from '../content.json'

export const Hero = () => {
    
    return (

        <section id="home" className="relative overflow-hidden min-h-screen flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-neutral-950/60" />
                <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Luxury beauty clinic interior"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/30 to-neutral-950" />
            </div>

            <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36 lg:py-44 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
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
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="relative"
                    >
                        <img
                            src="https://barbernation.com.au/wp-content/uploads/2025/05/Skincare-Routine-for-Men.png"
                            alt="Beautiful woman receiving skincare treatment"
                            className="rounded-2xl shadow-2xl gold-ring w-full h-auto"
                        />
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-500/20 rounded-full blur-xl" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold-400/10 rounded-full blur-2xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
