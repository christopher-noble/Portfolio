import React from 'react';
import { CSSProperties } from 'react';
import { Nav } from 'react-bootstrap';

const navStyles: CSSProperties ={
    marginTop: '7.4%',
    position: 'fixed',
    color: 'white',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'end',
}

const navLinkStyle: CSSProperties = {
    color: 'black',
}

const NavBar: React.FC = () =>
{
    return(
        <div>
        <Nav style={navStyles}>
            <Nav.Item>
                <Nav.Link style={navLinkStyle} href="#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={navLinkStyle} href="#work">Work</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={navLinkStyle} href="#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={navLinkStyle} href="#skills">Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={navLinkStyle} target="_blank" href="https://drive.google.com/file/d/1pcvoPAQlic5yRkxQq3-sNMtiZIQ0aKcJ/view?usp=sharing">
                    Resume
                </Nav.Link>
            </Nav.Item>
        </Nav>
        </div>
    )
}
export default NavBar;