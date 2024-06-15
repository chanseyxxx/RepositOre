import React from 'react';
import robo from "./assets/robo.png";

function Home() {
    return (
        <div className="flex justify-between items-center px-8 py-4">
            <div className="text-center mr-6 ml-9">
                <h1 className="font-jura text-5xl lg:text-7xl">RepositORE</h1>
                <p className="font-roboto text-secondary text-sm lg:text-base">Sua plataforma de aprendizagem em Robótica Educacional</p>
            </div>
            <div className="flex-shrink-0">
                <img src={robo} alt="Robô"  />
            </div>
        </div>
    );
}

export default Home;
