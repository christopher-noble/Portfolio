import React from 'react';
import { CSSProperties } from 'react';
import { Nav } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

const navStyles: CSSProperties ={
    marginTop: '7.4%',
    position: 'fixed',
    color: 'white',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'end',
}

const mobileNavStyles: CSSProperties ={
    marginTop: 5,
    position: 'fixed',
    color: 'white',
    width: '100%',
    justifyContent: 'center',
    padding: 0,
    marginLeft: 0,
    marginRight: 0,
    fontSize: 12
}

const navLinkStyle: CSSProperties = {
    color: 'black',
}

const mobileNavLinkStyle: CSSProperties = {
    color: 'black',
    padding: 9,
}

const NavBar: React.FC = () =>
{

    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })

    return(
        <div>
        <Nav style={isMobile? mobileNavStyles : navStyles}>
            <Nav.Item>
                <Nav.Link style={isMobile? mobileNavLinkStyle : navLinkStyle} href="#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={isMobile? mobileNavLinkStyle : navLinkStyle} href="#work">Work</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={isMobile? mobileNavLinkStyle : navLinkStyle} href="#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={isMobile? mobileNavLinkStyle : navLinkStyle} href="#skills">Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={isMobile? mobileNavLinkStyle : navLinkStyle} target="_blank" href="https://drive.google.com/file/d/1pcvoPAQlic5yRkxQq3-sNMtiZIQ0aKcJ/view?usp=sharing">
                    Resume
                </Nav.Link>
            </Nav.Item>
        </Nav>
        </div>
    )
}
export default NavBar;