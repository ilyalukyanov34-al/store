import "./ProductCard.scss";

export type Product = {
  id: number;
  title: string;
  price: number;
  oldPrice?: number; // Старая цена (необязательное поле)
  discountPercentage?: number; // Процент скидки (необязательное поле)
  category: string;
  thumbnail: string;
};

// Создаем форматтер цен
const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const ProductCard = (props: { product: Product }) => {
  const { product } = props;

  return (
    <div className="product__card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product__card-img"
      />
      <p className="product__card-title">{product.title}</p>

      <div className="product__card-prices">
        {/* Актуальная цена */}
        <span className="product__card-price">
          {currencyFormatter.format(product.price)}
        </span>

        {/* Старая цена (отображается только если она есть) */}
        {product.oldPrice && (
          <span className="product__card-old-price">
            {currencyFormatter.format(product.oldPrice)}
          </span>
        )}

        {/* Бейдж со скидкой (отображается только если она есть) */}
        {product.discountPercentage && (
          <span className="product__card-discount">
            -{product.discountPercentage}%
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
