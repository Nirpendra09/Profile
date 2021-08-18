import styled from "styled-components";
import { motion } from 'framer-motion'

export const About = styled(motion.div)`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-evenly;
padding: 5rem 6rem;
color: white;
}
    @media screen && (max-width: 762x) {
        justify-content: center;
      }

      p{
          font-size: 1.3rem;
      }
`;

export const Description = styled(motion.div)`
    flex: 1;
    padding-right: 4rem;
    h2{
        font-weight: lighter;
    }
 @media (max-width: 1200px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
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
    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const Hide = styled.div`
    overflow: hidden;
`;