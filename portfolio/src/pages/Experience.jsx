import React from "react";
import styled from "styled-components";
import { About, Description, Image } from "../styles";
import exp from "../img/Exp.svg";
import { photoAnim, titleAnim, fade } from "../animation";
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";

const Experience = () => {
  const [element, controls] = useScroll();
  return (
    <Exp variants={fade} animate={controls} initial="hidden" ref={element}>
      <Description>
        <motion.h2 variants={titleAnim}>
          <span>Experience</span>
        </motion.h2>
        <Card>
          <motion.h3 variants={fade}>
            Software Developer Intern{" "}
            <a href="https://www.spur.fit/">@spur.fit</a>
          </motion.h3>
          (Apr 2021 - Aug 2021)
          <ul>
            <li>Worked With the front-end team on React-Native.</li>
            <li>
              Created the following Screens replicating the designs provided.
              <ul>
                <li>Home Screen</li>
                <li>Challenge Screen</li>
                <li>Workouts Screen</li>
                <li>Workouts Details</li>
                <li>Profile Screen</li>
                <li>Profile Settings Screen</li>
                <li>Workouts and Challenge Report Screen</li>
                <li>Logout Screen</li>
                <li>FAQs Screen</li>
                <li>ContactUs Screen</li>
              </ul>
            </li>

            <li>
              Added some features like Sensing verticle angle of the phone,
              Editing profile picture,Editing profile details, etc.
            </li>
          </ul>
        </Card>
      </Description>
      <ImageS variants={photoAnim}>
        <img src={exp} alt="Image" />
      </ImageS>
    </Exp>
  );
};

const Exp = styled(About)`
  h2 {
    padding-bottom: 2rem;
  }
`;
const ImageS = styled(motion.div)`
  width: 20rem;
  img {
    width: 100%;
    padding: 1rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 900px) {
    img {
      display: none;
    }
  }
`;

const Card = styled(motion.div)`
  flex-basis: 20rem;
  h3 {
    font-size: 24px;
    font-weight: lighter;
    padding-bottom: 1rem;
    margin-bottom: 18px;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  ul {
    margin-left: 36px;

    li {
      line-height: 24px;
      font-weight: lighter;
      font-size: 16px;
      ul {
        li {
          font-size: 12px;
        }
      }
    }
  }
`;

export default Experience;
