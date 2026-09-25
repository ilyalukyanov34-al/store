import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductPage.scss";
import {
  ArrowLeft,
  Star,
  ShoppingBag,
  Check,
  ShieldCheck,
  Truck,
  Tag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { Product } from "../components/ProductCard/ProductCard";

type FullProduct = {
  images?: string[];
  brand?: string;
  stock?: number;
  discountPercentage?: number;
  description: string;
};

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products/" + id)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка:", err);
        setIsLoading(false);
      });
  }, [id]);

  if (!isLoading && !product) {
    return (
      <div className="product__not-found">
        <h2>Товар не найден</h2>
        <Link to="/">Вернуться в каталог</Link>
      </div>
    );
  }

  const nextSlide = () => {
    if (product?.images) {
      setCurrentIndex((prev) => (prev + 1) % product.images.length);
    }
  };

  const prevSlide = () => {
    if (product?.images) {
      setCurrentIndex(
        (prev) => (prev - 1 + product.images.length) % product.images.length,
      );
    }
  };

  return (
    <div className="product">
      <div className="product__left">
        <Link to="/" className="product__left-out">
          <ArrowLeft size={20} /> Назад к каталогу
        </Link>
        {isLoading ? (
          <div>Загрузка...</div>
        ) : product && product.images ? (
          <div className="product__left-image">
            <button
              className="product__left-slider product__left-slider_prev"
              onClick={prevSlide}
            >
              <ChevronLeft size={20} />
            </button>
            <img src={product.images[currentIndex]} alt="Product" />

            <button
              className="product__left-slider product__left-slider_next"
              onClick={nextSlide}
            >
              <ChevronRight size={20} />
            </button>

            {/* Миниатюры теперь здесь, внутри проверки! */}
            <div className="product__left-thumbnails">
              {product.images.map((imgUrl, index) => (
                <button
                  key={index}
                  className={
                    index === currentIndex
                      ? "product__thumb active"
                      : "product__thumb"
                  }
                  onClick={() => setCurrentIndex(index)}
                >
                  <img src={imgUrl} alt="Thumbnail" />
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <div className="product__right">
        <div className="product__right-brand">{product?.brand}</div>
        <h1 className="product__right-title">{product?.title}</h1>

        <div className="product__right-meta">
          <div className="product__right-rating">
            <Star size={16} fill="#f59e0b" color="#f59e0b" />
            <span>{product?.rating}</span>
          </div>
          <div className="product__right-stock">
            <ShieldCheck size={18} />
            <span>
              {product?.stock && product.stock > 0
                ? `В наличии: ${product.stock} шт.`
                : "Нет в наличии"}
            </span>
          </div>
        </div>

        <div className="product__right-box">
          <div className="product__right-price">${product?.price}</div>
          {product?.discountPercentage ? (
            <div className="product__right-discount">
              Скидка: -{product.discountPercentage}%
            </div>
          ) : null}
        </div>

        <p className="product__right-description">{product?.description}</p>

        <button
          className={
            isAdded ? "product__right-add added" : "product__right-add"
          }
          onClick={() => setIsAdded(!isAdded)}
        >
          {isAdded ? (
            <>
              <Check size={18} /> Добавлено
            </>
          ) : (
            <>
              <ShoppingBag size={18} /> В корзину
            </>
          )}
        </button>

        <div className="product__right-features">
          <div>
            <Truck size={16} /> Быстрая доставка
          </div>
          <div>
            <ShieldCheck size={16} /> Гарантия 1 год
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
