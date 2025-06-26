import './breadcrumbList.css';

import React from 'react';

export interface BreadcrumbListProps {
  children: React.ReactNode;
}

export const BreadcrumbList = ({ children }: BreadcrumbListProps) => {
  const items = React.Children.toArray(children);

  return (
    <nav className="breadcrumbList" aria-label="パンくずリスト">
      <ol>
        {items.map((item, index) => (
          <React.Fragment key={index}>{item}</React.Fragment>
        ))}
      </ol>
    </nav>
  );
};
