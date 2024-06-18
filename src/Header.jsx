import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const handleScrollToList = () => {
        // Verificar se estamos na página inicial
        if (window.location.pathname === '/') {
            // Encontrar a posição da seção "Explorando o acervo"
            const section = document.querySelector('#explorando-acervo');
            if (section) {
                const sectionPosition = section.offsetTop;
                window.scrollTo({
                    top: sectionPosition,
                    behavior: 'smooth'
                });
            }
        } else {
            window.location.href = '/';
            
        }
    };

    return (
        <header className="flex justify-between items-center px-4 py-2">
            <div className="font-jura text-2xl">
                <Link to="/">
                    <h2>RepositORE</h2>
                </Link>
            </div>
            <div className="justify-center space-x-3 font-roboto font-light">
                {/* Modificar o Link para chamar handleScrollToList ao invés de usar o atributo 'to' */}
                <a href="#" onClick={handleScrollToList}>Lista</a>
                <Link to="/sobre">Sobre Nós</Link>
                <Link to="/contato">Contato</Link>
            </div>
            <div className="justify-center space-x-3 font-roboto font-light">
                <Link to="/login">Entrar</Link>
                <Link to="/signup">Criar Conta</Link>
            </div>
        </header>
    );
}

export default Header;
