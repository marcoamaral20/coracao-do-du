import React, { useState } from 'react';
import './Carousel.css';

const slides = [
  [
    "O coração é o órgão responsável por nos manter vivos, bombeando sangue para todas as partes do nosso corpo. É como um motor que mantém nossa máquina funcionando.",
    "O coração bombeia o sangue através de uma rede de vasos sanguíneos. As artérias levam o sangue para longe do coração, as veias trazem de volta."
  ],
  [
    "É como um sistema de fios elétricos que mantém o coração batendo no ritmo certo.",
    "Em média, o coração de um homem pesa cerca de 283 gramas, enquanto o de uma mulher pesa cerca de 227 gramas."
  ],
  [
    "As células do coração se organizam em um lugar chamado nó sinoatrial e enviam sinais elétricos pelo coração, fazendo-o se contrair.",
    "Cada batida do coração acontece graças a um grupo especial de células que gera eletricidade."
  ]
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button className="carousel-button left" onClick={prevSlide}>‹</button>
      <div className="carousel-text-container">
        <p className="carousel-text left">{slides[currentIndex][0]}</p>
        <p className="carousel-text right">{slides[currentIndex][1]}</p>
      </div>
      <button className="carousel-button right" onClick={nextSlide}>›</button>
    </div>
  );
};

export default Carousel;
