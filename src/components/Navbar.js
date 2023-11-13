import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { AppBar, Box, Container, Tooltip, Zoom } from '@mui/material';
import Typography from '@mui/material/Typography';

function Navbar () {
    return (
        <AppBar position="static" sx={{backgroundColor: '#7db2d4'}}>
            <Container sx={{p: 1.5}}>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-between' }}>
                    <Zoom in timeout={2000}>
                        <Tooltip TransitionComponent={Zoom} arrow placement='left' title={'Rabaya Rabu'}>
                            <Avatar alt="Rabu" src="/images/Rabu.jpg" />
                        </Tooltip>
                    </Zoom>
                    <Box Tr sx={{display: 'flex', alignItems: 'center'}}>
                        <Typography sx={{ minWidth: 100 }}>Profile</Typography>
                        <Typography sx={{ minWidth: 100 }}>Projects</Typography>
                        <Typography sx={{ minWidth: 100 }}>Skills</Typography>
                        <Typography sx={{ minWidth: 100 }}>Contact</Typography>
                    </Box>
                    
                </Box>
            </Container>
        </AppBar>
        
    )
}
export default Navbar