import React from 'react';

const HeroLogin = () => {
    return (
        <div className="relative h-[60vh] md:h-[90vh] max-h-[600px] flex justify-center items-center z-10">
            <img
                src="/register/login.png"
                alt="Visa Consultancy & Travel Solutions"
                className="w-full h-full "
                loading="lazy"
            />
            <div className="absolute inset-0  bg-black/20 flex items-center justify-center  px-4 text-center">
                <div className="text-white flex flex-col items-center max-w-4xl space-y-4 justify-center">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight uppercase">
                        Login
                    </h1>
                    <h2 className=" md:text-3xl font-medium uppercase  w-[90%]">
                        Join us to manage your investments and create superior returns together
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default HeroLogin;

