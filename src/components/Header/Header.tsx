import { Menu, Settings, Heart, ShoppingBag } from "lucide-react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">

        <div className="header__left">
          <button className="header__button" aria-label="Меню">
            <Menu size={21} strokeWidth={1.7} />
          </button>
        </div>

        <a href="/" className="header__logo">
          lukyanov
        </a>

        <div className="header__actions">
          <button className="header__button" aria-label="Настройки">
            <Settings size={19} strokeWidth={1.7} />
          </button>

          <button
            className="header__button header__button--heart"
            aria-label="Избранное"
          >
            <Heart size={20} strokeWidth={1.7} />
          </button>

          <button
            className="header__button header__button--cart"
            aria-label="Корзина"
          >
            <ShoppingBag size={20} strokeWidth={1.7} />
            <span className="header__badge">3</span>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;

