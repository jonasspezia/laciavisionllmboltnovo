import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CallToAction: React.FC = () => {
  const nextSteps = [
    {
      step: "1",
      title: "Agende uma Demonstração",
      description: "Veja o LaciaVisionLLM em ação com um procedimento relevante para sua instituição."
    },
    {
      step: "2",
      title: "Avaliação de Necessidades",
      description: "Nossa equipe realizará uma análise detalhada dos seus processos atuais e objetivos educacionais."
    },
    {
      step: "3",
      title: "Projeto Piloto",
      description: "Implemente o sistema em um departamento específico para validar resultados e ajustar configurações."
    },
    {
      step: "4",
      title: "Implementação Completa",
      description: "Expansão para toda a instituição com treinamento abrangente e suporte contínuo."
    }
  ];

  return (
    <section id="contato" className="py-20 px-6 bg-azul-escuro text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Próximos Passos
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Descubra como o LaciaVisionLLM pode transformar os processos de avaliação médica na sua instituição com um plano de implementação personalizado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {nextSteps.map((step, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="bg-turquesa text-white h-10 w-10 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-white/80">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-3 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-azul-escuro mb-6">Solicite uma Demonstração Personalizada</h3>
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-azul-profundo mb-1">Nome Completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-turquesa focus:border-turquesa"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="institution" className="block text-sm font-medium text-azul-profundo mb-1">Instituição</label>
                    <input 
                      type="text" 
                      id="institution" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-turquesa focus:border-turquesa"
                      placeholder="Nome da sua instituição"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-azul-profundo mb-1">Email Profissional</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-turquesa focus:border-turquesa"
                      placeholder="seu.email@instituicao.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-azul-profundo mb-1">Telefone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-turquesa focus:border-turquesa"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-azul-profundo mb-1">Cargo</label>
                  <select 
                    id="role" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-turquesa focus:border-turquesa"
                  >
                    <option value="">Selecione seu cargo</option>
                    <option value="director">Diretor(a) de Educação Médica</option>
                    <option value="coordinator">Coordenador(a) de Programa</option>
                    <option value="administrator">Administrador(a) Hospitalar</option>
                    <option value="professor">Professor(a)/Instrutor(a)</option>
                    <option value="other">Outro</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-azul-profundo mb-1">Mensagem</label>
                  <textarea 
                    id="message" 
                    rows={3} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-turquesa focus:border-turquesa"
                    placeholder="Conte-nos sobre suas necessidades específicas e procedimentos de interesse"
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="w-full bg-turquesa text-white px-6 py-3 rounded-lg font-semibold hover:bg-verde transition-colors flex items-center justify-center"
                  >
                    Solicitar Demonstração
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
            
            <div className="md:col-span-2 bg-branco-suave p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-azul-escuro mb-6">Por que Agendar uma Demonstração?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-turquesa mr-3 flex-shrink-0 mt-1" />
                  <p className="text-azul-profundo">Demonstração personalizada para procedimentos relevantes à sua instituição</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-turquesa mr-3 flex-shrink-0 mt-1" />
                  <p className="text-azul-profundo">Análise de ROI potencial com base em seus dados atuais</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-turquesa mr-3 flex-shrink-0 mt-1" />
                  <p className="text-azul-profundo">Discussão de requisitos técnicos e opções de integração</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-turquesa mr-3 flex-shrink-0 mt-1" />
                  <p className="text-azul-profundo">Oportunidade para suas perguntas específicas serem respondidas</p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="font-medium text-azul-escuro mb-2">Precisa de informações imediatas?</p>
                <a href="tel:+551140028922" className="text-turquesa font-medium hover:text-verde transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (11) 4002-8922
                </a>
                <a href="mailto:contato@laciavisionllm.com.br" className="text-turquesa font-medium hover:text-verde transition-colors flex items-center mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contato@laciavisionllm.com.br
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
