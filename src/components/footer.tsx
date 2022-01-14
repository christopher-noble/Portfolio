import React, { CSSProperties } from 'react';
import { Button } from 'react-bootstrap';

const footerStyles: CSSProperties = {
    width: '100%',
    height: '100%',
}

const textStyles: CSSProperties = {
    color: 'white',
    marginTop: 150
}

const Footer : React.FC = () =>
{
    return(
        <div style={footerStyles}>
            <p style={textStyles}>Made by Chris Noble</p>
            <Button href="">View Code</Button>
        </div>
    )
}

export default Footer;