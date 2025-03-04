import React from 'react';
import { Video, LineChart, CheckSquare, Store, Clock, ShieldCheck, Sparkles, Users } from 'lucide-react';

const Features: React.FC = () => {
  const coreComponents = [
    {
      icon: <Video className="h-10 w-10 text-turquesa" />,
      title: "Análise Avançada de Vídeo",
      description: "Processamento de imagem em tempo real que identifica instrumentos, técnicas e padrões de movimento durante procedimentos médicos.",
      features: [
        "Reconhecimento de instrumentos cirúrgicos e médicos",
        "Detecção de posicionamento e técnicas de manuseio",
        "Rastreamento de movimento das mãos e instrumentos",
        "Identificação de etapas críticas do procedimento"
      ]
    },
    {
      icon: <LineChart className="h-10 w-10 text-turquesa" />,
      title: "Feedback Personalizado",
      description: "Avaliações detalhadas com insights específicos para cada profissional, focados em seus pontos fortes e áreas de melhoria.",
      features: [
        "Análise comparativa com procedimentos de referência",
        "Identificação de padrões e tendências ao longo do tempo",
        "Recomendações para aperfeiçoamento técnico",
        "Métricas quantitativas de desempenho"
      ]
    },
    {
      icon: <CheckSquare className="h-10 w-10 text-turquesa" />,
      title: "Listas de Verificação Personalizáveis",
      description: "Critérios de avaliação flexíveis que podem ser adaptados às diretrizes institucionais e às melhores práticas da especialidade.",
      features: [
        "Editor visual de protocolos e checklists",
        "Suporte a múltiplas versões de procedimentos",
        "Integração com diretrizes de sociedades médicas",
        "Atualização automática baseada em novas evidências"
      ]
    },
    {
      icon: <Store className="h-10 w-10 text-turquesa" />,
      title: "Marketplace de Módulos",
      description: "Biblioteca extensa de módulos específicos para diferentes especialidades e procedimentos médicos, continuamente atualizada.",
      features: [
        "Módulos por especialidade (cardiologia, ortopedia, etc.)",
        "Atualizações regulares com novas técnicas",
        "Desenvolvimento colaborativo com instituições parceiras",
        "Customização para necessidades específicas"
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: <Clock />,
      title: "Avaliação em Tempo Real",
      description: "Feedback imediato durante o treinamento, permitindo correções no momento da aprendizagem."
    },
    {
      icon: <ShieldCheck />,
      title: "Privacidade Avançada",
      description: "Proteção de dados de pacientes com anonimização automática e processamento local."
    },
    {
      icon: <Sparkles />,
      title: "Inteligência Adaptativa",
      description: "O sistema evolui com o uso, melhorando continuamente sua precisão e relevância."
    },
    {
      icon: <Users />,
      title: "Colaboração Multi-institucional",
      description: "Compartilhamento seguro de dados de treinamento entre instituições parceiras."
    }
  ];

  return (
    <section id="recursos" className="py-28 px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(21,188,198,0.05),transparent_40%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-turquesa/10 to-verde/10 mb-4">
            <span className="text-turquesa text-sm font-medium">Recursos Avançados</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-azul-escuro mb-4">
            Componentes Principais
          </h2>
          
          <p className="text-xl text-azul-profundo/80 max-w-3xl mx-auto">
            Nossa plataforma integra tecnologias inovadoras para fornecer uma solução completa de avaliação e aprendizado médico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {coreComponents.map((component, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-turquesa/10 p-4 inline-block rounded-lg mb-6 group-hover:bg-turquesa/20 transition-colors">
                {component.icon}
              </div>
              
              <h3 className="text-2xl font-semibold text-azul-escuro mb-3 group-hover:text-turquesa transition-colors">
                {component.title}
              </h3>
              
              <p className="text-azul-profundo/80 mb-6">{component.description}</p>
              
              <ul className="space-y-3">
                {component.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-turquesa mr-2 transform transition-transform duration-300 group-hover:scale-110">•</span>
                    <span className="text-azul-profundo/80 group-hover:text-azul-profundo transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-dark rounded-3xl opacity-95 overflow-hidden">
            {/* Background graphic elements */}
            <div className="absolute w-64 h-64 rounded-full bg-turquesa/20 -top-20 -right-20 blur-3xl"></div>
            <div className="absolute w-64 h-64 rounded-full bg-verde/10 -bottom-20 -left-20 blur-3xl"></div>
          </div>
          
          <div className="relative p-12 text-white z-10">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-10 text-center">
              Arquitetura Técnica e Acessibilidade
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="text-xl font-medium mb-4 inline-flex items-center">
                  <div className="w-8 h-1 bg-turquesa rounded-full mr-3"></div>
                  Infraestrutura Robusta
                </h4>
                
                <ul className="space-y-4">
                  {[
                    "Processamento híbrido (local e em nuvem) para velocidade e segurança",
                    "Compatibilidade com sistemas decâmeras existentes e equipamentos médicos",
                    "APIs abertas para integração com sistemas de gestão educacional e EMRs",
                    "Armazenamento seguro e criptografado para registros de procedimentos e avaliações"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <span className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-turquesa/30 transition-colors">
                        <span className="h-2 w-2 rounded-full bg-turquesa"></span>
                      </span>
                      <span className="text-white/80 group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-xl font-medium mb-4 inline-flex items-center">
                  <div className="w-8 h-1 bg-verde rounded-full mr-3"></div>
                  Foco em Usabilidade
                </h4>
                
                <ul className="space-y-4">
                  {[
                    "Interface intuitiva projetada para uso em ambientes clínicos",
                    "Aplicativos mobile para acesso a relatórios e feedbacks em qualquer lugar",
                    "Dashboards personalizáveis para administradores e educadores",
                    "Suporte a múltiplos idiomas e adaptação a protocolos regionais"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <span className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-verde/30 transition-colors">
                        <span className="h-2 w-2 rounded-full bg-verde"></span>
                      </span>
                      <span className="text-white/80 group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {additionalFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100 hover:shadow-glow-sm transition-all duration-300 group"
            >
              <div className="bg-turquesa/10 p-3 rounded-full inline-flex items-center justify-center mb-4 group-hover:bg-turquesa/20 transition-colors">
                {React.cloneElement(feature.icon, { className: "h-6 w-6 text-turquesa" })}
              </div>
              <h4 className="text-lg font-medium text-azul-escuro mb-2 group-hover:text-turquesa transition-colors">
                {feature.title}
              </h4>
              <p className="text-azul-profundo/70 text-sm group-hover:text-azul-profundo transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
