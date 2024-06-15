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
                <a href="">Sobre Nós</a><br />
                <a href="">Contato</a><br />
                <a href="">Políticas de privacidade</a>
            </div>

        
        </footer>
    );
}

export default Footer;