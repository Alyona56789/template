import React, { useEffect, useState } from 'react';
import { getTopArtists, getTopTracks } from '../api/lastfm';
import { ArtistCircle } from '../components/ArtistCircle';
import { TrackItem } from '../components/TrackItem';

export function Home() {
  const [artists, setArtists] = useState<any[]>([]);
  const [tracks, setTracks] = useState<any[]>([]);
  const [loadingArtists, setLoadingArtists] = useState(true);
  const [loadingTracks, setLoadingTracks] = useState(true);

  useEffect(() => {
    getTopArtists()
      .then(data => setArtists(data))
      .finally(() => setLoadingArtists(false));
    getTopTracks()
      .then(data => setTracks(data))
      .finally(() => setLoadingTracks(false));
  }, []);

  // Разбиваем треки на 3 колонки
  const columns = [[], [], []] as any[][];
  tracks.forEach((track, i) => columns[i % 3].push(track));

  return (
    <main className="main-content">
      <h1>Music</h1>

      <section>
        <h2>Hot right now</h2>
        {loadingArtists ? (
          <p>Загрузка исполнителей...</p>
        ) : (
          <div className="artists-circles">
            {artists.map(artist => (
              <ArtistCircle
                key={artist.mbid || artist.name}
                name={artist.name}
                image={artist.image[3]['#text'] || '/placeholder.jpg'}
              />
            ))}
          </div>
        )}
      </section>

      <section>
        <h2>Popular tracks</h2>
        {loadingTracks ? (
          <p>Загрузка треков...</p>
        ) : (
          <div className="tracks-columns">
            {columns.map((col, i) => (
              <ul key={i}>
                {col.map(track => (
                  <TrackItem
                    key={track.mbid || track.name}
                    name={track.name}
                    artist={track.artist.name}
                    image={track.image[2]['#text'] || '/placeholder.jpg'}
                  />
                ))}
              </ul>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

