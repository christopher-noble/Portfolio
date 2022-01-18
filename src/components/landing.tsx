import React, { CSSProperties } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import Connect from './connect';


const stackStyles : CSSProperties = {
    height: '100%',
    width: '100%',
    marginTop: '5%',
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'sticky',
  }

  const h1Style : CSSProperties = {
    fontSize: '80px'
  }

  const h2Style : CSSProperties = {
    fontSize: '22px',
    display: 'inline-block',
  }

  const h3Style : CSSProperties = {
    fontSize: '18px',
    display: 'inline-block',
    
  }

  const tabletH1Style: CSSProperties ={
    fontSize: 40
  }

  const tabletH2Style: CSSProperties ={
    fontSize: 11,
    display: 'inline-block',

  }

  const tabletH3Style: CSSProperties = {
    fontSize: 9,
    display: 'inline-block',
  }

  const mobileH1Style: CSSProperties = {
    fontSize: 25,
    paddingLeft: 15,
    paddingRight: 15,
  }
  
const Landing: React.FC = () =>
{
  const isTablet = useMediaQuery({ query: '(max-width: 800px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 400px)' })

  
    return(
        <div>
          
            
            <Stack style={stackStyles}>
              {
                isTablet? 

                <span>
                <p style={tabletH3Style}>Hi! I'm Chris.&nbsp;A&nbsp;</p>
                <p style={tabletH2Style}>software developer&nbsp;</p>
                {
                  !isMobile? 
                  //tablet version
                  <div>
                  <p style={tabletH1Style}>doing one thing at a time.</p>
                  </div>
                  :
                  //mobile version
                  <p style={mobileH1Style}>doing one thing at a time.</p>
                }
                
                <Connect/>
                </span>

                : 

                <span>
                <p style={h3Style}>Hi! I'm Chris.&nbsp;A&nbsp;</p>
                <p style={h2Style}>software developer&nbsp;</p>
                <p style={h3Style}>from Vancouver</p>
                <p style={h1Style}>doing one thing at a time.</p>
                <Connect/>
                </span>

              }
                

                
              
                    
                
            </Stack>
            
            
          
            
        </div>
    )
}

export default Landing;