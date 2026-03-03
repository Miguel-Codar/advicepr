import React from 'react';
import { motion } from 'motion/react';
import { Eye, Target, Diamond, CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#176799] text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#176799] via-[#176799]/80 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Conheça a <span className="text-[#0a72af]">Advice&PR</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Transformando a contabilidade em uma ferramenta estratégica para o crescimento empresarial desde 2015.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section - Split Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-[0.2em] text-[#0a72af] uppercase mb-4">Nossa História</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Atuação consultiva e preventiva para o seu negócio
              </h3>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed border-l-2 border-[#0a72af] pl-6">
                <p>
                  Fundada em 2015, a Advice&PR nasceu com o propósito de transformar a contabilidade em uma ferramenta estratégica para o crescimento empresarial.
                </p>
                <p>
                  Atuamos de forma consultiva e preventiva, unindo inteligência fiscal, gestão financeira e visão de negócio para reduzir riscos tributários, melhorar a eficiência financeira e apoiar decisões com mais segurança e clareza.
                </p>
                <p className="font-medium text-gray-900">
                  Com 35 colaboradores e mais de 250 clientes atendidos, participamos ativamente da estratégia das empresas que acompanhamos e contribuímos para resultados consistentes e crescimento sustentável.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Equipe Advice&PR reunida" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#f8fafc] rounded-full -z-10 border border-gray-100"></div>
              <div className="absolute top-1/2 -left-12 w-24 h-24 bg-[#0a72af]/10 rounded-full -z-10 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MVV Section - Clean Utility */}
      <section className="py-32 bg-[#f8fafc] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Missão, Visão e Valores</h2>
            <div className="w-24 h-1 bg-[#0a72af] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Visão */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 rounded-xl bg-[#0a72af]/10 flex items-center justify-center mb-8 group-hover:bg-[#0a72af] transition-colors duration-300">
                <Eye className="w-8 h-8 text-[#0a72af] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visão</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Ser o escritório contábil mais influente e estratégico de Pernambuco, referência em geração de lucro e gestão empresarial.
              </p>
            </motion.div>

            {/* Missão */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 rounded-xl bg-[#0a72af]/10 flex items-center justify-center mb-8 group-hover:bg-[#0a72af] transition-colors duration-300">
                <Target className="w-8 h-8 text-[#0a72af] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Missão</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Transformar empresas por meio da contabilidade estratégica, oferecendo inteligência financeira e tributária que gera lucro real, segurança e crescimento sustentável.
              </p>
            </motion.div>

            {/* Valores */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group md:col-span-3 lg:col-span-1"
            >
              <div className="w-16 h-16 rounded-xl bg-[#0a72af]/10 flex items-center justify-center mb-8 group-hover:bg-[#0a72af] transition-colors duration-300">
                <Diamond className="w-8 h-8 text-[#0a72af] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Valores</h3>
              <ul className="space-y-4 text-gray-600">
                {[
                  'Foco em resultado',
                  'Excelência técnica',
                  'Ética e transparência',
                  'Mentalidade de crescimento',
                  'Compromisso com o cliente',
                  'Inovação contínua',
                  'Cultura de alta performance'
                ].map((valor, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0a72af] flex-shrink-0" />
                    <span className="text-lg">{valor}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
