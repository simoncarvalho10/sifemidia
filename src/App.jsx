import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import './styles/style.css';

import Head from './pages/head'
import Home from './pages/home'
import Contact from "./pages/contact";
import Footer from './pages/footer'
import About from './pages/about'
import Faq from './pages/faq'

function App() {
    return( 
        <div id="tudo" className="flex flex-col justify-center bg-white">  
             <Router>
                <Head />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/faq" element={<Faq />} />
                    </Routes>
                <Footer />
            </Router>
        </div>
    );
}
export default App              