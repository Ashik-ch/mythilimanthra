import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import data from '../content.json'

export const About: React.FC = () => {
    return (
        <section id="about" className="mx-auto max-w-7xl px-6 py-20">
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl sm:text-3xl font-semibold text-gold-300 text-center mb-16">
                {data.about.heading}
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.6 }} className="text-neutral-300 leading-relaxed gold-ring rounded-xl bg-neutral-900/50 p-8 text-lg">
                        {data.about.content}
                    </motion.p>

                    <div className="grid grid-cols-2 gap-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-center p-4 gold-ring rounded-xl bg-neutral-900/30"
                        >
                            <div className="text-3xl font-bold text-gold-400">2024</div>
                            <div className="text-sm text-neutral-400">Established</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-center p-4 gold-ring rounded-xl bg-neutral-900/30"
                        >
                            <div className="text-3xl font-bold text-gold-400">100%</div>
                            <div className="text-sm text-neutral-400">Personalized</div>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="relative"
                >
                    <img
                        src="https://media.istockphoto.com/id/803921518/photo/man-with-a-clay-mask.jpg?s=1024x1024&w=is&k=20&c=h749RLQ0DqeqN7CGwXa5TqhByPANnPWCLUUbvhC3Awc="
                        alt="Modern beauty clinic interior with professional equipment"
                        className="rounded-2xl shadow-2xl gold-ring w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 to-transparent rounded-2xl" />
                    <div className="absolute -top-6 -left-6 w-20 h-20 bg-gold-500/30 rounded-full blur-lg" />
                    <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-gold-400/20 rounded-full blur-xl" />
                </motion.div>
            </div>
        </section>
    )
}
