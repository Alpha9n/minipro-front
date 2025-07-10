import { type ReactElement, type ReactNode } from 'react';

import './breadcrumbItem.css';

export interface BreadcrumbItemProps {
  href?: string;
  isCurrent?: boolean;
  children: ReactNode;
}

export const BreadcrumbItem = ({
  isCurrent = true,
  href,
  children,
}: BreadcrumbItemProps): ReactElement => {
  return (
    <li className="breadcrumbItem">
      {(href && !isCurrent) ? (
        <a href={href}>
          <span>{children}</span>
        </a>
      ) : (
        <span aria-current="page">{children}</span>
      )}
    </li>
  );
};
