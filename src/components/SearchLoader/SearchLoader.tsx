import "./SearchLoader.scss";

const SearchLoader = () => {
  return (
    <div className="search__loader">
      <div className="search__loader-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p className="search__loader-text">Подбираем лучшие товары</p>
    </div>
  );
};

export default SearchLoader;
