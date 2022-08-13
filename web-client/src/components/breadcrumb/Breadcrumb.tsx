import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Category } from '../../domain/item';
import './Breadcrumb.scss';

type BreadcrumbProps = {
  categories: Array<Category>;
};

export const Breadcrumb = ({ categories }: BreadcrumbProps): JSX.Element => (
  <nav className="categories-breadcrumb">
    {categories.map((category, index) => {
      return (
        <>
          <span key={category.id} className="category">
            {category.name}
          </span>
          {index < categories.length - 1 && (
            <ArrowForwardIosIcon className="breadcrumb-separator" fontSize="small" />
          )}
        </>
      );
    })}
  </nav>
);
