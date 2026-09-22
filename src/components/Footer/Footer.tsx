// import { Instagram, Facebook, Twitter, Send } from "lucide-react";

// const Footer = () => {
//   return (
//     <div className="footer">
//       <div className="footer__left">
//         <div className="footer__left-logo">
//           <h1 className="footer__left-logo_brand">Lukyanov</h1>
//           <p className="footer__left-logo_brand">
//             Твой надёжный магазин современной электроники и гаджетов.
//           </p>
//         </div>
//         <div className="footer__left-social">
//           <a href="#">
//             <Instagram size={18} />
//           </a>
//           <a href="#">
//             <Facebook size={18} />
//           </a>
//           <a href="#">
//             <Twitter size={18} />
//           </a>
//           <p className="footer__left-phrase">Lukyanov на связи</p>
//         </div>
//       </div>

//         <div className="footer__right">
//             <h3 className="footer__right__title">Новости и акции</h3>
//             <p className="footer__right-sale">Оставь отзыв и узнавай о скидках первым</p>
//         </div>

//     </div>
//   );
// };

// export default Footer;

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
            <a href="">
              <img src={telegram} alt="" />
            </a>
            <a href="">
              <img src={insta} alt="" />
            </a>
          </div>
        </div>

        <div className="footer__column">
          <h3>Каталог</h3>
          <p>Смартфоны</p>
          <p>Ноутбуки</p>
          <p>Планшеты</p>
          <p>Аксессуары</p>
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
