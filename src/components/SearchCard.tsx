import React from 'react';

type Props = {
  title: string;
  subtitle?: string;
  image?: string;
};

export function SearchCard({ title, subtitle, image }: Props) {
  return (
    <div className="search-card">
      {image && <img src={image || '/placeholder.jpg'} alt={title} />}
      <div>
        <b>{title}</b>
        {subtitle && <div>{subtitle}</div>}
      </div>
    </div>
  );
}
