import "./Footer.scss";
import telegram from "../img/telegram.svg";
import insta from "../img/insta.svg";
import { Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <h2 className="footer__logo">lukyanov</h2>
          <p className="footer__desc">
            Твой надёжный магазин современной электроники и гаджетов.
          </p>
          <div className="footer__socials">
            <a href="#">
              <img src={telegram} alt="" />
            </a>
            <a href="#">
              <img src={insta} alt="" />
            </a>
          </div>
        </div>

        <div className="footer__column">
          <h3>Каталог</h3>
          <a href="#">Смартфоны</a>
          <a href="#">Ноутбуки</a>
          <a href="#">Планшеты</a>
          <a href="#">Аксесуары</a>
          <a href="#">Часы</a>
        </div>

        <div className="footer__subscribe">
          <h3>Новости и акции</h3>
          <p>Подпишись на канал и узнавай о скидках первым</p>
          <div className="footer__subscribe-input">
            <input type="email" placeholder="Твой email" />
            <button>
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 lukyanov. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
