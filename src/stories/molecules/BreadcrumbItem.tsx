import React from 'react';

export interface BreadcrumbItemProps {
  href?: string;
  isCurrent?: boolean;
  children: React.ReactNode;
}

export const BreadcrumbItem = ({
  isCurrent = false,
  href,
  children,
}: BreadcrumbItemProps) => {
  return (
    <li className="breadcrumbItem">
      {href && isCurrent ? (
        <a href={href}>
          <span>{children}</span>
        </a>
      ) : (
        <span>{children}</span>
      )}
    </li>
  );
};
