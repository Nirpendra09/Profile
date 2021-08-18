import React from 'react'
import styled from 'styled-components'
import { About, Description, Image } from '../styles'
import Dev2 from '../img/Dev2.svg'
import Developer from '../img/Developer.svg'
import HTML from '../img/html.svg'
import Atom from '../img/atom.svg'
import Java from '../img/java.svg'
import CSS from '../img/css.svg'
import Git from '../img/Git.png'
import GitHub from '../img/GitHub.png'
import Nodejs from '../img/nodejs.svg'
import MongoDb from '../img/mongodb-icon.svg'

import { photoAnim, titleAnim, fade,scrollReveal } from '../animation'
import { motion } from 'framer-motion'
import { useScroll } from '../components/useScroll'

const Skills = () => {
    const [element, controls] = useScroll();
    return (
        <Services  variants={ fade } animate={ controls } initial="hidden" ref={ element }>
            <Description>
                <motion.h2 variants={ titleAnim }>Technical <span>Skills</span></motion.h2>
                <Cards variants={scrollReveal} >
                    <Card>
                        <div className="icon" >
                            <img src={ HTML } alt="" />
                            <h3>HTML</h3>
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={ CSS } alt="" />
                            <h3>CSS</h3>
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={ Java } alt="" />
                            <h3>Java</h3>
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={ 'https://img.icons8.com/color/96/000000/javascript--v2.png' } alt="" />
                            <h3>JavaScript</h3>
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={ Atom } alt="" />
                            <h3>ReactJS</h3>
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={ Atom } alt="" />
                            <h3>React Native</h3>
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={ 'https://img.icons8.com/color/48/000000/bootstrap.png' } alt="" />
                            <h3>BootStrap</h3>
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={ Git } alt="" />
                            <h3>Git</h3>
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={ GitHub } alt="" />
                            <h3>GitHub</h3>
                        </div>
                    </Card>
                </Cards>
            </Description>
            <ImageS variants={ photoAnim }>
                <img src={ Dev2 } alt="camera" />
            </ImageS>
        </Services>
    )
}

const Services = styled(About)`
h2{
    padding-bottom: 5rem;
}
p{
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
}
`;
const ImageS = styled(motion.div)`
width: 20rem;
img{
    width: 100%;
    padding: 1rem;
}
@media screen and (max-width: 768px){
        display: none;
    }

    @media screen and (max-width: 900px){
        img{
            display: none;
        }
    }
`;

const Cards = styled(motion.div)`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
border: 1px solid white;
border-radius: 1rem;
padding: 2rem;
box-shadow: 
       inset 0 -3em 3em rgba(0,0,0,0.1), 
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);

@media screen and (max-width: 768px){
         display: block;
          border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  animation-name: example;
  animation-duration: 0.25s;
  border-left: 8px solid #23d997;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

&:hover{
    border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  animation-name: example;
  animation-duration: 0.25s;
  border-left: 8px solid #23d997;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

 
`;

const Card = styled(motion.div)`
flex-basis: 20rem;
.icon{
    display: flex;
    align-items: center;
    justify-content: center;
    h3{
        margin-left: 1rem;
        background: white;
        color:black;
        padding: 1rem;
            border-radius: 5px;
    }
    img{
        width: 5rem;
        padding: 0.5rem
    }

}
&:hover {
    background: #343434;
  }
       
`;

export default Skills
