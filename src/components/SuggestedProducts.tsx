import React from "react";
import { type Product } from "../types/product";
import ProductCard from "./ProductCard";

interface Props {
  title?: string;
  products: Product[];
}

const SuggestedProducts: React.FC<Props> = ({ title = "Gợi ý cho bạn", products }) => {
  if (!products || products.length === 0) return null;

  return (
    <div className="suggested-wrapper">
      <h2 className="section-title">{title}</h2>
      <div className="horizontal-scroll">
        {products.map((product) => (
          <div key={`suggest-${product.id}`} className="card-wrapper">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedProducts;
