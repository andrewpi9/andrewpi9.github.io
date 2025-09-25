import React from 'react';
import './Card.css';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
}) => {
  const cardClasses = `card ${hover ? 'card--hover' : ''} ${className}`;

  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};

export default Card;