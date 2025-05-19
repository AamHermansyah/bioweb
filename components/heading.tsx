import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  type?: 'h1' | 'h2' | 'h3';
}

const headingStyles = {
  h1: 'text-2xl font-extrabold mb-4',
  h2: 'text-xl font-bold mb-3',
  h3: 'text-lg font-semibold mb-2',
};

const Heading: React.FC<HeadingProps> = ({ children, type = 'h3' }) => {
  const Tag = type; // h1, h2, or h3

  return <Tag className={headingStyles[type]}>{children}</Tag>;
};

export default Heading;
