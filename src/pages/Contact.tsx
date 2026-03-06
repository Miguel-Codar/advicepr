import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Instagram, Linkedin, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#176799] text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#176799] via-[#176799]/80 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Fale <span className="text-[#0a72af]">Conosco</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Na Advice&PR você é atendido diretamente por especialistas!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info - Split Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 space-y-12"
            >
              <div>
                <h2 className="text-sm font-bold tracking-[0.2em] text-[#0a72af] uppercase mb-4">Informações de Contato</h2>
                <h3 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Estamos aqui para ajudar</h3>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#f8fafc] border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0a72af] transition-colors duration-300 shadow-sm">
                    <Phone className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Telefone</h4>
                    <a href="https://api.whatsapp.com/send?phone=5581982215319" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-lg hover:text-[#0a72af] transition-colors">
                      (81) 3132-1568
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#f8fafc] border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0a72af] transition-colors duration-300 shadow-sm">
                    <MapPin className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Endereço</h4>
                    <a href="https://www.google.com/maps/search/?api=1&query=R.+Gen.+José+Semeão,+108+-+Santo+Amaro,+Recife+-+PE,+50050-120" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-lg leading-relaxed hover:text-[#0a72af] transition-colors block">
                      R. Gen. José Semeão, 108<br />
                      Santo Amaro<br />
                      Recife - PE, 50050-120
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#f8fafc] border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0a72af] transition-colors duration-300 shadow-sm">
                    <Instagram className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Instagram</h4>
                    <a href="https://www.instagram.com/advicepr_contadores/" target="_blank" rel="noopener noreferrer" className="text-[#0a72af] text-lg hover:underline font-medium">
                      @advicepr_contadores
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#f8fafc] border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0a72af] transition-colors duration-300 shadow-sm">
                    <Linkedin className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">LinkedIn</h4>
                    <a href="#" className="text-[#0a72af] text-lg hover:underline font-medium">
                      Advice&PR Contadores
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8"
            >
              <form className="bg-white p-10 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#0a72af]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-10 border-b border-gray-100 pb-6">
                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Envie uma mensagem</h3>
                    <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">* campos obrigatórios</p>
                  </div>
                  
                  <div className="space-y-8">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Nome completo*</label>
                      <input type="text" id="nome" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#0a72af] focus:ring-2 focus:ring-[#0a72af]/20 outline-none transition-all bg-gray-50/50 text-lg" required />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">E-mail corporativo*</label>
                        <input type="email" id="email" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#0a72af] focus:ring-2 focus:ring-[#0a72af]/20 outline-none transition-all bg-gray-50/50 text-lg" required />
                      </div>
                      <div>
                        <label htmlFor="telefone" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Telefone</label>
                        <input type="tel" id="telefone" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#0a72af] focus:ring-2 focus:ring-[#0a72af]/20 outline-none transition-all bg-gray-50/50 text-lg" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="empresa" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Empresa</label>
                        <input type="text" id="empresa" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#0a72af] focus:ring-2 focus:ring-[#0a72af]/20 outline-none transition-all bg-gray-50/50 text-lg" />
                      </div>
                      <div>
                        <label htmlFor="regime" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Regime</label>
                        <select id="regime" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#0a72af] focus:ring-2 focus:ring-[#0a72af]/20 outline-none transition-all bg-gray-50/50 appearance-none text-lg text-gray-700">
                          <option value="">—Escolha uma opção—</option>
                          <option value="simples">Simples Nacional</option>
                          <option value="presumido">Lucro Presumido</option>
                          <option value="real">Lucro Real</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="funcionarios" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Número de funcionários</label>
                        <select id="funcionarios" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#0a72af] focus:ring-2 focus:ring-[#0a72af]/20 outline-none transition-all bg-gray-50/50 appearance-none text-lg text-gray-700">
                          <option value="">—Escolha uma opção—</option>
                          <option value="1-10">1 a 10</option>
                          <option value="11-50">11 a 50</option>
                          <option value="51-200">51 a 200</option>
                          <option value="200+">Mais de 200</option>
                        </select>
                      </div>
                      <div className="row-span-2">
                        <label htmlFor="mensagem" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Mensagem</label>
                        <textarea id="mensagem" rows={5} className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#0a72af] focus:ring-2 focus:ring-[#0a72af]/20 outline-none transition-all bg-gray-50/50 resize-none h-[148px] text-lg"></textarea>
                      </div>
                    </div>

                    <div className="flex justify-end pt-8 border-t border-gray-100">
                      <button type="submit" className="bg-[#176799] text-white px-10 py-5 rounded-full font-bold hover:bg-[#0a72af] transition-colors shadow-lg shadow-[#176799]/20 w-full md:w-auto flex items-center justify-center gap-3 group text-lg">
                        Enviar mensagem
                        <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
