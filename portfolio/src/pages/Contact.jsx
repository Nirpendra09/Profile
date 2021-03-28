import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "./../animation";
import styled from "styled-components";
import ScrollTop from "./../components/ScrollTop";
import LinkedIn from './../img/linkedin.svg'

const ContactUs = () => {
    return (
        <ContactStyle
            exit="exit"
            variants={ pageAnimation }
            initial="hidden"
            animate="show"
        >
            <Title>
                <Hide>
                    <motion.h2 variants={ titleAnim }>Get in touch.</motion.h2>
                </Hide>
            </Title>
            <div style={ { display: 'flex', alignItems: 'center', justifyContent: "center" } }>
                <Hide>
                    <Social variants={ titleAnim }>
                        {/* <Circle /> */ }
                        <div className='social-btn flex-center' id="linkedin">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg><span> <a href="https://www.linkedin.com/in/nirpendra-chaudhary-798b9b184/">nirpendrachaudhary</a></span>
                        </div>
                    </Social>
                </Hide>
                {/* <Hide>
                    <Social variants={ titleAnim }>
                        <Circle />
                        <h2> Send An Email</h2>
                    </Social>
                </Hide> */}
                <Hide>
                    <Social variants={ titleAnim }>
                        {/* <Circle /> */ }
                        <div className='social-btn flex-center' id="github">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg><span><a href="https://github.com/Nirpendra09">Nirpendra09</a></span>
                        </div>
                    </Social>
                </Hide>
            </div>
            <ScrollTop />
        </ContactStyle>
    );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  background-color: #ffffff;
    background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
  @media (max-width: 1330px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1330px) {
    margin-top: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
 
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  
  h2 {
    margin: 2rem;
    text-decoration: none;
  }
   img{
      width: 8vh;
  }
  a{
      text-decoration: none;
      color: #333;
  }
  .social-btn {
    cursor: pointer;
	height: 50px;
	width: 50px;
	font-family: 'Titillium Web', sans-serif;
	color: #333;
	border-radius: 10px;
	box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
	background: white;
	margin: 5px;
	transition: 1s;
}

.flex-center {
	display: flex;
	justify-content: center;
	align-items: center;
}
.social-btn span {
	width: 0px;
	overflow: hidden;
	transition: 1s;
	text-align: center;
}

.social-btn:hover {
	width: 200px;
	border-radius: 5px;
}

.social-btn:hover span {
	padding: 2px;
	width: max-content;
}

#linkedin svg {
	fill: #0e76a8;
}

#github {
	fill: #333;
}

`;
export default ContactUs;
