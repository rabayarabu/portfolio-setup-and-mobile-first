import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { AppBar, Container } from '@mui/material';

function Navbar () {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Avatar alt="Rabu" src="/images/Rabu.jpg" />
            </Container>
        </AppBar>
        
    )
}
export default Navbar