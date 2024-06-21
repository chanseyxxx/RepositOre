import React, { useState } from "react";

function Forms() {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="container max-w-screen-lg mx-auto p-6">

        <h1 className="font-jura text-3xl mb-5">Cadastrar Objeto</h1>

        <div className="bg-gray-200 rounded-lg shadow-lg p-6 md:p-8">
          <p className="text-secondary font-roboto text-base mb-6">Por favor, preencha os campos abaixo para cadastrar seu objeto de robótica.</p>

          <form className="space-y-4">
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-secondary hover:text-black focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <span className="text">Enviar arquivo</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1 text-gray-500">ou arraste e solte</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF até 10MB</p>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título</label>
              <input type="text" id="title" name="title" className="h-10 border mt-1 rounded px-4 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300" placeholder="Digite o título do objeto" />
            </div>

            <div className="mb-4">
              <label htmlFor="source" className="block text-sm font-medium text-gray-700">Fonte</label>
              <input type="text" id="source" name="source" className="h-10 border mt-1 rounded px-4 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300" placeholder="Digite a fonte do objeto" />
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descrição</label>
              <textarea id="description" name="description" rows="3" className="mt-1 p-2 w-full border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-200 transition-colors duration-300" placeholder="Digite a descrição do objeto"></textarea>
            </div>

        {/* Accordion para campos opcionais */}
        <div className="mb-4">
          <div className="flex justify-between items-center cursor-pointer" onClick={toggleAccordion}>
            <h2 className="text-sm font-medium text-gray-700">Mais Opções</h2>
            <svg className={`h-4 w-4 ${accordionOpen ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {accordionOpen && (
            <div className="mt-2">
              <div className="mb-4">
                <label htmlFor="year" className="block text-sm font-medium text-gray-700">Ano</label>
                <input type="text" id="year" name="year" className="h-10 border mt-1 rounded px-4 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300" placeholder="Digite o ano" />
              </div>
              {/* Adicione mais campos opcionais aqui conforme necessário */}
            </div>
          )}
        </div>
        {/* Fim do Accordion */}
        
            <div className="text-right">
              <button type="submit" className="bg-secondary hover:bg-black text-white font-bold py-2 px-4 rounded">Salvar</button>
            </div>
          </form>
        </div>

      
      </div>
    </div>
  );
}

export default Forms;
