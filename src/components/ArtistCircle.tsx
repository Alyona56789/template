import React from 'react';

type Props = {
  name: string;
  image: string;
};

export function ArtistCircle({ name, image }: Props) {
  return (
    <div className="artist-circle" title={name}>
      <img src={image || '/placeholder.jpg'} alt={name} />
      <div className="artist-name">{name}</div>
    </div>
  );
}

