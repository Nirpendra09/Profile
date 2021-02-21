import React from 'react'
import styled from 'styled-components'
import { About, Description, Image, Hide } from '../styles'
import GlobalStyle from './GlobalStyle'
import Iam from '../img/Iam.svg'
//Framer motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "./../animation";
import Wave from "./Wave";
import ScrollTop from './ScrollTop'
import { useHistory } from "react-router-dom";

function AboutSection() {
    const history = useHistory();

    const handleRoute = () => {
        history.push("/contact");
    }

    return (
        <About className="about">
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={ titleAnim }>Hello 👋</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={ titleAnim }>I am <span>Nirpendra Chaudhary</span></motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={ fade }>
                    And I am a Software Developer
                 </motion.p>
                <motion.button onClick={ handleRoute } variants={ fade }>Contact Me</motion.button>
            </Description>
            <Image>
                <motion.img variants={ photoAnim } src={ Iam } alt="guy with a camera" />
            </Image>
            <Wave />
            <ScrollTop />
        </About>
    )
}


export default AboutSection
