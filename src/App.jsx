import React from 'react';
import './index.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Homepage'; 
import Header from './Header'; 
import Footer from './Footer'; 
import Sobre from './Sobre'; 

function App() {
    console.log('Renderizando App...'); 

    return (
        <Router>
            <div className="bg-gray-200 min-h-screen">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre" element={<Sobre />} />
                    {/* Adicione outras rotas conforme necessário */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
