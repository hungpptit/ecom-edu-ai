import { useEffect, useState } from "react";
import { type Product } from "../types/product";
import ProductCard from "../components/ProductCard";
import "../styles/Favorites.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      try {
        const parsed: Product[] = JSON.parse(stored);
        setFavorites(parsed);
      } catch (e) {
        console.error("Không thể parse favorites từ localStorage:", e);
      }
    }
  }, []);

  const handleUnfavorite = (productId: number) => {
    setFavorites((prev) => prev.filter((p) => p.id !== productId));
  };

  return (
    <div className="favorites-container">
      <h1 className="favorites-title">Danh sách yêu thích</h1>

      {favorites.length === 0 ? (
        <p>Bạn chưa có sản phẩm nào trong danh sách yêu thích.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onUnfavorite={handleUnfavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
