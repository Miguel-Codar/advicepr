import React from 'react';
import { motion } from 'motion/react';
import { Calculator, FileText, Users, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services = () => {
  const services = [
    {
      icon: <Calculator className="w-8 h-8" />,
      title: 'Contabilidade',
      description: 'Gestão contábil estratégica e relatórios financeiros para decisões assertivas.',
      features: [
        'Relatórios gerenciais mensais',
        'Análise de indicadores financeiros',
        'Demonstrações contábeis completas',
        'Reuniões de acompanhamento estratégico'
      ]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Fiscal e Levantamento de Crédito Tributário',
      description: 'Planejamento tributário eficaz, conformidade fiscal e recuperação de tributos pagos a mais.',
      features: [
        'Planejamento tributário anual',
        'Apuração de impostos',
        'Obrigações acessórias',
        'Análise de benefícios fiscais',
        'Revisão de tributos federais e estaduais',
        'Recuperação de créditos tributários'
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Departamento Pessoal',
      description: 'Administração de pessoal e rotinas trabalhistas completas.',
      features: [
        'Gestão completa da folha de pagamento',
        'Admissões e rescisões',
        'Férias e 13º salário',
        'Apuração de encargos trabalhistas'
      ]
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'BPO Financeiro',
      description: 'Gestão de contas a pagar e a receber, fluxo de caixa e conciliações.',
      features: [
        'Controle de contas a pagar e receber',
        'Conciliação bancária diária',
        'Emissão de notas fiscais e boletos',
        'Gestão do fluxo de caixa'
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#176799] text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#176799] via-[#176799]/80 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Nossos <span className="text-[#0a72af]">Serviços</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              A solução completa para a saúde financeira da sua empresa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List - Technical Dashboard Style */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group border border-gray-200 rounded-3xl p-8 md:p-12 hover:border-[#0a72af] transition-all duration-500 bg-white shadow-sm hover:shadow-xl relative overflow-hidden"
              >
                {/* Background accent on hover */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#0a72af]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#0a72af]/10 transition-colors duration-500"></div>

                <div className="grid lg:grid-cols-12 gap-12 relative z-10">
                  <div className="lg:col-span-4 flex flex-col items-start">
                    <div className="w-20 h-20 rounded-2xl bg-[#f8fafc] border border-gray-100 flex items-center justify-center mb-8 group-hover:bg-[#0a72af] group-hover:border-[#0a72af] transition-all duration-500 shadow-sm">
                      {React.cloneElement(service.icon, { className: 'text-gray-900 group-hover:text-white transition-colors duration-500' })}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">{service.title}</h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="lg:col-span-8 lg:border-l lg:border-gray-100 lg:pl-12 flex flex-col justify-center">
                    <h3 className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-8">O que inclui</h3>
                    <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0a72af] mt-2.5 flex-shrink-0"></div>
                          <span className="text-lg text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-12 pt-8 border-t border-gray-100">
                      <Link to="/contato" className="inline-flex items-center gap-2 text-[#0a72af] font-semibold hover:text-gray-900 transition-colors group/link text-lg">
                        Falar com especialista sobre este serviço
                        <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#f8fafc] py-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
            Pronto para transformar a gestão financeira da sua empresa?
          </h2>
          <Link to="/contato" className="inline-flex bg-[#176799] text-white px-10 py-5 rounded-full font-medium hover:bg-[#0a72af] transition-colors shadow-lg shadow-[#176799]/20 items-center justify-center gap-3 text-lg group">
            Agendar uma consultoria gratuita
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};
