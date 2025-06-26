import React, { type JSX, type ReactElement } from 'react';

export interface BreadcrumbItemProps {
  href?: string;
  isCurrent?: boolean;
}

export const BreadcrumbItem = ({
  isCurrent = true,
  href,
}: BreadcrumbItemProps): ReactElement => {
  return (
    <li className="breadcrumbItem">
      {href && !isCurrent ? (
        <a href={href} aria-current="page">
          <span></span>
        </a>
      ) : (
        <span aria-current="page"></span>
      )}
    </li>
  );
};
