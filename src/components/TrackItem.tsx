import React from 'react';

type Props = {
  name: string;
  artist: string;
  image: string;
};

export function TrackItem({ name, artist, image }: Props) {
  return (
    <li className="track-item" title={`${name} — ${artist}`}>
      <img src={image || '/placeholder.jpg'} alt={name} />
      <div>
        <b>{name}</b>
        <div className="track-artist">{artist}</div>
      </div>
    </li>
  );
}

