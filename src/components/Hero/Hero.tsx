import "./Hero.scss";
import smartwatch from "../img/smartwatch.png";
import laptop from "../img/laptop.png";
import accessories from "../img/accessories.png";
import tablets from "../img/tablets.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
  const slides = [
    {
      title: "Smart Watch",
      description:
        "Смарт-часы для активной жизни — современное устройство для дома, работы и спорта",
      image: smartwatch,
    },
    {
      title: "Laptop",
      description: "Ноутбуки - идеальный выбор для работы и развлечений",
      image: laptop,
    },
    {
      title: "Mobile accessories",
      description: "Аксессуары для техники",
      image: accessories,
    },
    {
      title: "Tablets",
      description: "Планшеты - творчество в ваших руках",
      image: tablets,
    },
  ];

  return (
    <section className="hero">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 30000,
          disableOnInteraction: false,
        }}
        speed={1000}
        className="hero__swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="hero__slide">
            <div className="hero__content">
              <span className="hero__label">{slide.title}</span>

              <h2 className="hero__title">{slide.description}</h2>

              <p className="hero__text">
                Современные устройства для дома, работы и отдыха.
              </p>

              <button className="hero__button">Смотреть</button>
            </div>

            <div className="hero__product">
              <div className="hero__glow"></div>
              <img src={slide.image} alt={slide.title} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
