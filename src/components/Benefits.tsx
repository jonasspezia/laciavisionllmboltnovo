import React from 'react';
import { TrendingUp, Clock, Award, FileText, BarChart3, Lightbulb, Coins, Shield } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-indigo-600" />,
      title: "Melhoria Acelerada de Habilidades",
      description: "Feedback imediato e específico permite que os profissionais identifiquem e corrijam técnicas inadequadas rapidamente, acelerando a curva de aprendizado."
    },
    {
      icon: <Clock className="h-8 w-8 text-indigo-600" />,
      title: "Economia de Tempo para Educadores",
      description: "Redução de até 70% no tempo dedicado à avaliação manual de procedimentos, permitindo que os educadores foquem em orientação personalizada."
    },
    {
      icon: <Award className="h-8 w-8 text-indigo-600" />,
      title: "Padronização da Excelência",
      description: "Critérios de avaliação consistentes garantem que todos os profissionais sejam treinados e avaliados com os mesmos padrões de qualidade."
    },
    {
      icon: <FileText className="h-8 w-8 text-indigo-600" />,
      title: "Documentação Abrangente",
      description: "Registro detalhado do progresso de cada profissional, criando um histórico completo de desenvolvimento de habilidades e competências."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-indigo-600" />,
      title: "Análise de Dados Educacionais",
      description: "Insights baseados em dados sobre tendências de aprendizado, pontos fracos comuns e eficácia de diferentes abordagens de ensino."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-indigo-600" />,
      title: "Inovação Pedagógica",
      description: "Novas possibilidades para metodologias de ensino baseadas em evidências e adaptadas às necessidades individuais dos aprendizes."
    },
    {
      icon: <Coins className="h-8 w-8 text-indigo-600" />,
      title: "Retorno sobre Investimento",
      description: "Redução de custos operacionais, melhor alocação de recursos humanos e potencial aumento na qualidade dos cuidados prestados."
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: "Segurança do Paciente",
      description: "Profissionais melhor treinados e avaliados resultam em menor incidência de erros técnicos e melhores resultados clínicos."
    }
  ];

  return (
    <section id="beneficios" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefícios de Implementação
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A adoção do LaciaVisionLLM traz vantagens significativas para instituições médicas, educadores e profissionais em formação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white p-3 rounded-lg shadow-sm mr-4">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl p-8 text-white">
          <div className="md:flex items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-semibold mb-4">Impacto Mensurável na Qualidade da Educação Médica</h3>
              <p className="mb-4">
                Instituições que implementaram o LaciaVisionLLM relatam melhorias significativas em múltiplos indicadores de qualidade educacional e eficiência operacional.
              </p>
              <a 
                href="#contato" 
                className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Solicitar Estudo de Caso Completo
              </a>
            </div>
            <div className="md:w-1/3 grid grid-cols-2 gap-4">
              <div className="bg-white/20 p-4 rounded-lg text-center">
                <h4 className="text-3xl font-bold mb-1">92%</h4>
                <p className="text-sm">dos educadores relatam maior consistência nas avaliações</p>
              </div>
              <div className="bg-white/20 p-4 rounded-lg text-center">
                <h4 className="text-3xl font-bold mb-1">68%</h4>
                <p className="text-sm">de redução no tempo de avaliação de procedimentos</p>
              </div>
              <div className="bg-white/20 p-4 rounded-lg text-center">
                <h4 className="text-3xl font-bold mb-1">3.2x</h4>
                <p className="text-sm">mais feedback por sessão de treinamento</p>
              </div>
              <div className="bg-white/20 p-4 rounded-lg text-center">
                <h4 className="text-3xl font-bold mb-1">41%</h4>
                <p className="text-sm">de melhoria na curva de aprendizado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
