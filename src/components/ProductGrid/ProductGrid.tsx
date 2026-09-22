import type { Product } from "../ProductCard/ProductCard";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.scss"

const ProductGrid = (props: { products: Product[] }) => {
  return (
    <div className="product-grid">
      {props.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
