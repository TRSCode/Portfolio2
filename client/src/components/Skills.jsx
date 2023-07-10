import React from 'react';
import { Container, Typography, Grid } from '@mui/material';

function Skills() {
    return (
        <Container sx={{mb: {xs: 1, sm: 2, md: 3, lg: 8}}}>
            <Typography variant='h2' component='h1' gutterBottom>
                Skills
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant='h6' component='h2' gutterBottom>
                        Front-end
                    </Typography>
                    <Typography variant='body1'>
                        HTML, CSS, JavaScript, Bootstrap, MUI, React
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant='h6' component='h2' gutterBottom>
                        Back-end
                    </Typography>
                    <Typography variant='body1'>
                        Python, Flask, Node.js, Express
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant='h6' component='h2' gutterBottom>
                        Database
                    </Typography>
                    <Typography variant='body1'>
                        Mongoose, MySQL, MongoDB
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant='h6' component='h2' gutterBottom>
                        Other
                    </Typography>
                    <Typography variant='body1'>
                        Visual Studio Code, Git, GitHub, Postman
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Skills;

