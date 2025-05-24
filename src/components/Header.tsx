import React from 'react';

type Props = {
  onChangePage: (page: 'home' | 'search') => void;
  currentPage: 'home' | 'search';
};

export function Header({ onChangePage, currentPage }: Props) {
  return (
    <header className="main-header">
      <div className="logo" onClick={() => onChangePage('home')} style={{ cursor: 'pointer' }}>
        last.<span>fm</span>
      </div>
      <nav>
        <button
          className={currentPage === 'home' ? 'active' : ''}
          onClick={() => onChangePage('home')}
          aria-current={currentPage === 'home' ? 'page' : undefined}
        >
          Главная
        </button>
        <button
          className={currentPage === 'search' ? 'active' : ''}
          onClick={() => onChangePage('search')}
          aria-current={currentPage === 'search' ? 'page' : undefined}
        >
          Поиск
        </button>
      </nav>
    </header>
  );
}
