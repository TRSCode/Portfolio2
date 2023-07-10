import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Navbar({ sections }) {
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <Typography variant='h6'>
                    Portfolio
                </Typography>
                {sections.map((section) => (
                    <Button color='inherit' onClick={() => section.ref.current.scrollIntoView({ behavior: 'smooth' })}>
                        {section.title}
                    </Button>
                ))}
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;

