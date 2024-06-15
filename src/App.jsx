import React from 'react';
import './index.css'; // ou o nome do seu arquivo CSS
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Card from './Card.jsx';
import Home from './Home.jsx';
import Title from './Title.jsx';

function App() {
    return (
        <div className="bg-gray-200 min-h-screen">
            <Header />
            <Home />
            <Title />
            <div className="flex justify-center space-x-20">
                <Card />
                <Card />
            </div>
            <Footer />
        </div>
    );
}

export default App;
