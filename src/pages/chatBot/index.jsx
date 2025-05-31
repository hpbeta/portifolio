import { useState } from 'react';
import { MessageCircle, X, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "Quem é você?",
    answer: "Sou o João Lucas, desenvolvedor web em transição de carreira. Estudo Análise e Desenvolvimento de Sistemas e venho de uma trajetória como sushiman.",
  },
  {
    question: "O que você está estudando atualmente?",
    answer: "Estou focado em desenvolvimento web, com estudos em HTML, CSS, JavaScript, React e também em tecnologias de backend como Node.js, Express e PHP.",
  },
  {
    question: "Quais linguagens e ferramentas você domina?",
    answer: "Tenho experiência com HTML, CSS, JavaScript, React, Tailwind CSS,",
  },
  {
    question: "Você está disponível para trabalhar em projetos?",
    answer: "Sim! Estou sempre aberto a oportunidades para aprender e contribuir com projetos reais.",
  },
  {
    question: "Qual seu maior objetivo na área de tecnologia?",
    answer: "Meu objetivo é me consolidar como desenvolvedor e crescer profissionalmente, sempre aprendendo e enfrentando novos desafios.",
  },
  {
    question: "Como você começou na programação?",
    answer: "Comecei estudando por conta própria com cursos online e me apaixonei pela área. Hoje estudo formalmente na faculdade e sigo me aperfeiçoando.",
  },
  {
    question: "Além de programar, o que você gosta de fazer?",
    answer: "Gosto de correr (faço 5 km por dia!), aprender coisas novas, ouvir música e curtir bons momentos com amigos e família.",
  },
  {
    question: "Você tem projetos publicados?",
    answer: "Sim! Estou trabalhando em projetos pessoais e pretendo publicá-los em breve no meu portfólio e GitHub.",
  },
];

export function ChatbotFAQ  ()  {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleOpen = () => setIsOpen(prev => !prev);
  const handleQuestionClick = (question) => setSelectedQuestion(question);
  const handleBack = () => setSelectedQuestion(null);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleOpen}
        className="h-14 w-14 bg-primary bg-blue-500 cursor-pointer rounded-full shadow-lg flex items-center justify-center hover:opacity-90 transition animate-pulse"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </button>

      {isOpen && (
        <div className="fixed bottom-0 right-0 w-full sm:w-[28rem] h-[80vh] sm:h-[60vh] bg-white border-t sm:rounded-t-xl shadow-xl z-50 flex flex-col animate-fadeIn">
          <div className="border-b p-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Assistente Virtual</h2>
            <button
              onClick={toggleOpen}
              className="p-2 rounded-full hover:bg-muted transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-muted-foreground px-4 mt-1">
            Olá! Selecione uma das perguntas abaixo para saber mais sobre mim.
          </p>

          <div className="overflow-y-auto mt-4 px-4 pb-6 h-full">
            {selectedQuestion ? (
              <div className="animate-fadeIn space-y-4">
                <button
                  onClick={handleBack}
                  className="flex items-center text-sm text-primary hover:underline"
                >
                  <ChevronUp className="mr-1 h-4 w-4" /> Voltar para perguntas
                </button>
                <div className="bg-primary/10 text-primary font-medium rounded-lg p-3">
                  {selectedQuestion}
                </div>
                <div className="bg-accent/20 rounded-lg p-3 text-sm leading-relaxed">
                  {faqData.find(faq => faq.question === selectedQuestion)?.answer}
                </div>
              </div>
            ) : (
              <div className="space-y-3 animate-fadeIn">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    onClick={() => handleQuestionClick(faq.question)}
                    className="p-3 bg-accent/10 hover:bg-accent/20 cursor-pointer rounded-md transition"
                  >
                    <p className="font-medium text-sm">{faq.question}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};