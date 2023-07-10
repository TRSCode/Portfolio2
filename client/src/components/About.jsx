import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import profilePic from '../img/HeadShot10-2020.png';


function About() {
    return (
        <Container sx={{mb: {xs: 1, sm: 2, md: 3, lg: 8}}}>
            <Typography variant='h2' component='h1' gutterBottom align='left'>
                Tony Schock
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box m={2}>
                        <img src={profilePic} alt="Profile" style={{ width: '60%', height: 'auto', borderRadius: '50%' }} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box m={2}>
                        <Typography variant='body1'>
                        I am someone who seeks solutions. I have a diverse background through 28 years in the Army, 20 years as a Physician Assistant, and I have worked as a “grunt” all the way up to the C-suite.
                        </Typography>
                        <br />
                        <Typography variant='body1'>
                        Over those years, I encountered many problems that would be handled easier and quicker with a tech solution which has led me to become a full stack web developer/programmer. As an end user, I wanted simple ways to accomplish tasks without redundancy. As a manager, I wanted quick and accurate oversight capabilities. I now can create both (and much more)
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default About;


