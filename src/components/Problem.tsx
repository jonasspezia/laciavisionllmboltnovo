import React from 'react';
import { Clock, AlertTriangle, Search, FileQuestion } from 'lucide-react';

const Problem: React.FC = () => {
  const challenges = [
    {
      icon: <Clock className="h-8 w-8 text-red-500" />,
      title: "Processos de Avaliação Demorados",
      description: "Avaliações manuais de procedimentos médicos consomem horas preciosas de educadores e supervisores clínicos, resultando em gargalos no processo de aprendizagem."
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      title: "Inconsistência nas Avaliações",
      description: "Diferentes avaliadores frequentemente aplicam critérios subjetivos, levando a variações significativas no feedback fornecido aos profissionais em treinamento."
    },
    {
      icon: <Search className="h-8 w-8 text-red-500" />,
      title: "Detecção Limitada de Erros",
      description: "O olho humano pode deixar passar detalhes críticos durante procedimentos complexos, comprometendo a capacidade de identificar e corrigir técnicas incorretas."
    },
    {
      icon: <FileQuestion className="h-8 w-8 text-red-500" />,
      title: "Documentação Insuficiente",
      description: "Os métodos tradicionais carecem de documentação abrangente e rastreável, dificultando a análise longitudinal do progresso do aprendiz."
    }
  ];

  return (
    <section id="problema" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Os Desafios na Avaliação de Procedimentos Médicos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Instituições médicas enfrentam obstáculos significativos nos processos de avaliação que impactam a qualidade do ensino e, consequentemente, os resultados clínicos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-50 p-3 rounded-full mr-4">
                  {challenge.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{challenge.title}</h3>
                  <p className="text-gray-600">{challenge.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-red-50 border border-red-100 rounded-lg p-6 md:p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Impacto no Sistema de Saúde</h3>
          <p className="text-gray-700 mb-4">
            Estes desafios não são apenas problemas educacionais, mas representam riscos diretos à qualidade do atendimento ao paciente e à eficiência operacional das instituições de saúde.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="font-semibold text-lg mb-2 text-red-600">73%</h4>
              <p className="text-sm text-gray-600">dos programas de residência relatam inconsistências significativas nas avaliações de procedimentos</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="font-semibold text-lg mb-2 text-red-600">8.4 horas</h4>
              <p className="text-sm text-gray-600">é o tempo médio semanal que supervisores dedicam apenas para avaliações de procedimentos</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="font-semibold text-lg mb-2 text-red-600">42%</h4>
              <p className="text-sm text-gray-600">dos erros técnicos poderiam ser evitados com feedback imediato e consistente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
