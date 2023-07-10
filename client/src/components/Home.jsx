import React, { useRef } from 'react';
import { Container } from '@mui/material';

import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Navbar from './Navbar';

function Home() {
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);

    const sections = [
        { title: 'About', ref: aboutRef },
        { title: 'Projects', ref: projectsRef },
        { title: 'Skills', ref: skillsRef },
        { title: 'Contact', ref: contactRef },
    ];

    return (
        <Container>
            <Navbar sections={sections} />
            <div ref={aboutRef}><About /></div>
            <div ref={projectsRef}><Projects /></div>
            <div ref={skillsRef}><Skills /></div>
            <div ref={contactRef}><Contact /></div>
        </Container>
    );
}

export default Home;


