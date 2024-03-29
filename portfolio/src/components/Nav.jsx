import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion';

const Nav = () => {
    const { pathname } = useLocation();
    return (
        <StyledNav>
            <h1><Link id="logo" to='/Portfolio'>MyPortfolio</Link></h1>
            <ul>
                <li>
                    <Link to='/Portfolio'>1.About </Link>
                    <Line
                        transition={ { duration: 0.75 } }
                        initial={ { width: "0%" } }
                        animate={ { width: pathname === "/Portfolio" ? "50%" : "0" } }
                    />
                </li>
                <li>
                    <Link to='/projects'>2.Projects</Link>
                    <Line
                        transition={ { duration: 0.75 } }
                        initial={ { width: "0%" } }
                        animate={ { width: pathname === "/projects" ? "50%" : "0" } }
                    />
                </li>
                <li>
                    <Link to='/contact'>3.Contact</Link>
                    <Line
                        transition={ { duration: 0.75 } }
                        initial={ { width: "0%" } }
                        animate={ { width: pathname === "/contact" ? "50%" : "0" } }
                    />
                </li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
min-height: 10vh;
display: flex;
margin: auto;
justify-content:space-between;
align-items: center;
padding: 1rem 10rem;
background: #282828;
a{
    color: white;
    text-decoration: none;
}
ul{
    display: flex;
    list-style: none;
}
#logo{
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
}
li{
    padding-left: 10rem;
    position: relative;
}
 @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: none;
    //   margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;
const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1330px) {
    left: 0%;
  }
`;

export default Nav;