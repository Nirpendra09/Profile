import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useScroll } from "../components/useScroll.jsx";
import ScrollTop from "../components/ScrollTop";
import {
    sliderContainer,
    slider,
    pageAnimation,
    fade,
    photoAnim,
    lineAnim,
} from "../animation";
import { Link } from 'react-router-dom';
const Projects = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    return (
        <Project
            // style={ { background: "#fff" } }
            exit="exit"
            varinats={ pageAnimation }
            initial="hidden"
            animate="show"
        >
            <h2>Projects</h2>
            <Card ref={ element } variants={ fade } animate={ controls } initial="hidden">
                <motion.h2 varinats={ fade } >GitHub Profile Fetcher</motion.h2>
                <motion.div variants={ lineAnim } className="line"></motion.div>
                <a href="https://nirpendra09.github.io/GitProfileFetch.github.io/">
                    <Hide>
                        <motion.img variants={ photoAnim } src='https://github.com/Nirpendra09/GitProfileFetch.github.io/raw/master/img/GitFetcher.JPG' alt="athlete" />
                    </Hide>
                </a>
            </Card>
            <ScrollTop />
        </Project>
    )
}

const Project = styled(motion.div)`
    min-height : 100vh;
    overflow: hidden;
    padding: 5rem;
    @media (max-width: 768px) {
        display: grid;
        padding: 1rem;
        width: 100%;
        h2{
            font-size: 1.5rem;
        }
  }
    h2{
        color: white;
        padding: 1rem 0rem
    }
`;

const Card = styled(motion.div)`
    padding: 10rem;
    .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
    color: white;
  }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
    @media (max-width: 768px){
        padding: 2rem;
    }
`;
const Hide = styled.div`
  overflow: hidden;
`;
export default Projects
