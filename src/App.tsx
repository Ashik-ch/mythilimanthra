import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Container, ISourceOptions } from 'tsparticles-engine'
import data from './content.json'
import { Footer } from './components/Footer';
import { Hero } from './components/Hero'
import { About } from './components/About';
import { Contact } from 'lucide-react';
import { Service } from './components/Service';
import { Expertise } from './components/Expertise';


type FormField = {
    name: string
    label: string
    type: string
    required?: boolean
    options?: string[]
}

export default function App() {


    return (
        <div className="min-h-screen w-full">

            <Hero />        {/* Hero */}

            <About />       {/* About */}

            <Service />      {/* Services */}

            <Expertise />   {/* Expertise */}

            <Contact />     {/* Contact */}

            <Footer />      {/* Footer */}
        </div>
    )
}


