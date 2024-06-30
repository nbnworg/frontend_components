import React from 'react';
interface CategoryProps {
  post: string;
}

const Category: React.FC<CategoryProps> = ({ post }) => {
  return (
    <span className='tracking-widest font-bold rounded-md pl-1 pr-1 bg-gray-100 pt-0.5 pb-0.5 px-0 py-1.5 text-gray-600 text-xs uppercase'>
      {post}
    </span>
  );
};

export default Category;
