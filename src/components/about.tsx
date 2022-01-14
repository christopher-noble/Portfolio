import React, { CSSProperties } from 'react';
import { Stack } from 'react-bootstrap';

const stackStyles : CSSProperties = {
    height: '100%',
    width: '100%',
}
const heading1Style : CSSProperties = {
    marginTop: '10vh',
    marginBottom: '10vh',
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 60,
  }

  const contentStyles: CSSProperties = {
      width: '100%',
      height: '100%',
    //   justifyContent: 'space-around',
  }

  const leftSubContentStyles: CSSProperties = {
      height: '100%',
      width: '10%',
      margin: 'auto',
      paddingLeft: '10%',
      paddingBottom: '5%',
  }

  const rightSubContentStyles: CSSProperties = {
    margin: 'auto',
    width: '2%',
    height: 'auto',
    paddingRight: '8%',
    paddingBottom: '5%',
  }

  const textStyles: CSSProperties = {
      width: '80%',
      height: 'auto',
      textAlign: 'start',
      margin: 'auto',  
}

  const imgStyles: CSSProperties = {
      width: '50%',
      margin: 'auto',
      height: 'auto',
      borderRadius: 3,
  }

const About : React.FC = () =>
{
    return(
        <Stack style={stackStyles}>
            <p style={heading1Style}>About Me</p>
            <Stack direction="horizontal" style={contentStyles}>
                <Stack style={leftSubContentStyles}>
                    <p style={textStyles}>
                    My journey through software development started 
                    at BCIT in 2019. Today, I’m working as a front-end 
                    developer at Blackpurl, while completing my BTech 
                    degree in Computer Systems. 
                    <br></br><br></br>
                    Since high school graduation, I’ve had the privilege 
                    to visit 17 amazing countries, work as a team leader 
                    in the hospitality industry, and complete a series 
                    of computer science credentials at the British Columbia 
                    Institute of Technology. 
                    <br></br><br></br>
                    My parents, who descend from Iran and Scotland, found 
                    their home in Vancouver just two years before I was 
                    born. I’ve lived here my entire 
                    life. My hobbies include anything outdoors, golfing 
                    in the summer, snowboarding in the winter, and jiu 
                    jitsu all year round.  
                    </p>

                </Stack>
                <Stack style={rightSubContentStyles}>
                    <img style={imgStyles}src="chrisPic.jpg" alt="Picture of Chris"/>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default About;