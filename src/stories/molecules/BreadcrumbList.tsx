import './breadcrumbList.css';
// import './breadcrumbItem.css'

import React, { type JSX, type ReactElement, type ReactNode } from 'react';

export interface BreadcrumbListProps {
  children: ReactNode;
}

export const BreadcrumbList = ({ children }: BreadcrumbListProps) => {
  const items = React.Children.toArray(children);

  return (
    <nav className="breadcrumbList" aria-label="パンくずリスト">
      <ol>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </nav>
  );
};
