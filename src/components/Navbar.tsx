import { Link, useLocation } from 'react-router-dom';
import { Phone, Linkedin, Menu, X } from 'lucide-react';
import React from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex-shrink-0 flex items-center group">
            <img src="/532b3810ba874a4396fda04c92685837.png" alt="Advice&PR Logo" className="h-12 w-auto object-contain" />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-[#0a72af]' : 'text-gray-600 hover:text-gray-900'}`}>Home</Link>
            <Link to="/empresa" className={`text-sm font-medium transition-colors ${isActive('/empresa') ? 'text-[#0a72af]' : 'text-gray-600 hover:text-gray-900'}`}>Nossa Empresa</Link>
            <Link to="/servicos" className={`text-sm font-medium transition-colors ${isActive('/servicos') ? 'text-[#0a72af]' : 'text-gray-600 hover:text-gray-900'}`}>Serviços</Link>
            <Link to="/contato" className={`text-sm font-medium transition-colors ${isActive('/contato') ? 'text-[#0a72af]' : 'text-gray-600 hover:text-gray-900'}`}>Contato</Link>
            
            <div className="h-4 w-px bg-gray-200"></div>

            <a href="https://api.whatsapp.com/send?phone=5581982215319" target="_blank" rel="noopener noreferrer" className="bg-[#176799] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#0a72af] transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" />
              (81) 3132-1568
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0a72af] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-gray-600 hover:text-[#0a72af] hover:bg-gray-50 rounded-md font-medium">Home</Link>
            <Link to="/empresa" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-gray-600 hover:text-[#0a72af] hover:bg-gray-50 rounded-md font-medium">Nossa Empresa</Link>
            <Link to="/servicos" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-gray-600 hover:text-[#0a72af] hover:bg-gray-50 rounded-md font-medium">Serviços</Link>
            <Link to="/contato" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-gray-600 hover:text-[#0a72af] hover:bg-gray-50 rounded-md font-medium">Contato</Link>
          </div>
        </div>
      )}
    </nav>
  );
};
