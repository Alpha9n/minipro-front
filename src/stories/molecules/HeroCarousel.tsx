import React, { useState } from 'react';
import './heroCarousel.css';

export interface HeroCarouselItem {
  imageUrl: string;
  alt?: string;
}

export interface HeroCarouselProps {
  items: HeroCarouselItem[];
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 左矢印を押したときの処理
  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  // 右矢印を押したときの処理
  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  // ドットクリックで表示画像を変更
  const goToIndex = (index: number) => setCurrentIndex(index);

  return (
    <div className="hero-carousel-container">
      <div className="carousel-wrapper">
        {/* 左の矢印 */}
        <button className="arrow left" onClick={goPrev}>
          &#8249;
        </button>

        {/* 画像表示エリア */}
        <div className="carousel-content">
          <img
            src={items[currentIndex].imageUrl}
            className="carousel-image"
            alt={items[currentIndex].alt || 'carousel item'}
          />
        </div>

        {/* 右の矢印 */}
        <button className="arrow right" onClick={goNext}>
          &#8250;
        </button>
      </div>

      {/* 表示箇所（下のバー？みたいなの） */}
      <ul className="carousel-dots">
        {items.map((_, idx) => (
          <li
            key={idx}
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => goToIndex(idx)}
          />
        ))}
      </ul>
    </div>
  );
};
