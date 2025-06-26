'use client';
import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: 'Kollab est fait pour moi si je suis ou ne suis pas freelance ?',
    answer: 'Notre service vous permet de faire XYZ facilement via notre interface simple.'
  },
  {
    question: 'Rejoindre Kollab est payant ?',
    answer: 'Nous acceptons les cartes bancaires, PayPal, et Apple Pay.'
  },
  {
    question: 'Qu’est-ce que Kollab va m’apporter en tant qu’indépendant ?',
    answer: 'Oui, vous pouvez annuler à tout moment depuis votre compte utilisateur.'
  },
  {
    question: 'Suis-je restreint par ma localisation pour utiliser Kollab ?',
    answer: 'Oui, vous pouvez annuler à tout moment depuis votre compte utilisateur.'
  },
  {
    question: 'Comment contacter Kollab ?',
    answer: 'Oui, vous pouvez annuler à tout moment depuis votre compte utilisateur.'
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border w-full h-20 grid justify-items-center items-center relative">
            <button
              onClick={() => toggle(index)}
              className="w-full h-full text-start pl-5"
            >
              {item.question}
            </button>
            <span className='text-4xl absolute right-5'>{openIndex === index ? '-' : '+'}</span>
            {openIndex === index && (
              <p className="mt-1 text-gray-700 text-start w-full pl-5">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
