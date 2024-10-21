'use client'
import React from 'react'
import Image from 'next/image';
import { FaRobot, FaCloud, FaBolt, FaSolarPanel } from 'react-icons/fa';

export default function ContenidoMain() {
    return (
        <div id="funcionalidades" className="scroll-mt-40">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-wider text-white mb-10 text-center">
                Funcionalidades
            </h2>

            {/* Características destacadas */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 py-16 text-center">
                <div className="flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-300">
                    <FaRobot size={60} className="text-green-400" />
                    <h3 className="text-xl font-bold">Inteligencia Artificial</h3>
                    <p>
                        AgroBot utiliza algoritmos avanzados para detectar plagas y optimizar la gestión de cultivos.
                    </p>
                </div>
                <div className="flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-300">
                    <FaCloud size={60} className="text-blue-400" />
                    <h3 className="text-xl font-bold">Monitoreo en Tiempo Real</h3>
                    <p>
                        Sensores inteligentes recogen datos precisos sobre la temperatura, humedad y otros factores críticos.
                    </p>
                </div>
                <div className="flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-300">
                    <FaSolarPanel size={60} className="text-yellow-400" />
                    <h3 className="text-xl font-bold">Energía Solar</h3>
                    <p>
                        AgroBot funciona con energía solar, garantizando una operación continua y sostenible en cualquier entorno.
                    </p>
                </div>
            </section>

            {/* Sección de Video */}
            <section className="relative flex flex-col items-center justify-center text-center bg-black py-20 px-6 md:px-20">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-wider text-white mb-10">
                    AgroBot en Acción
                </h2>
                <video
                    src="/agrobot.mp4"
                    controls
                    className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-sm transition-transform"
                ></video>
            </section>



            {/* Llamada a la Acción */}
            <section id="contacto" className="py-16 bg-gradient-to-r from-green-950 via-blue-950 to-purple-950 text-center text-white scroll-mt-5">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    ¡Optimiza tus Cultivos con AgroBot!
                </h2>
                <p className="mb-8 text-lg pl-2 pr-2">
                    No esperes más. Únete a la revolución agrícola y comienza a aprovechar al máximo tus recursos con AgroBot.
                </p>
            </section>
        </div>
    )
}
