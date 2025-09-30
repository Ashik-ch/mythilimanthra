import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import bannerImg from '../assets/images/banner.jpg';

import data from '../content.json';

import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';
import img6 from '../assets/images/img6.jpg';
import img7 from '../assets/images/img7.jpg';
import img8 from '../assets/images/img8.jpg';
import img9 from '../assets/images/img9.jpg';
import img10 from '../assets/images/img10.jpg';
import img11 from '../assets/images/img11.jpg';
import img12 from '../assets/images/img12.jpg';
import img13 from '../assets/images/img13.jpg';
import img14 from '../assets/images/img14.jpg';

export const Service: React.FC = () => {
    const [expandedService, setExpandedService] = useState<number | null>(null);

    const serviceImages = [
        img11,  
        img12,
        img2, // Acne Treatment
        img13, // Anti-Aging
        img14,
        img4, // Anti-Aging
        img5, // Chemical Peels
        img6, // Microneedling
        img1, // Laser Hair Removal
        img8,
        img9,
        img10,
    ];




    return (
        <section id="services" className="mx-auto max-w-7xl px-6 py-20">
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-2xl sm:text-3xl font-semibold text-gold-300 text-center mb-16">
                Our Premium Services
            </motion.h2>

            {/* Hero Service Image */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-16 relative overflow-hidden rounded-3xl"
            >
                <img src={bannerImg}
                    alt="Premium beauty treatments at Mythili Manthra"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gold-300 mb-2">Transform Your Beauty Journey</h3>
                    <p className="text-neutral-300 max-w-2xl">Experience the pinnacle of skincare and hair restoration with our state-of-the-art treatments and personalized care approach.</p>
                </div>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {data.services.map((svc, idx) => (
                    <motion.div
                        key={svc.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.6 }}
                        className="group"
                    >
                        <div
                            onClick={() => setExpandedService(expandedService === idx ? null : idx)}
                            className="cursor-pointer rounded-2xl bg-neutral-900/60 gold-ring hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={serviceImages[idx]}
                                    alt={`${svc.name} treatment`}
                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                                <div className="absolute top-4 right-4 w-12 h-12 bg-gold-600/90 rounded-full flex items-center justify-center">
                                    <div className="w-6 h-6 bg-gold-300 rounded-full" />
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-neutral-100 mb-3">{svc.name}</h3>
                                <p className="text-neutral-300 mb-4">{svc.description}</p>

                                <AnimatePresence initial={false}>
                                    {expandedService === idx && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="border-t border-neutral-700 pt-4"
                                        >
                                            <p className="text-neutral-300/90 text-sm mb-4">
                                                Learn more about our {svc.name.toLowerCase()}—tailored plans using advanced technology for your unique goals.
                                            </p>
                                            <div className="flex items-center text-gold-400 text-sm font-medium">
                                                <span>Book Consultation</span>
                                                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {expandedService !== idx && (
                                    <div className="flex items-center text-gold-400 text-sm font-medium opacity-70">
                                        <span>Click to learn more</span>
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
