import React from "react";

function Profile(){
    return(
    <div className="h-screen bg-gray-200   flex flex-wrap items-center  justify-center  ">
                <div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">    
                    <div className="flex justify-center px-5  -mt-12">
                        <img className="h-32 w-32 bg-white p-2 rounded-full   " src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />

                    </div>
                    <div className=" ">
                        <div className="text-center px-14">
                            <h2 className="text-gray-800 text-3xl font-bold">Mohit Dhiman</h2>
                            <p className="mt-2 text-gray-500 text-sm">Bem-vindo a sua conta RepositORE</p>
                        </div>
                        <hr className="mt-6" />
                       
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-secondary text-white p-2 rounded-md hover:bg-gray-800  focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Sair da conta</button>
                    </div>
                </div>
            </div>
    );
}

export default Profile