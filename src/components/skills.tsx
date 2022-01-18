import React, { CSSProperties } from 'react';
import { Stack } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import skills from '../data/skillsData';

const heading1Styles : CSSProperties = {
    marginTop: '10vh',
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 60,
  }

  const mobileHeading1Styles : CSSProperties = {
    marginTop: '10vh',
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
  }
  
  const contentStyle: CSSProperties = {
      width: '100%',
      height: '100%',
      position: 'relative'
  }

  const subContentStyles: CSSProperties = {
    width: '100%',
    height: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '15vh',
    marginBottom: '15vh',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    position: 'relative'

}

const itemStyles : CSSProperties = {
    height: '100%',
    width: 220,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative'
}

const mobileItemStyles : CSSProperties = {
    height: '100%',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    position: 'relative'

}

const imgStyles : CSSProperties = {
    width: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
}

const mobileSubContentStyles: CSSProperties = {
    width: '85%',
    height: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5vh',
    marginBottom: '15vh',
    display: 'grid',
    position: 'relative'
}

const mobileTextStyles : CSSProperties = {
    fontSize: '90%'
}

const textStyles : CSSProperties = {
    fontSize: '100%'
}

const Skills : React.FC = () =>
{

    const isTablet = useMediaQuery({ query: '(max-width: 1200px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })

    
    return(
        <Stack>
            <p style={isMobile ? mobileHeading1Styles : heading1Styles}>Skills</p>
            <Stack style={contentStyle}>
                <Stack style={   
                                isTablet? mobileSubContentStyles : 
                                subContentStyles}>
                    {
                        skills.map((skill, index) => (
                            <Stack style={isMobile? mobileItemStyles : itemStyles} key={index}>
                                <img style={imgStyles} src={skill.img}/>
                                <p style={isMobile? mobileTextStyles : textStyles}>{skill.description}</p>
                            </Stack>
                        ))
                    }
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Skills;