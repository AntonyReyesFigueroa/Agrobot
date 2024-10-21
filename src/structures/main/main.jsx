'use client';
import { useRef } from 'react';
import ContenidoMain from './contenido-main';
import PortadaMain from './portada';

export default function Main() {
    const funcionalidadesRef = useRef(null); // Referencia a Funcionalidades

    return (
        <main className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
            <PortadaMain />
            {/* Sección Funcionalidades con la referencia */}
            <div ref={funcionalidadesRef}>
                <ContenidoMain />
            </div>
        </main>
    );
}
