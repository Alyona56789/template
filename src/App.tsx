import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { SearchPage } from './pages/SearchPage';

type Page = 'home' | 'search';

function App() {
  const [page, setPage] = useState<Page>('home');

  return (
    <>
      <Header onChangePage={setPage} currentPage={page} />
      {page === 'home' && <Home />}
      {page === 'search' && <SearchPage />}
      <Footer />
    </>
  );
}

export default App;

