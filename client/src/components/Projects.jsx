import React, { useState } from 'react';
import { Container, Typography, Grid, Box, Dialog } from '@mui/material';
import project1 from '../img/MM_demo.gif';
import project2 from '../img/GGG_demo.gif';

function Projects() {
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const handleOpen = (image) => {
        setCurrentImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container sx={{mb: {xs: 1, sm: 2, md: 3, lg: 8}}}>
            <Typography variant='h2' component='h1' gutterBottom>
                Projects
            </Typography>

            <Grid container spacing={2} sx={{mb: {xs: 1, sm: 2, md: 3, lg: 8}}}>
                <Grid item xs={12} md={6}>
                    <Typography variant='h5' component='h2' gutterBottom>
                        Med Manager
                    </Typography>
                    <Typography variant='body1'>
                        <p>Medication tracking and inventory system with users.</p>
                        <ul>
                            <li>MERN (Mongo DB, Mongoose, Express, React, Node.js)</li>
                            <li>Bootstrap</li>
                            <li>HTML and CSS</li>
                            <li>Special features include: sort by expiration or location</li>
                            <li><a href="https://github.com/TRSCode/formularyManager" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        </ul>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box m={2} onClick={() => handleOpen(project1)} sx={{ position: 'relative', cursor: 'pointer' }}>
                        <img src={project1} alt="Project 1" style={{ width: '100%', height: 'auto' }} />
                        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textShadow: '2px 2px 4px #000000' }}>
                            <Typography variant='h6'>Click to Zoom</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box m={2} onClick={() => handleOpen(project2)} sx={{ position: 'relative', cursor: 'pointer' }}>
                        <img src={project2} alt="Project 2" style={{ width: '100%', height: 'auto' }} />
                        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textShadow: '2px 2px 4px #000000' }}>
                            <Typography variant='h6'>Click to Zoom</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ order: { xs: -1, md: 0 } }}>
                    <Typography variant='h5' component='h2' gutterBottom>
                        Great Gear Gallery
                    </Typography>
                    <Typography variant='body1'>
                    <p>E-commerce site utilizing fakestoreapi.com with user login/registration/checkout</p>
                                <ul>
                                    <li>Group project utilizing gitHub for collaboration</li>
                                    <li>MERN (Mongo DB, Mongoose, Express, React, Node.js)</li>
                                    <li>Bootstrap</li>
                                    <li>HTML and CSS</li>
                                    <li><a href="https://github.com/alexander-ponce/Group-Project">GitHub</a></li>
                                </ul>
                    </Typography>
                </Grid>
            </Grid>

            <Dialog
                open={open}
                onClose={handleClose}
                fullScreen
            >
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        p: 4,
                        overflow: 'auto',
                    }}
                >
                    <img
                        src={currentImage}
                        alt="Zoomed"
                        style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
                        onClick={handleClose}
                    />
                </Box>
            </Dialog>
        </Container>
    );
}

export default Projects;



