import { useParams } from "react-router-dom";
import { products } from "../data/products";
import "../styles/ProductDetail.css";
import SuggestedProducts from "../components/SuggestedProducts";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Sản phẩm không tồn tại.</p>;

  return (
    <>
      <div className="product-detail-container" style={{ marginTop: "80px" }}>
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-price">{product.price.toLocaleString()}₫</p>
          <p className="product-short">{product.shortDesc}</p>
          <p className="product-long">{product.longDesc}</p>
          <p className="product-language">Ngôn ngữ: {product.language}</p>
          <p className="product-rating">Đánh giá: ⭐ {product.rating}</p>
          <button className="try-btn">Try now</button>
        </div>
      </div>

      {/* Gợi ý khoá học cùng ngôn ngữ */}
      <SuggestedProducts
        title="Khoá học cùng ngôn ngữ"
        products={products.filter(
          (p) => p.language === product.language && p.id !== product.id
        )}
      />
    </>
  );
};

export default ProductDetail;
