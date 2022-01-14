import React, { CSSProperties } from 'react';
import { Stack } from 'react-bootstrap';
import skills from '../config/skillsData';

const heading1Style : CSSProperties = {
    marginTop: '10vh',
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 60,
  }
  
  const contentStyle: CSSProperties = {
      width: '100%',
      height: '100%',
  }

  const subContentStyles: CSSProperties = {
    width: '85%',
    height: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '15vh',
    marginBottom: '15vh',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
}

const itemStyles : CSSProperties = {
    height: 'auto',
    width: 220,
    marginLeft: 'auto',
    marginRight: 'auto',
}

const imgStyles : CSSProperties = {
    width: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
}

const Skills : React.FC = () =>
{
    return(
        <Stack>
            <p style={heading1Style}>Skills</p>
            <Stack style={contentStyle}>
                <Stack style={subContentStyles}>
                    {
                        skills.map((skill, index) => (
                            <Stack style={itemStyles} key={index}>
                                <img style={imgStyles} src={skill.img}/>
                                <p>{skill.description}</p>
                            </Stack>
                        ))
                    }
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Skills;