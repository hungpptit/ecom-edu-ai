import { type Product } from "../types/product";
import "../styles/ProductCard.css";
import { useState, useEffect } from "react";

interface Props {
  product: Product;
  onUnfavorite?: (productId: number) => void;
}

const ProductCard: React.FC<Props> = ({ product, onUnfavorite }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      try {
        const favorites: Product[] = JSON.parse(stored);
        const exists = favorites.find((p) => p.id === product.id);
        if (exists) setLiked(true);
      } catch {
        setLiked(false);
      }
    }
  }, [product.id]);

  const handleLike = () => {
    const stored = localStorage.getItem("favorites");
    let updated: Product[] = [];

    if (stored) {
      try {
        updated = JSON.parse(stored);
      } catch {
        updated = [];
      }
    }

    const exists = updated.find((p) => p.id === product.id);
    if (exists) {
      updated = updated.filter((p) => p.id !== product.id);
      setLiked(false);
      localStorage.setItem("favorites", JSON.stringify(updated));
      onUnfavorite?.(product.id); // Gọi callback nếu có
    } else {
      updated.push(product);
      setLiked(true);
      localStorage.setItem("favorites", JSON.stringify(updated));
    }
  };

  const handleDetail = () => {
    const stored = localStorage.getItem("viewed");
    let viewed: Product[] = stored ? JSON.parse(stored) : [];
    viewed = viewed.filter((p) => p.id !== product.id);
    viewed.unshift(product);
    if (viewed.length > 10) viewed = viewed.slice(0, 10);
    localStorage.setItem("viewed", JSON.stringify(viewed));
    alert(`Chi tiết sản phẩm: ${product.name}`);
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="image" />
      <div className="content">
        <h3 className="title">{product.name}</h3>
        <p className="price">{product.price.toLocaleString()}₫</p>
        <p className="shortDesc">{product.shortDesc}</p>
        <div className="actions">
          <button onClick={handleDetail} className="detailBtn">
            Xem chi tiết
          </button>
          <button onClick={handleLike} className="likeBtn">
            {liked ? "💖 Đã thích" : "🤍 Yêu thích"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
