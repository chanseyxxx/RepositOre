function Header(){
    return(
        <header className="flex justify-between items-center px-4 py-2 ">
            <div className="font-jura text-2xl">
                <h2>RepositORE</h2>
            </div>
            <div className="justify-between space-x-3 font-roboto font-light">
                <a href="">Lista</a>
                <a href="">Sobre Nós</a>
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