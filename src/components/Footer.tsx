import { Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-[#176799] text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center mb-6">
              <img src="/532b3810ba874a4396fda04c92685837.png" alt="Advice&PR Logo" className="h-12 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-gray-200 text-sm leading-relaxed max-w-sm">
              Contabilidade consultiva para o seu negócio. Oferecemos soluções contábeis personalizadas, alinhadas às necessidades da sua empresa.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-gray-100">Navegação</h4>
            <ul className="space-y-4 text-sm text-gray-200">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/empresa" className="hover:text-white transition-colors">Nossa Empresa</Link></li>
              <li><Link to="/servicos" className="hover:text-white transition-colors">Serviços</Link></li>
              <li><Link to="/contato" className="hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-gray-100">Contato</h4>
            <ul className="space-y-4 text-sm text-gray-200">
              <li>(81) 3132-1568</li>
              <li>contato@advicepr.com.br</li>
              <li>R. Gen. José Semeão, 108<br/>Santo Amaro, Recife - PE</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-300 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Advice&PR Contadores. Todos os direitos reservados.
          </div>
          
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/advicepr_contadores/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
