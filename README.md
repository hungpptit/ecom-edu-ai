# 🧠 EduAI – Nền tảng thương mại giáo dục sử dụng AI

> EduAI là một nền tảng bán khóa học trực tuyến, hỗ trợ tìm kiếm, gợi ý và tư vấn bằng AI. Giao diện đẹp, dễ dùng, tích hợp chatbot hỗ trợ người học tìm đúng sản phẩm phù hợp.

## 🚀 Tính năng nổi bật

- Tìm kiếm khóa học theo từ khóa, bộ lọc giá, ngôn ngữ
- Gợi ý sản phẩm dựa trên nhu cầu nhập vào
- Chatbot tư vấn sản phẩm đơn giản (mock AI)
- Đăng ký, đăng nhập, yêu thích sản phẩm
- Hiển thị sản phẩm đã xem gần đây

## 🧩 Công nghệ sử dụng

- ⚛️ React + TypeScript
- 💬 Chatbot UI tùy chỉnh
- 📦 Fake API với dữ liệu mock

## 🧪 Hướng dẫn cài đặt & chạy local

### 1. Clone dự án

```bash
git clone https://github.com/hungpptit/ecom-edu-ai.git
cd ecom-edu-ai
```  

### 2. Cài đặt dependencies

```bash
npm install
# hoặc nếu bạn dùng yarn:
# yarn install
```

### 3. Chạy dự án ở môi trường phát triển
```bash
npm run dev
# hoặc
# yarn dev
```
## 📌 Ghi chú
- Chatbot AI hoạt động đơn giản dựa trên từ khóa và danh sách sản phẩm mẫu.

- Dữ liệu sản phẩm hiện đang được mock sẵn (/src/data/products.ts).

- Tất cả trạng thái (favorites, chat) đang được lưu ở client (LocalStorage / useState).
