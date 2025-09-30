import React, { useMemo } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { ISourceOptions } from 'tsparticles-engine'
import { motion, AnimatePresence } from 'framer-motion'

import data from '../content.json'

export const Hero = () => {
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

    return (

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
    )
}
