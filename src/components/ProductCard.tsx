import { type Product } from "../types/product";
import "../styles/ProductCard.css";
import { useState, useEffect } from "react";
import ProductModal from "./ProductModal";
import { useNavigate } from "react-router-dom";



interface Props {
  product: Product;
  onUnfavorite?: (productId: number) => void;
}

const ProductCard: React.FC<Props> = ({ product, onUnfavorite }) => {
  const [liked, setLiked] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

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
    setShowModal(true);
  };
  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.25 && rating - fullStars < 0.75;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {Array(fullStars).fill(0).map((_, i) => (
          <span key={`full-${i}`} className="star">★</span>
        ))}
        {hasHalfStar && <span className="star half">★</span>}
        {Array(emptyStars).fill(0).map((_, i) => (
          <span key={`empty-${i}`} className="star empty">★</span>
        ))}
      </>
    );
  };


  return (
    <>
      <div className="card" onClick={handleCardClick}>
        <span className="border-line top"></span>
        <span className="border-line right"></span>
        <span className="border-line bottom"></span>
        <span className="border-line left"></span>

        <img src={product.image} alt={product.name} className="image" />
        <div className="content">
          <h3 className="title">{product.name}</h3>
          <p className="price">{product.price.toLocaleString()}₫</p>
          <p className="shortDesc">{product.shortDesc}</p>
          <div className="rating">
            {renderStars(product.rating)}
            <span className="reviewCount">(260)</span>
          </div>
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

      {showModal && (
        <ProductModal
          product={product}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );

};

export default ProductCard;
