import React, { useEffect, useState } from 'react';
import { searchArtists, searchAlbums, searchTracks } from '../api/lastfm';

export function SearchPage() {
  const [query, setQuery] = useState('');
  const [artists, setArtists] = useState<any[]>([]);
  const [albums, setAlbums] = useState<any[]>([]);
  const [tracks, setTracks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.length < 3) {
      setArtists([]);
      setAlbums([]);
      setTracks([]);
      return;
    }
    setLoading(true);
    Promise.all([
      searchArtists(query),
      searchAlbums(query),
      searchTracks(query),
    ]).then(([a, b, c]) => {
      setArtists(a);
      setAlbums(b);
      setTracks(c);
      setLoading(false);
    });
  }, [query]);

  return (
    <main className="main-content">
      <input
        className="search-input"
        type="text"
        placeholder="Введите минимум 3 символа для поиска"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      {loading && <p>Загрузка...</p>}

      {query.length >= 3 && (
        <>
          <section>
            <h2>Исполнители</h2>
            {artists.length === 0 ? (
              <p>Исполнители не найдены</p>
            ) : (
              <ul className="search-list">
                {artists.map((artist) => (
                  <li key={artist.mbid || artist.name} className="search-list-item">
                    {artist.name}
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section>
            <h2>Альбомы</h2>
            {albums.length === 0 ? (
              <p>Альбомы не найдены</p>
            ) : (
              <ul className="search-list">
                {albums.map((album) => (
                  <li key={album.mbid || album.name} className="search-list-item">
                    <img
                      src={album.image[1]['#text'] || '/placeholder.jpg'}
                      alt={album.name}
                      className="search-list-image"
                    />
                    <div>
                      <b>{album.name}</b> — {album.artist}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section>
            <h2>Треки</h2>
            {tracks.length === 0 ? (
              <p>Треки не найдены</p>
            ) : (
              <ul className="search-list">
                {tracks.map((track) => (
                  <li key={track.mbid || track.name} className="search-list-item">
                    <b>{track.name}</b> — {track.artist}
                  </li>
                ))}
              </ul>
            )}
          </section>
        </>
      )}
    </main>
  );
}

