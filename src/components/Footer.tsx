import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Mail, Instagram, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                                <Music className="w-6 h-6 text-purple-400" />
                            </div>
                            <span className="text-white text-xl font-bold">RaquelMusic</span>
                        </Link>
                        <p className="text-sm text-gray-400">
                            Aprende música a tu ritmo, desde la teoría clásica hasta la tecnología moderna.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-3">
                            <li><Link to="/cursos" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Catálogo de Cursos</Link></li>
                            <li><Link to="/nosotros" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Sobre Nosotros</Link></li>
                            <li><Link to="/blog" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Blog y Recursos</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Categorías</h4>
                        <ul className="space-y-3">
                            <li className="text-sm text-gray-400">Teoría Musical</li>
                            <li className="text-sm text-gray-400">Piano</li>
                            <li className="text-sm text-gray-400">Guitarra</li>
                            <li className="text-sm text-gray-400">Producción Musical</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Contacto</h4>
                        <div className="space-y-4">
                            <a href="mailto:info@raquelmusic.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-purple-400 transition-colors">
                                <Mail className="w-4 h-4" />
                                info@raquelmusic.com
                            </a>
                            <div className="flex items-center gap-3">
                                <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-gray-800 text-gray-400 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                                <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-lg bg-gray-800 text-gray-400 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
                                <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-gray-800 text-gray-400 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                    <p className="text-sm text-gray-500">
                        © {currentYear} RaquelMusic. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;