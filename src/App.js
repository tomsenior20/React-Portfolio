import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Nav from './components/nav';
import Footer from './components/footer';
import { Helmet } from 'react-helmet'


export default function App() {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}
