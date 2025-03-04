import React from 'react';
import { Brain, Activity, CheckCircle2, Zap } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section id="solucao" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A Solução LaciaVisionLLM
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa plataforma integra tecnologias de visão computacional e modelos de linguagem avançados para revolucionar a avaliação de procedimentos médicos.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Interface do LaciaVisionLLM analisando um procedimento médico" 
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Transformando Avaliações Médicas</h3>
            <p className="text-gray-600 mb-6">
              O LaciaVisionLLM analisa vídeos de procedimentos médicos em tempo real, identificando com precisão cada etapa do processo, detectando desvios do protocolo e fornecendo feedback imediato e contextualizado.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-50 p-2 rounded-full mr-4">
                  <Brain className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Inteligência Artificial Especializada</h4>
                  <p className="text-gray-600">Algoritmos treinados com milhares de procedimentos realizados por especialistas de referência mundial.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-50 p-2 rounded-full mr-4">
                  <Activity className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Avaliação Multimodal</h4>
                  <p className="text-gray-600">Combina análise visual de movimentos com reconhecimento auditivo para uma compreensão completa do procedimento.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-50 p-2 rounded-full mr-4">
                  <CheckCircle2 className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Protocolos Personalizáveis</h4>
                  <p className="text-gray-600">Adapte os critérios de avaliação às diretrizes específicas da sua instituição ou sociedade médica.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-50 p-2 rounded-full mr-4">
                  <Zap className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Resultados Instantâneos</h4>
                  <p className="text-gray-600">Feedback detalhado disponível imediatamente após o procedimento, eliminando atrasos no ciclo de aprendizagem.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-center mb-8">Como Funciona o LaciaVisionLLM</h3>
          <div className="flex flex-col md:flex-row gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm flex-1">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-700 font-bold text-xl">1</span>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">Captação</h4>
              <p className="text-gray-600 text-sm">O sistema captura vídeo do procedimento através de câmeras existentes ou dedicadas no ambiente clínico.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex-1">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-700 font-bold text-xl">2</span>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">Análise</h4>
              <p className="text-gray-600 text-sm">Nossos algoritmos processam cada frame, identificando instrumentos, movimentos e conformidade com protocolos estabelecidos.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex-1">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-700 font-bold text-xl">3</span>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">Avaliação</h4>
              <p className="text-gray-600 text-sm">O LLM contextualiza as observações visuais e gera insights específicos sobre a qualidade da execução técnica.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex-1">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-700 font-bold text-xl">4</span>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">Feedback</h4>
              <p className="text-gray-600 text-sm">Relatórios detalhados são gerados com marcações temporais, sugestões específicas e comparações com o padrão-ouro.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
