import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import data from '../content.json'
import img6 from '../assets/images/img6.jpg';
import img8 from '../assets/images/img8.jpg';



export const Expertise: React.FC = () => {
    const steps = [
        {
            title: "Consultation",
            description: "Thorough assessment of your skin and hair concerns",
            image: img6,
        },
        {
            title: "Diagnosis",
            description: "Advanced analysis using cutting-edge technology",
            image: "https://eminenceorganics.com/sites/default/files/content/blog/product-picks/eminence-organic-skin-care-men-at-the-spa.jpg"
        },
        {
            title: "Personalized Plan",
            description: "Customized treatment strategy for optimal results",
            image: img8,
        },
        {
            title: "Treatment",
            description: "Professional care with state-of-the-art equipment",
            image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <section id="expertise" className="mx-auto max-w-7xl px-6 py-20">
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-2xl sm:text-3xl font-semibold text-gold-300 text-center mb-8">
                {data.expertise.heading}
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} className="mt-4 text-neutral-300 leading-relaxed text-center max-w-4xl mx-auto text-lg">
                {data.expertise.content}
            </motion.p>

            {/* Technology Showcase */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-16 relative overflow-hidden rounded-3xl"
            >
                <img
                    src="https://static.vecteezy.com/system/resources/previews/062/443/968/non_2x/side-view-of-bearded-man-getting-face-treatment-at-modern-spa-salon-female-attendant-applying-nourishing-face-mask-on-sleeping-middle-aged-man-face-male-cosmetology-and-face-care-concept-photo.jpg"
                    alt="Advanced beauty technology and equipment"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gold-300 mb-2">State-of-the-Art Technology</h3>
                    <p className="text-neutral-300 max-w-2xl">Our clinic features the latest in beauty technology, ensuring safe, effective, and comfortable treatments for all our clients.</p>
                </div>
            </motion.div>

            {/* Process Steps */}
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {steps.map((step, i) => (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        className="group"
                    >
                        <div className="relative overflow-hidden rounded-2xl bg-neutral-900/60 gold-ring hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                            <div className="relative">
                                <img
                                    src={step.image}
                                    alt={`${step.title} process`}
                                    className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                                <div className="absolute top-3 left-3 w-8 h-8 bg-gold-600 rounded-full flex items-center justify-center text-sm font-bold text-neutral-100">
                                    {i + 1}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-neutral-100 mb-2">{step.title}</h3>
                                <p className="text-sm text-neutral-300">{step.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Equipment Gallery */}
            {/* <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-16"
            >
                <h3 className="text-xl font-semibold text-gold-300 text-center mb-8">Our Advanced Equipment</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        "https://eminenceorganics.com/sites/default/files/content/blog/product-picks/eminence-organic-skin-care-men-at-the-spa.jpg",
                        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                        "https://eminenceorganics.com/sites/default/files/content/blog/product-picks/eminence-organic-skin-care-men-at-the-spa.jpg",
                        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                    ].map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="aspect-square overflow-hidden rounded-xl gold-ring hover:shadow-glow transition-all duration-300"
                        >
                            <img
                                src={img}
                                alt={`Advanced beauty equipment ${i + 1}`}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div> */}
        </section>
    )
}
