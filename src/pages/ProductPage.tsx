import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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

  return (
    <div className="product">
      <div className="product__left">
        <Link to="/">
          <ArrowLeft size={20} /> Назад к каталогу
        </Link>
      </div>
      <div className="product__right"></div>
    </div>
  );
};

export default ProductPage;
