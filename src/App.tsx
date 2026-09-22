import Loader from "./components/Loader/Loader";
import Face from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { useState, useEffect, useRef } from "react";
import "./styles/index.scss";
import "./components/Hero/Hero.scss";
import type { Product } from "./components/ProductCard/ProductCard";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import Search from "./components/search/Search";
import { SearchX } from "lucide-react";
import SearchLoader from "./components/SearchLoader/SearchLoader";
import Footer from "./components/Footer/Footer";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";

const TARGET_CATEGORIES = [
  "smartphones",
  "laptops",
  "tablets",
  "mobile-accessories",
  "mens-watches",
  "womens-watches",
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=0")
      .then((response) => response.json())
      .then((data) => {
        const filtered = data.products.filter((item: Product) =>
          TARGET_CATEGORIES.includes(item.category),
        );
        setProducts(filtered);
        setIsLoading(false); // Выключаем лоадер, когда всё скачалось и отфильтровалось
      })
      .catch((error) => {
        console.error("Ошибка загрузки:", error);
        setIsLoading(false); // Выключаем лоадер даже если произошла ошибка, чтобы сайт не висел
      });
  }, []);

  const filteredProducts = products.filter((product) => {
    // 1. Проверяем категорию
    let matchesCategory = false;
    if (activeCategory === "all") {
      matchesCategory = true;
    } else if (activeCategory === "watches") {
      // Для «Часов» проверяем оба возможных варианта из API
      matchesCategory =
        product.category === "mens-watches" ||
        product.category === "womens-watches";
    } else {
      // Для остальных категорий (smartphones, laptops и т.д.)
      matchesCategory = product.category === activeCategory;
    }
    // 2. Проверяем поисковый запрос по названию
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    // Товар подходит, если он совпал и по категории, и по поиску
    return matchesCategory && matchesSearch;
  });

  const handleSearch = (query: string) => {
    setIsSearching(true);
    setTimeout(() => {
      setSearchQuery(query);
      setIsSearching(false);
    }, 500);
  };

  const handleCategorySelect = (id: string) => {
    setActiveCategory(id);
  };

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    productsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [activeCategory]);

  return (
    <div className="app">
      {isLoading ? <Loader /> : <Face />}
      <Search onSearch={handleSearch} onTyping={() => setIsSearching(true)} />
      <Hero />

      <CategoryFilter active={activeCategory} onSelect={handleCategorySelect} />

      <div ref={productsRef}>
        {isSearching ? (
          <SearchLoader />
        ) : filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="no-results">
            <SearchX size={40} />
            <p>Товары не найдены</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
