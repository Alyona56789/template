import React from 'react';

export function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Компания</h4>
          <ul>
            <li><a href="#">О Last.fm</a></li>
            <li><a href="#">Контакты</a></li>
            <li><a href="#">Работа у нас</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Помощь</h4>
          <ul>
            <li><a href="#">Треки и музыка</a></li>
            <li><a href="#">Поддержка сообщества</a></li>
            <li><a href="#">Правила сообщества</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Аккаунт</h4>
          <ul>
            <li><a href="#">Вход</a></li>
            <li><a href="#">Настройки</a></li>
            <li><a href="#">Подписка Pro</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Мы в соцсетях</h4>
          <ul>
            <li><a href="#" aria-label="Facebook">Facebook</a></li>
            <li><a href="#" aria-label="Twitter">Twitter</a></li>
            <li><a href="#" aria-label="Instagram">Instagram</a></li>
            <li><a href="#" aria-label="YouTube">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 Last.fm .Все права защищены.
      </div>
    </footer>
  );
}
