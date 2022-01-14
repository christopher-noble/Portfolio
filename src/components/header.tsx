import React, { CSSProperties } from 'react';
import { Stack } from 'react-bootstrap';
import NavBar from './navbar';



const Header : React.FC = () =>
{
    return(
        <Stack>
            <NavBar/>
        </Stack>
    )
}

export default Header;