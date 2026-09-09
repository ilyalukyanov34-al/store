import "../styles/Loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__stars loader__stars--sm"></div>,{" "}
      <div className="loader__stars loader__stars--md"></div>,{" "}
      <div className="loader__stars loader__stars--lg"></div>
      <div className="loader__top">
        <div className="loader__glow"></div>
        <h1 className="loader__logo">Lukyanov</h1>
      </div>
      <div className="loader__bottom">
        <p className="loader__caption">Loading...</p>
        <div className="loader__bar">
          <div className="loader__bar-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
