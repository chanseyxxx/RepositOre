import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import robo from "./assets/robo.png";
import lego from "./assets/lego.png";

function Homepage() {
    return (
        <>
            {/* Header */}
            <div className="flex justify-between items-center px-8 py-4">
                <div className="text-center mr-6 ml-9">
                <h1 className="font-jura text-5xl lg:text-7xl">RepositORE</h1>
                    <p className="font-roboto text-secondary text-sm lg:text-base">Sua plataforma de aprendizagem em Robótica Educacional</p>
                </div>
                <div className="flex-shrink-0">
                    <img src={robo} alt="Robô" />
                </div>
            </div>

            {/* Section: Explorando o acervo */}
            <div className="flex justify-center items-center px-8 py-4 mb-5">
                <div className="text-center mr-6 ml-9">
                    <h2 className="font-jura text-5xl">Explorando o acervo</h2>
                    <p className="font-roboto text-secondary text-sm lg:text-base">Lista de Objetos de Robótica</p>
                </div>
            </div>

            {/* Card Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center px-8 mb-10">
                {/* Card 1 */}
                <div className="bg-gray-300 p-4 max-w-sm rounded-lg shadow-lg text-center">
                    <img src={lego} alt="Robô lego" className="max-h-40 mx-auto mb-4" />
                    <a href="/" className="font-jura text-2xl font-bold">NXT Castor Bot</a>
                    <p className="font-roboto text-gray-500">This robot uses two-motor drive and a pivoting castor wheel to allow it to turn easily on either carpet or hard floors. It can be used as a simple turning vehicle or as a base for other projects.</p>
                </div>

                {/* Card 2 */}
                <div className="bg-gray-300 p-4 max-w-sm rounded-lg shadow-lg text-center">
                    <img src={lego} alt="Robô lego" className="max-h-40 mx-auto mb-4" />
                    <a href="/" className="font-jura text-2xl font-bold">NXT Castor Bot</a>
                    <p className="font-roboto text-gray-500">This robot uses two-motor drive and a pivoting castor wheel to allow it to turn easily on either carpet or hard floors. It can be used as a simple turning vehicle or as a base for other projects.</p>
                </div>

                {/* Card 3 */}
                <div className="bg-gray-300 p-4 max-w-sm rounded-lg shadow-lg text-center">
                    <img src={lego} alt="Robô lego" className="max-h-40 mx-auto mb-4" />
                    <a href="/" className="font-jura text-2xl font-bold">NXT Castor Bot</a>
                    <p className="font-roboto text-gray-500">This robot uses two-motor drive and a pivoting castor wheel to allow it to turn easily on either carpet or hard floors. It can be used as a simple turning vehicle or as a base for other projects.</p>
                </div>

                {/* Card 4 */}
                <div className="bg-gray-300 p-4 max-w-sm rounded-lg shadow-lg text-center">
                    <img src={lego} alt="Robô lego" className="max-h-40 mx-auto mb-4" />
                    <a href="/" className="font-jura text-2xl font-bold">NXT Castor Bot</a>
                    <p className="font-roboto text-gray-500">This robot uses two-motor drive and a pivoting castor wheel to allow it to turn easily on either carpet or hard floors. It can be used as a simple turning vehicle or as a base for other projects.</p>
                </div>

                {/* Card 5 */}
                <div className="bg-gray-300 p-4 max-w-sm rounded-lg shadow-lg text-center">
                    <img src={lego} alt="Robô lego" className="max-h-40 mx-auto mb-4" />
                    <a href="/" className="font-jura text-2xl font-bold">NXT Castor Bot</a>
                    <p className="font-roboto text-gray-500">This robot uses two-motor drive and a pivoting castor wheel to allow it to turn easily on either carpet or hard floors. It can be used as a simple turning vehicle or as a base for other projects.</p>
                </div>

                {/* Card 6 */}
                <div className="bg-gray-300 p-4 max-w-sm rounded-lg shadow-lg text-center">
                    <img src={lego} alt="Robô lego" className="max-h-40 mx-auto mb-4" />
                    <a href="/" className="font-jura text-2xl font-bold">NXT Castor Bot</a>
                    <p className="font-roboto text-gray-500">This robot uses two-motor drive and a pivoting castor wheel to allow it to turn easily on either carpet or hard floors. It can be used as a simple turning vehicle or as a base for other projects.</p>
                </div>
                
                
            </div>
        </>
    );
}

export default Homepage;
