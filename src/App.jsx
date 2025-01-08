import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import './styles/style.css';

import Head from './pages/head'
import Home from './pages/home'
import Contact from "./pages/contact";
import Footer from './pages/footer'

function App() {
    return( 
        <div id="tudo" className="flex flex-col justify-center bg-slate-50">  
             <Router>
                <Head />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                <Footer />
            </Router>
        </div>
    );
}
export default App              