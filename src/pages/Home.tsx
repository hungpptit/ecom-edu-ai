import { useEffect, useState } from "react";
import { type Product } from "../types/product";
import { products as allProducts } from "../data/products";
import { fetchSuggestions } from "../api/suggestions";
import ProductCard from "../components/ProductCard";
import "../styles/Home.css";
// import { useNavigate } from "react-router-dom";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [productList, setProductList] = useState<Product[]>(allProducts);
  const [suggestedProducts, setSuggestedProducts] = useState<Product[] | null>(null);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [error, setError] = useState("");
  const [viewedProducts, setViewedProducts] = useState<Product[]>([]);
  const [languageFilter, setLanguageFilter] = useState("all");
  const availableLanguages = ["all", "Japanese", "English", "Spanish", "Chinese", "French", "Italian", "German", "Portuguese", "Korean", "Arabic"];


  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(productList.length / itemsPerPage);
  const paginatedProducts = productList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  // Lọc sản phẩm theo tên và giá
  const filterProducts = () => {
    let filtered = allProducts;

    if (searchTerm.trim()) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (priceFilter !== "all") {
      filtered = filtered.filter((p) => {
        if (priceFilter === "<500") return p.price < 500000;
        if (priceFilter === "500-1m") return p.price >= 500000 && p.price <= 1000000;
        if (priceFilter === ">1m") return p.price > 1000000;
        return true;
      });
    }

    if (languageFilter !== "all") {
      filtered = filtered.filter((p) => p.language === languageFilter);
    }

    setCurrentPage(1); // reset về trang 1 nếu lọc thay đổi
    setProductList(filtered);
  };


  useEffect(() => {
    filterProducts();
  }, [searchTerm, priceFilter,languageFilter]);

  const handleSuggest = async () => {
    setLoadingSuggestions(true);
    setError("");
    try {
      const suggestions = await fetchSuggestions("user123");
      setSuggestedProducts(suggestions);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoadingSuggestions(false);
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem("viewed");
    if (stored) {
      try {
        const parsed: Product[] = JSON.parse(stored);
        setViewedProducts(parsed);
      } catch {
        setViewedProducts([]);
      }
    }
  }, []);

  

  return (
  <div className="home-container">
    <h1 className="text-2xl font-bold mb-4">Sản phẩm giáo dục</h1>
    {/* <button onClick={() => navigate("/favorites")} className="favorites-link">
      ❤️ Xem danh sách yêu thích
    </button> */}

    {/* Tìm kiếm + Lọc */}
    <div className="search-filter-bar">
      <input
        type="text"
        placeholder="Tìm kiếm khoá học..."
        className="input-field"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        value={priceFilter}
        onChange={(e) => setPriceFilter(e.target.value)}
        className="select-field"
      >
        <option value="all">Tất cả mức giá</option>
        <option value="<500">Dưới 500K</option>
        <option value="500-1m">500K – 1 triệu</option>
        <option value=">1m">Trên 1 triệu</option>
      </select>

      <button onClick={handleSuggest} className="suggest-btn">
        Gợi ý sản phẩm phù hợp
      </button>
    </div>

    <div className="language-filter-bar">
      {availableLanguages.map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguageFilter(lang)}
          className={`lang-btn ${languageFilter === lang ? "active" : ""}`}
        >
          {lang}
        </button>
      ))}
    </div>

    {/* Thông báo lỗi */}
    {error && <p className="error-text">{error}</p>}

    {/* Loading skeleton */}
    {loadingSuggestions && (
      <p className="animate-pulse text-gray-500">Đang lấy gợi ý thông minh...</p>
    )}
    {/* Lịch sử xem */}
    {viewedProducts.length > 0 && (
      <div className="viewed-section">
        <h2 className="section-title">Đã xem gần đây</h2>
        <div className="viewed-scroll-container">
          {viewedProducts.map((product) => (
            <div className="viewed-card" key={`viewed-${product.id}`}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    )}


    {/* Gợi ý sản phẩm */}
    {suggestedProducts && (
      <div className="suggested-wrapper">
        <h2 className="section-title">Gợi ý cho bạn</h2>
        <div className="horizontal-scroll">
          {suggestedProducts.map((product) => (
            <div key={`suggest-${product.id}`} className="card-wrapper">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    )}

    {/* Danh sách sản phẩm */}
    <div className="mb-6">
      <h2 className="section-title">Tất cả khoá học</h2>
      <div className="grid-container">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    {totalPages > 1 && (
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`page-btn ${page === currentPage ? "active" : ""}`}
          >
            {page}
          </button>
        ))}
      </div>
    )}
  </div>
);

};

export default Home;

// Note: Bạn cần tạo thêm file ProductCard.tsx để hiển thị sản phẩm
