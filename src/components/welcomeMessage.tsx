import React, { CSSProperties } from 'react';
import { Button, Stack } from 'react-bootstrap';
import ConnectWithMe from './connectWithMe';


const stackStyles : CSSProperties = {
    height: '100%',
    width: '100%',
    marginTop: '10vh',
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'sticky',
  }

  const heading1Style : CSSProperties = {
    fontSize: '80px'
  }

  const heading2Style : CSSProperties = {
    fontSize: '22px',
    display: 'inline-block',
  }

  const heading3Style : CSSProperties = {
    fontSize: '18px',
    display: 'inline-block',
    
  }
  
const WelcomeMessage: React.FC = () =>
{
    return(
        <div>
            <Stack style={stackStyles}>
                <span>
                    <p style={heading3Style}>Hi! I'm Chris.&nbsp;A&nbsp;</p>
                    <p style={heading2Style}>software developer&nbsp;</p>
                    <p style={heading3Style}>from Vancouver</p>
                    <p style={heading1Style}>doing one thing at a time.</p>
                    <ConnectWithMe/>
                </span>
            </Stack>
        </div>
    )
}

export default WelcomeMessage;