import React from 'react';
import { Container, Typography, Link, Box, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
    return (
        <Container sx={{ mb: { xs: 1, sm: 2, md: 3, lg: 8 } }}>
            <Typography variant='h2' component='h1' gutterBottom>
                Contact
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Grid container spacing={1} justifyContent="center">
                    <Grid item>
                        <EmailIcon /> <Link href="mailto:trscode111@gmail.com">Email</Link>
                    </Grid>
                    <Grid item>
                        |
                    </Grid>
                    <Grid item>
                        <GitHubIcon /> <Link href="https://github.com/TRSCode">GitHub</Link>
                    </Grid>
                    <Grid item>
                        |
                    </Grid>
                    <Grid item>
                        <LinkedInIcon /> <Link href="https://linkedin.com/in/trscode">LinkedIn</Link>
                    </Grid>
                </Grid>
                <Typography sx={{mt: { xs: 1, sm: 2, md: 3, lg: 4 }}} style={{ fontSize: '.8rem' }}>
                © 2023 TRScode. All Rights Reserved.
                </Typography>
            </Box>
        </Container>
    );
}

export default Contact;
