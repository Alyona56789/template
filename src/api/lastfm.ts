const API_KEY = '41649ce9f1f018f23f6bde1cbb8545f5'; // Вставьте сюда ваш API ключ

const BASE_URL = 'https://ws.audioscrobbler.com/2.0/';

type FetchOptions = {
  method: string;
  params: Record<string, string>;
};

function buildUrl({ method, params }: FetchOptions) {
  const url = new URL(BASE_URL);
  url.searchParams.append('method', method);
  url.searchParams.append('api_key', API_KEY);
  url.searchParams.append('format', 'json');
  Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));
  return url.toString();
}

export async function getTopArtists(limit = 10) {
  const url = buildUrl({ method: 'chart.gettopartists', params: {} });
  const res = await fetch(url);
  const data = await res.json();
  return data.artists.artist.slice(0, limit);
}

export async function getTopTracks(limit = 15) {
  const url = buildUrl({ method: 'chart.gettoptracks', params: {} });
  const res = await fetch(url);
  const data = await res.json();
  return data.tracks.track.slice(0, limit);
}

export async function searchArtists(query: string) {
  const url = buildUrl({ method: 'artist.search', params: { artist: query } });
  const res = await fetch(url);
  const data = await res.json();
  return data.results.artistmatches.artist || [];
}

export async function searchAlbums(query: string) {
  const url = buildUrl({ method: 'album.search', params: { album: query } });
  const res = await fetch(url);
  const data = await res.json();
  return data.results.albummatches.album || [];
}

export async function searchTracks(query: string) {
  const url = buildUrl({ method: 'track.search', params: { track: query } });
  const res = await fetch(url);
  const data = await res.json();
  return data.results.trackmatches.track || [];
}
