import React, { useState } from 'react';
import './Carousel.css';

const slides = [
  "O coração é o órgão responsável por nos manter vivos, bombeando sangue para todas as partes do nosso corpo. É como um motor que mantém nossa máquina funcionando.",
  "É como um sistema de fios elétricos que mantém o coração batendo no ritmo certo.",
  "As células do coração se organizam em um lugar chamado nó sinoatrial e enviam sinais elétricos pelo coração, fazendo-o se contrair."
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
        <p className="carousel-text">{slides[currentIndex]}</p>
      </div>
      <button className="carousel-button right" onClick={nextSlide}>›</button>
    </div>
  );
};

export default Carousel;
