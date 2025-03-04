import React from 'react';
import { GraduationCap, Building2, BookOpen } from 'lucide-react';

const UseCases: React.FC = () => {
  const useCases = [
    {
      icon: <GraduationCap className="h-12 w-12 text-indigo-600" />,
      title: "Escolas Médicas",
      description: "Transforme a educação médica com avaliações objetivas e feedback personalizado para cada estudante.",
      challenges: [
        "Avaliação inconsistente entre diferentes instrutores",
        "Tempo limitado para feedback individualizado",
        "Dificuldade em documentar o progresso longitudinal"
      ],
      solutions: [
        "Avaliações padronizadas baseadas em critérios objetivos",
        "Feedback automatizado e personalizado para cada estudante",
        "Registro detalhado do desenvolvimento de habilidades ao longo do tempo"
      ],
      roi: [
        "Redução de 65% no tempo dedicado à avaliação de procedimentos",
        "Aumento de 47% na taxa de aprovação em exames práticos",
        "Economia estimada de R$320.000 anuais em custos de supervisão"
      ],
      testimonial: {
        quote: "O LaciaVisionLLM revolucionou nossa abordagem para o ensino de procedimentos clínicos. Nossos instrutores agora podem focar no desenvolvimento de habilidades avançadas, enquanto o sistema cuida da avaliação técnica básica.",
        author: "Dra. Mariana Alves",
        role: "Diretora de Educação Médica, Universidade Federal de Medicina"
      }
    },
    {
      icon: <Building2 className="h-12 w-12 text-indigo-600" />,
      title: "Hospitais Universitários",
      description: "Eleve o padrão de treinamento de residentes e garanta consistência na qualidade dos procedimentos.",
      challenges: [
        "Supervisão limitada durante procedimentos de rotina",
        "Variabilidade na qualidade técnica entre diferentes equipes",
        "Dificuldade em identificar necessidades específicas de treinamento"
      ],
      solutions: [
        "Monitoramento contínuo da qualidade técnica dos procedimentos",
        "Identificação precoce de padrões problemáticos",
        "Programas de treinamento personalizados baseados em dados reais"
      ],
      roi: [
        "Redução de 38% nas complicações relacionadas a procedimentos",
        "Economia de R$1.2 milhões em custos associados a eventos adversos",
        "Aumento de 28% na eficiência operacional das equipes cirúrgicas"
      ],
      testimonial: {
        quote: "Implementamos o LaciaVisionLLM em nosso programa de residência em cirurgia e os resultados foram impressionantes. A capacidade de fornecer feedback objetivo e imediato transformou completamente o processo de aprendizado.",
        author: "Dr. Carlos Mendes",
        role: "Diretor Clínico, Hospital Universitário São Lucas"
      }
    },
    {
      icon: <BookOpen className="h-12 w-12 text-indigo-600" />,
      title: "Programas de Educação Continuada",
      description: "Mantenha profissionais atualizados com as mais recentes técnicas e protocolos através de avaliação contínua.",
      challenges: [
        "Dificuldade em avaliar a adoção de novas técnicas",
        "Tempo limitado para treinamento presencial",
        "Resistência à mudança de práticas estabelecidas"
      ],
      solutions: [
        "Avaliação objetiva da implementação de novas técnicas",
        "Treinamento remoto com feedback assíncrono",
        "Evidências visuais para demonstrar áreas de melhoria"
      ],
      roi: [
        "Aumento de 72% na adoção de novas técnicas baseadas em evidências",
        "Redução de 54% nos custos de treinamento presencial",
        "Melhoria de 41% nos indicadores de qualidade assistencial"
      ],
      testimonial: {
        quote: "Como coordenadora de educação continuada, o LaciaVisionLLM me permitiu escalar nosso programa para centenas de profissionais simultaneamente, mantendo a qualidade e personalização do feedback.",
        author: "Dra. Patrícia Souza",
        role: "Coordenadora de Educação Médica Continuada, Rede Saúde Brasil"
      }
    }
  ];

  return (
    <section id="casos" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Casos de Uso e ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça como diferentes instituições estão utilizando o LaciaVisionLLM para transformar seus processos educacionais e obter retorno mensurável sobre o investimento.
          </p>
        </div>

        <div className="space-y-16">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-indigo-50 p-8 flex flex-col items-center justify-center text-center">
                  <div className="bg-white p-4 rounded-full shadow-sm mb-6">
                    {useCase.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <span className="bg-red-100 text-red-600 p-1 rounded-full mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        </span>
                        Desafios
                      </h4>
                      <ul className="space-y-2">
                        {useCase.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            <span className="text-gray-600">{challenge}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-4 flex items-center">
                        <span className="bg-green-100 text-green-600 p-1 rounded-full mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        Soluções
                      </h4>
                      <ul className="space-y-2">
                        {useCase.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span className="text-gray-600">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                          </svg>
                        </span>
                        ROI Mensurável
                      </h4>
                      <ul className="space-y-2">
                        {useCase.roi.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-indigo-500 mr-2">•</span>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                        <blockquote className="italic text-gray-600 mb-3">
                          "{useCase.testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center">
                          <div className="bg-indigo-100 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                            <span className="text-indigo-600 font-semibold">
                              {useCase.testimonial.author.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{useCase.testimonial.author}</p>
                            <p className="text-sm text-gray-500">{useCase.testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
