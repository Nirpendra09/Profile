import React from 'react'
import styled from 'styled-components'
import { About, Description, Image } from '../styles'
import Dev2 from '../img/Dev2.svg'
import Developer from '../img/Developer.svg'
import HTML from '../img/html.svg'
import Atom from '../img/atom.svg'
import Java from '../img/java.svg'
import CSS from '../img/css.svg'

const Skills = () => {
    return (
        <Services>
            <Description>
                <h2>Technical <span>Skills</span></h2>
                <Cards>
                    <Card>
                        <div className="icon">
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
                            <img src={ Atom } alt="" />
                            <h3>ReactJS</h3>
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={ Java } alt="" />
                            <h3>Java</h3>
                        </div>
                    </Card>
                </Cards>
            </Description>
            <ImageS>
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
const ImageS = styled.div`
width: 20rem;
img{
    width: 100%;
}
`;

const Cards = styled.div`
display: flex;
flex-wrap: wrap;
`;

const Card = styled.div`
flex-basis: 20rem;
.icon{
    display: flex;
    align-items: center;
    h3{
        margin-left: 1rem;
        background: white;
        color:black;
        padding: 1rem;
            border-radius: 5px;
    }
    img{
        width: 5rem;
        padding: 1rem
    }
}
`;

export default Skills
