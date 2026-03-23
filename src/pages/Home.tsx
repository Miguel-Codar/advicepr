import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Calculator, FileText, Users, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const services = [
    {
      icon: <Calculator className="w-6 h-6" />,
      title: 'Contabilidade',
      description: 'Gestão contábil estratégica e relatórios financeiros para decisões assertivas.'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Fiscal e Levantamento de Crédito Tributário',
      description: 'Planejamento tributário eficaz, conformidade fiscal e recuperação de tributos pagos a mais.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Departamento Pessoal',
      description: 'Administração de pessoal e rotinas trabalhistas completas.'
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'BPO Financeiro',
      description: 'Gestão de contas a pagar e a receber, fluxo de caixa e conciliações.'
    }
  ];

  const clients = [
    '/logos/1 (1).png',
    '/logos/1 (2).png',
    '/logos/1 (3).png',
    '/logos/1 (4).png',
    '/logos/1 (5).png',
    '/logos/1 (6).png',
    '/logos/1 (7).png',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section - Split Layout */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center min-h-[calc(100vh-80px)] py-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a72af]/10 text-[#0a72af] text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-[#0a72af] animate-pulse"></span>
                Especialistas em Gestão Empresarial
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-bold text-gray-900 leading-[1.05] tracking-tight mb-8">
                Contabilidade <br/>
                <span className="text-[#0a72af]">consultiva</span> <br/>
                para o seu negócio.
              </h1>
              
              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
                Oferecemos soluções contábeis personalizadas, alinhadas às necessidades da sua empresa, com estratégia, tecnologia e atendimento próximo para apoiar decisões seguras e crescimento sustentável.
              </p>
              
              <div className="space-y-4 mb-12">
                {[
                  'Contabilidade estratégica, não operacional',
                  'Inteligência fiscal e gestão integrada',
                  'Clientes por todo Brasil'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0a72af] flex-shrink-0" />
                    <span className="text-gray-900 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/servicos" className="bg-[#176799] text-white px-8 py-4 rounded-full font-medium hover:bg-[#0a72af] transition-colors text-center shadow-lg shadow-[#176799]/20 flex items-center justify-center gap-2 group">
                  Nossos serviços
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contato" className="bg-white text-gray-900 border-2 border-[#176799] px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors text-center">
                  Fale com um especialista
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block h-full min-h-[600px]"
            >
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Equipe de contabilidade trabalhando" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#176799]/80 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute bottom-12 -left-12 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 max-w-[240px]">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-[#0a72af]/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#0a72af]" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">250+</div>
                    <div className="text-sm text-gray-500 font-medium">Clientes Atendidos</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Clean Utility / Grid */}
      <section className="py-32 bg-[#f8fafc] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Nossos serviços</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                A solução completa para a saúde financeira da sua empresa. Abordagem estratégica e personalizada.
              </p>
            </div>
            <Link to="/servicos" className="inline-flex items-center gap-2 text-[#0a72af] font-semibold hover:text-gray-900 transition-colors group">
              Ver todos os serviços
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:border-[#0a72af] group-hover:bg-[#0a72af] transition-all duration-300 shadow-sm">
                    {React.cloneElement(service.icon, { className: 'text-gray-900 group-hover:text-white transition-colors duration-300' })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0a72af] transition-colors">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>
                {/* Subtle divider line */}
                <div className="absolute -bottom-8 left-22 right-0 h-px bg-gray-200 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section - Minimalist Marquee Style */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase">Empresas que confiam em nós</h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-80">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                <img src={client} alt={`Cliente ${index + 1}`} className="h-16 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
