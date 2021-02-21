import React from 'react'
import AboutSection from '../components/AboutSection'
import Skills from './Skills'
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "./../animation";

function AboutUs() {
    return (
        <motion.div
            exit="exit"
            variants={ pageAnimation }
            initial="hidden"
            animate="show">
            <AboutSection />
            <Skills />

        </motion.div>
    )
}

export default AboutUs
