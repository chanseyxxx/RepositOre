import React from 'react';
import './index.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Homepage'; 
import Header from './Header'; 
import Footer from './Footer'; 
import Sobre from './Sobre'; 
import Login from './Login'; 
import Signup from './Signup'; 
import Contato from './Contato'; 

function App() {
    console.log('Renderizando App...'); 

    return (
        <Router>
            <div className="bg-gray-200 min-h-screen">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/contato" element={<Contato />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
