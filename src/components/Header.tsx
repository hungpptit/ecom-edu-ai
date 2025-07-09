import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goHome = () => navigate("/");
  const goFavorites = () => navigate("/favorites");
  const goLogin = () => navigate("/login");
  const goSignup = () => navigate("/signup");

  return (
    <header className="main-header">
      <div className="header-container">
        <h1 className="brand" onClick={goHome}>
          🎓 EduAI
        </h1>

        <nav className="nav-right">
          <div className="nav-links">
            <button
              onClick={goHome}
              className={`nav-btn ${location.pathname === "/" ? "active" : ""}`}
            >
              Trang chủ
            </button>
            <button
              onClick={goFavorites}
              className={`nav-btn ${
                location.pathname === "/favorites" ? "active" : ""
              }`}
            >
              Yêu thích
            </button>
          </div>

          <div className="auth-buttons">
            <button
              className="auth-btn login-btn"
              onClick={goLogin}
            >
              Đăng nhập
            </button>
            <button
              className="auth-btn signup-btn"
              onClick={goSignup}
            >
              Đăng ký
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
