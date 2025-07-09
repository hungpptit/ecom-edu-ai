import { type Product } from "../types/product";
import "../styles/ProductModal.css";

interface Props {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<Props> = ({ product, onClose }) => {
  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
        <img src={product.image} alt={product.name} className="modalImage" />
        <div className="modalContent">
          <h2 className="modalTitle">{product.name}</h2>
          <p className="modalPrice">{product.price.toLocaleString()}₫</p>
          <p><strong>Ngôn ngữ:</strong> {product.language}</p>
          <p><strong>Đánh giá:</strong> ⭐ {product.rating} / 5</p>
          {product.description && (
        <p className="description"><em>{product.description}</em></p>
        )}

        <p className="modalDesc">{product.longDesc}</p>

        <p className="shortDesc">{product.shortDesc}</p>
          <div className="modalActions">
            <button className="tryBtn">Thử ngay</button>
            <button className="closeBtn" onClick={onClose}>Đóng</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
