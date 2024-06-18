import React from 'react';
import { Link } from 'react-router-dom';

function Contato() {
    return (
        <div className="w-full flex items-center justify-center m-10">
            <div className="max-w-md w-full p-6 border border-gray-200 rounded-md shadow-md">
                <h1 className="text-3xl font-jura mb-6 text-black text-center">Entre em contato conosco</h1>
                <h2 className="text-sm font-roboto mb-6 text-secondary text-center">Prezamos pelo seu feedback</h2>
                <form action="#" method="POST" className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            className="mt-1 p-2 w-full border rounded-md focus:ring-gray-300 focus:ring-offset-2 focus:ring-2 focus:border-gray-200 focus:outline-none transition-colors duration-300"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Sua mensagem</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows="3" 
                            className="mt-1 p-2 w-full border rounded-md focus:ring-gray-300 focus:ring-offset-2 focus:ring-2 focus:border-gray-200 focus:outline-none transition-colors duration-300"
                        ></textarea>
                    </div>
                    <div>
                        <button 
                            type="submit" 
                            className="w-full bg-secondary text-white p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contato;
