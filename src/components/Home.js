import * as React from 'react';
import Button from '@mui/material/Button';
function Home() {
    return (
        <Button variant="contained" size="large" sx={{position: 'fixed', bottom: '0', right: '0'}}>
            FindMe
        </Button>
    )
}

export default Home;