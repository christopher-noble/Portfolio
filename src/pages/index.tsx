import React, { CSSProperties } from 'react';
import "../styles/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header';
import Landing from '../components/landing';
import Skills from '../components/skills';
import Work from '../components/work';
import Footer from '../components/footer';
import About from '../components/about';
import { Stack } from 'react-bootstrap';
import scrollTo from 'gatsby-plugin-smoothscroll';

const headerStyles : CSSProperties = {
  width: '100%',
  height: '25vh',
}

const landingStyles : CSSProperties = {
  width: '100%',
  height: '75vh',
  textAlign: 'center',
}

const workStyles : CSSProperties = {
  width: '100%',
  height: '100%',
  marginBottom: '10%',
  textAlign: 'center',
}

const aboutStyles : CSSProperties = {
  width: '100%',
  height: '100%',
  textAlign: 'center',
  marginBottom: '10%',
}

const skillsStyles : CSSProperties = {
  width: '100%',
  height: '100%',
  marginBottom: '10%',
  textAlign: 'center',
}

const footerStyles : CSSProperties = {
  width: '100%',
  height: '35vh',
  textAlign: 'center',
  backgroundColor: 'black',
  position: 'relative',
}


const IndexPage: React.FC = () =>
{
  return(
    <div>
      <Stack id="home" style={headerStyles}>
        <Header/>
      </Stack>

      <Stack style={landingStyles}>
        <Landing/>
      </Stack>

      <Stack id="work" style={workStyles}>
        <Work/>
      </Stack>

      <Stack id="about" style={aboutStyles}>
        <About/>
      </Stack>

      <Stack id="skills" style={skillsStyles}>
        <Skills/>
      </Stack>

      <Stack style={footerStyles}>
        <Footer/>
      </Stack>
    </div>
      
  )
}

export default IndexPage;