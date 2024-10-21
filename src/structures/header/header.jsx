'use client';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import '@fontsource/poppins'; // Importamos la fuente Poppins

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(''); // Estado para gestionar el enlace activo

    const handleLinkClick = (link) => {
        setActiveLink(link); // Actualiza el enlace activo
        setMenuOpen(false); // Cierra el menú después de la selección
    };

    return (
        <header className="sticky top-0 left-0 w-full bg-gradient-to-r from-gray-800 via-black to-gray-900 text-white shadow-lg z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
                {/* Logo con Link a '/' */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="AgroBot Logo"
                        width={100}
                        height={50}
                        className="w-auto"
                    />
                    <h1 className="ml-3 text-2xl font-extrabold tracking-wide animate-pulse cursor-pointer">
                        <span className="text-green-400">A</span>
                        <span className="text-yellow-400">G</span>
                        <span className="text-blue-400">R</span>
                        <span className="text-red-400">O</span>
                        <span className="text-purple-400">B</span>
                        <span className="text-pink-400">O</span>
                        <span className="text-orange-400">T</span>
                    </h1>
                </Link>

                {/* Botón del menú hamburguesa */}
                <button
                    className="text-3xl md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Navegación */}
                <nav
                    className={`${menuOpen ? 'block' : 'hidden'
                        } absolute top-full left-0 w-full bg-black md:relative md:w-auto md:bg-transparent md:flex md:items-center p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-6 transition-all duration-300 ease-in-out`}
                >
                    <Link href="/">
                        <p className="text-lg font-semibold font-[Poppins] hover:text-yellow-400 hover:scale-110 transition-transform">
                            Inicio
                        </p>
                    </Link>

                    <Link href="/#funcionalidades" className="text-lg font-semibold hover:text-yellow-400 hover:scale-110 transition-transform">
                        Funcionalidades
                    </Link>

                    <Link href="/monitoreo">
                        <p className="text-lg font-semibold font-[Poppins] hover:text-yellow-400 hover:scale-110 transition-transform">
                            Monitoreo
                        </p>
                    </Link>

                    <Link href="/#contacto">
                        <p className="text-lg font-semibold font-[Poppins] hover:text-yellow-400 hover:scale-110 transition-transform">
                            Contacto
                        </p>
                    </Link>

                    <Link href="/nosotros">
                        <p className="text-lg font-semibold font-[Poppins] hover:text-yellow-400 hover:scale-110 transition-transform">
                            Nosotros
                        </p>
                    </Link>
                </nav>


            </div>

            {/* Sombra blanca en la parte inferior del header */}
            <div className="h-1 w-full bg-white shadow-lg" />
        </header>
    );
}
