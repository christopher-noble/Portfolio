import React, { CSSProperties } from 'react';
import { Button } from 'react-bootstrap';

const footerStyles: CSSProperties = {
    width: '100%',
    height: '35vh',
    justifyContent:'space-evenly',
}

const textStyles: CSSProperties = {
    color: 'white',
    marginTop: 150
}

const buttonStyles: CSSProperties = {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 1,
    height: 40,
    borderColor: 'transparent',
    width: 150,
    verticalAlign: 'middle',
    textAlign: 'center',
}

const imageStyles: CSSProperties = {
    width: '33%',
    paddingLeft: 15,
    paddingRight: 0,
    paddingBottom: 2,
}

const Footer : React.FC = () =>
{
    return(
        <div style={footerStyles}>
            <p style={textStyles}>Made by Chris Noble</p>
            <Button style={buttonStyles} target="_blank" href="https://github.com/christopher-noble/Portfolio">
                View Code
                <img style={imageStyles} src="github-circle.png"></img>
            </Button>
        </div>
    )
}

export default Footer;