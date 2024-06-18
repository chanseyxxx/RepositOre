import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="flex justify-between items-center px-10 py-2 bg-gray-300">
            {/* Div à esquerda */}
            <div className=" text-center mx-5">
                <h2 className="font-jura text-2xl">RepositORE</h2>
                <p className="font-roboto">&copy; {new Date().getFullYear()} Copyright</p>
            </div>

            {/* Div no meio */}
            <div className="font-roboto text-center mx-auto">
                <Link to="/sobre">Sobre</Link><br />
                <Link to="/contato">Contato</Link><br />
                <Link to="/politicas">Políticas de privacidade</Link><br />
            </div>

        
        </footer>
    );
}

export default Footer;
