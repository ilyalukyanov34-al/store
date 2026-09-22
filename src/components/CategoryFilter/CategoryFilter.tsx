import "./CategoryFilter.scss";
import { useRef, useState, useEffect } from "react";

const CATEGORIES = [
  {
    id: "all",
    label: "Все",
  },
  {
    id: "smartphones",
    label: "Смартфоны",
  },
  {
    id: "laptops",
    label: "Ноутбуки",
  },
  {
    id: "tablets",
    label: "Планшеты",
  },
  {
    id: "mobile-accessories",
    label: "Аксессуары",
  },
  {
    id: "watches",
    label: "Часы",
  },
];

type CategoryFilterProps = {
  active: string;
  onSelect: (id: string) => void;
};

const CategoryFilter = (props: CategoryFilterProps) => {
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  function moveIndicator(index: number) {
    const button = btnRefs.current[index];
    if (!button) return;
    const left = button.offsetLeft;
    const width = button.offsetWidth;
    setIndicator({ left, width });
  }
  
  useEffect(() => {
    moveIndicator(0);
  }, []);

  

  return (
    <div className="category__filter">
      <div
        className="category__filter-indicator"
        style={{ left: `${indicator.left}px`, width: `${indicator.width}px` }}
      ></div>
      {CATEGORIES.map((cat, index) => (
        <button
          key={cat.id}
          className={`category__filter-btn ${cat.id === props.active ? "is-active" : ""}`}
          onClick={() => {
            props.onSelect(cat.id);
            moveIndicator(index);
          }}
          ref={(el) => {
            btnRefs.current[index] = el;
          }}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
