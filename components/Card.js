import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

const Card = ({ title, description, details, cases }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <details
      className={`group p-8 shadow-xl transition-colors duration-500 ${
        isExpanded ? 'bg-gray-800 text-white' : 'bg-gray-50'
      } cursor-pointer rounded-none`} // Removido o rounded-2xl
      open={isExpanded}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <summary className="list-none">
        <div className="flex justify-between items-center">
          <h3
            className={`text-xl font-serif transition-colors duration-500 ${
              isExpanded ? 'text-white' : 'text-gray-900'
            }`}
          >
            {title}
          </h3>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-white" aria-hidden="true" focusable="false" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" aria-hidden="true" focusable="false" />
          )}
        </div>
        <p className={`mt-4 ${isExpanded ? 'text-gray-200' : 'text-gray-600'}`}>
          {description}
        </p>
      </summary>

      {isExpanded && (
        <div className={`mt-6 pt-4 border-t ${isExpanded ? 'border-white' : 'border-gray-700'} transition-colors duration-500`}>
          {/* Conteúdo expandido */}
          <div className={`mt-4 pt-4 border-t ${isExpanded ? 'border-gray-200' : 'border-gray-700'}`}>
            {details}

            {/* Chamadas para o Blog (exemplo) */}
            <h4 className={`text-lg font-semibold mt-6 mb-2 ${isExpanded ? 'text-white' : 'text-gray-900'}`}>
              Saiba Mais no Blog:
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <Link href="#" className={`hover:underline ${isExpanded ? 'text-blue-300' : 'text-blue-600'}`}>
                  Artigo sobre {title}
                </Link>
              </li>
              {/* Adicione mais links conforme necessário */}
            </ul>

            {/* FAQ Expansível (exemplo) */}
            <h4 className={`text-lg font-semibold mt-6 mb-2 ${isExpanded ? 'text-white' : 'text-gray-900'}`}>
              Perguntas Frequentes:
            </h4>
            <div className="space-y-2">
              <details className="border border-gray-200 rounded p-2">
                <summary className={`cursor-pointer list-none font-medium ${isExpanded ? 'text-white' : 'text-gray-700'}`}>
                  Pergunta 1 sobre {title}?
                </summary>
                <p className={`mt-2 ${isExpanded ? 'text-gray-100' : 'text-gray-600'}`}>
                  Resposta para a pergunta 1.
                </p>
              </details>
              {/* Adicione mais perguntas conforme necessário */}
            </div>
          </div>
        </div>
      )}
    </details>
  );
};

export default Card;