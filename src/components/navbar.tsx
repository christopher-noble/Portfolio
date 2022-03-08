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
    fontSize: 11
}

const navLinkStyle: CSSProperties = {
    color: 'black',
}

const mobileNavLinkStyle: CSSProperties = {
    color: 'black',
    padding: 8,
}

const NavBar: React.FC = () =>
{

    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })

    return(
        <div>
            {
                isMobile? 
                <Nav style={mobileNavStyles}>
                    <Nav.Item>
                        <Nav.Link style={mobileNavLinkStyle} href="#home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={mobileNavLinkStyle} href="#work">Work</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={mobileNavLinkStyle} href="#about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={mobileNavLinkStyle} href="#skills">Skills</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={mobileNavLinkStyle} target="_blank" href="https://drive.google.com/file/d/1pcvoPAQlic5yRkxQq3-sNMtiZIQ0aKcJ/view?usp=sharing">
                            Resume
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                :
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
                        <Nav.Link style={navLinkStyle} target="_blank" href="https://drive.google.com/file/d/1P8-NMeu5aKOlrpwc96yLiNvRvhStuOUv/view?usp=sharing">
                            Resume
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            }
        
        </div>
    )
}
export default NavBar;