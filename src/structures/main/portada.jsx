'use client';
import React from 'react';
import Image from 'next/image';

export default function PortadaMain() {
    return (
        <div className="min-h-screen">
            {/* Sección de Bienvenida */}
            <section className="relative flex flex-col items-center justify-center text-center py-10 px-6 md:px-20 min-h-[90vh] ">
                <div className="z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-wider animate-pulse">
                        <span className="text-green-400">AgroBot</span>
                    </h1>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-wider animate-pulse">
                        Tu Asistente Agrícola Inteligente
                    </h1>
                    <p className="mt-6 text-lg md:text-xl max-w-3xl leading-relaxed text-center m-auto">
                        Descubre la solución perfecta para maximizar la productividad de tus cultivos.
                    </p>

                    {/* Imagen principal */}
                    <div className="mt-10 w-full max-w-xs md:max-w-4xl mx-auto m-auto ">
                        <Image
                            src="/agrobot1.png"
                            alt="Imagen de AgroBot"
                            width={500}
                            height={500}
                            className="rounded-lg shadow-lg transition-transform hover:scale-105 m-auto w-auto"
                        />
                    </div>

                    {/* Texto adicional visible solo en dispositivos móviles */}
                    <div className="mt-10 text-sm text-gray-300 leading-relaxed md:hidden">
                        <p className="mb-4">
                            AgroBot es una solución innovadora diseñada para ayudar a los agricultores a
                            monitorear las condiciones ambientales de sus cultivos en tiempo real. Con el uso
                            de inteligencia artificial, sensores inteligentes y energía solar, AgroBot asegura
                            una gestión eficiente y sostenible.
                        </p>

                    </div>
                </div>

                {/* Gradiente de fondo para efecto visual */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </section>
        </div>
    );
}
