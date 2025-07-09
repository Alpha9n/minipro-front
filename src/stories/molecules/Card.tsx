import React, { useState } from 'react';
import './card.css';

export interface CardProps {
  img?: string;
  title?: string;
  content?: string;
  onclick?: () => void;
  isLocked: boolean;
  advice?: string;
}

export const Card: React.FC<CardProps> = ({
  img,
  title,
  content,
  onclick,
  isLocked = false,
  advice,
}) => {
  return (
    <div className="card" onClick={onclick}>
      {img && <img src={img} className="cardImage" />}
      <div className="cardContent">
        <h3 className="cardTitle">{title}</h3>
        <p className="cardText">{content}</p>
        {isLocked && <span className="cardAdvice">{advice}</span>}
      </div>
    </div>
  );
};
