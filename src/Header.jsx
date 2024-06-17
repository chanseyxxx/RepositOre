import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header className="flex justify-between items-center px-4 py-2 ">
            <div className="font-jura text-2xl">
                <Link to="/">
                <h2>RepositORE</h2>
                </Link>
            </div>
            <div className="justify-between space-x-3 font-roboto font-light">
                <a href="">Lista</a>
                <Link to="/sobre">Sobre Nós</Link>
                <a href="">Contato</a>
            </div>
            <div className="justify-between space-x-3 font-roboto font-light">
                <a href="">Entrar</a>
                <a href="">Criar Conta</a>
                </div>
        </header>
    );
}

export default Header