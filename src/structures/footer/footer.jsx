'use client';
import { FaFacebook, FaLinkedin, FaWhatsapp, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Contacto */}
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-lg font-bold mb-2">Contáctanos</h2>
                    <p className="mb-2 flex items-center space-x-2">
                        <FaWhatsapp size={24} />
                        <a
                            href="https://wa.me/51924811558?text=Se%20solicita%20información%20de%20su%20AgroBot"
                            className="hover:text-green-500"
                        >
                            +51 924 811 558
                        </a>
                    </p>
                    <p className="flex items-center space-x-2">
                        <FaWhatsapp size={24} />
                        <a
                            href="https://wa.me/51918320136?text=Se%20solicita%20información%20de%20su%20AgroBot"
                            className="hover:text-green-500"
                        >
                            +51 918 320 136
                        </a>
                    </p>
                    <p className="mt-4 flex items-center space-x-2 pb-2">
                        <FaEnvelope size={24} />
                        <a href="mailto:antonyreyesfigueroa@gmail.com" className="hover:text-yellow-500">
                            antonyreyesfigueroa@gmail.com
                        </a>
                    </p>
                    <p className="flex items-center space-x-2 pt-2">
                        <FaEnvelope size={24} />
                        <a href="mailto:plinaresr20_1@unc.edu.pe" className="hover:text-yellow-500">
                            plinaresr20_1@unc.edu.pe
                        </a>
                    </p>
                </div>

                {/* Redes Sociales */}
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-lg font-bold mb-4">Síguenos en: </h2>
                    <div className="flex space-x-8">
                        <a href="https://www.facebook.com/share/Sw1zK8KVcaVoLTuM/" className="hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={32} />
                        </a>
                        <a href="https://pe.linkedin.com/in/antony-armando-reyes-figueroa-75901b24b" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={32} />
                        </a>
                        <a href="https://www.linkedin.com/in/piero-herman-linares-rojas-9316aa2b4" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={32} />
                        </a>
                        <a href="https://www.instagram.com/linaresrojaspiero/profilecard/" className="hover:text-pink-400" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={32} />
                        </a>
                    </div>
                </div>

                {/* Sobre Nosotros */}
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-lg font-bold mb-2 m-auto md:text-left">Sobre Nosotros</h2>
                    <p className="text-sm leading-relaxed mb-4 text-justify">
                        AgroBot es una iniciativa innovadora para optimizar la productividad agrícola mediante inteligencia artificial, sensores ambientales y energía solar. Nos enfocamos en brindar soluciones sostenibles a los agricultores de Cajamarca y el resto del Perú.
                    </p>
                    <a href="/nosotros" className="hover:text-yellow-400">
                        Conoce más sobre nosotros
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-black text-center py-4">
                <p>&copy; copyright AgroBot 2024. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}
