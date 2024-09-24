"use client"
import React, { useState } from 'react';

import "/public/css/FaqPage.css";
import { useRouter } from 'next/navigation';
const FaqPage = () => {
  const router = useRouter();
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const faqs = [
    
    {
      id: 1,
      question: '매너온도는 어떻게 계산되나요?',
      answer: '매너온도는 사용자의 거래 평가 및 상호작용에 따라 변화합니다.'
    },
    {
      id: 2,
      question: '고객 확인 제도란 무엇인가요?',
      answer: '고객 확인 제도는 거래 시 안전을 보장하기 위한 제도입니다.'
    },
    {
      id: 3,
      question: '거래가 취소되면 어떻게 해야 하나요?',
      answer: '거래가 취소될 경우, 고객센터를 통해 지원을 요청할 수 있습니다.'
    },
  ];

  const handleQuestionClick = (id) => {
    setSelectedQuestion(selectedQuestion === id ? null : id);
  };

  function goQ(){
    router.push('/customer/question');
  }
  return (
    <div className="faq-container">
      <h1 className="faq-title">자주 묻는 질문 🍊</h1>
      <ul className="faq-list">
        {faqs.map(faq => (
          <li key={faq.id} className="faq-item" onClick={() => handleQuestionClick(faq.id)}>
            <div className="faq-question">
              {faq.question}
            </div>
            {selectedQuestion === faq.id && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </li>
        ))}
      </ul>

      <div className="help-section">
        <h2>도움이 필요하신가요?</h2>
        <button className="inquiry-button" onClick={goQ}>문의하기</button>
      </div>
    </div>
  );
};

export default FaqPage;
