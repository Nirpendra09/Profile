import styled from "styled-components";
import { motion } from 'framer-motion'

export const About = styled(motion.div)`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5rem 8rem;
color: white;
@media(max-width: 768px){
    justify-content: center;
    align-items:center;
    width:100%;
}
.title{
@media(max-width: 768px){
    font-size: 0.5rem;
    width: 50rem;
}
}
`;

export const Description = styled(motion.div)`
    flex: 1;
    padding-right: 4rem;
    h2{
        font-weight: lighter;
    }
    @media(max-width: 768px){
        width: 100%;

    }
`;

export const Image = styled.div`
    flex:1;
    overflow: hidden;
    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
    @media(max-width: 768px){
        display: none;
    }
`;

export const Hide = styled.div`
    overflow: hidden;
`;