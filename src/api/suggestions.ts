// src/api/suggestions.ts
import { type Product } from "../types/product";

export const fetchSuggestions = (userId: string): Promise<Product[]> => {
    console.log(`[Gợi ý AI] Đang lấy gợi ý cho user: ${userId}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomFail = Math.random() < 0.2;
      if (randomFail) return reject(new Error("Không thể lấy gợi ý lúc này"));
      resolve([
        {
    id: 1,
    name: "Tiếng Anh giao tiếp với người bản xứ",
    price: 500000,
    image: "/images/english-course.jpg",
    shortDesc: "Phát âm chuẩn, phản xạ nhanh",
    longDesc: "Khoá học nâng cao khả năng nói và phản xạ thực tế...",
    rating: 4.8,
    language: "English",
    description: "Phát âm chuẩn, phản xạ nhanh",
  },
  {
    id: 2,
    name: "Tiếng Nhật cho người mới bắt đầu",
    price: 1200000,
    image: "/images/japanese-course.jpg",
    shortDesc: "Tự tin giao tiếp cơ bản",
    longDesc: "Khoá học tiếng Nhật nền tảng cho người mới bắt đầu...",
    rating: 4.7,
    language: "Japanese",
    description: "Phát âm chuẩn, phản xạ nhanh",
  },
  {
    id: 3,
    name: "Tiếng Hàn nhập môn",
    price: 800000,
    image: "/images/korean-course.png",
    shortDesc: "Bảng chữ cái, phát âm chuẩn",
    longDesc: "Học bảng chữ cái và giao tiếp cơ bản tiếng Hàn...",
    rating: 4.5,
    language: "Korean",
    description: "Phát âm chuẩn, phản xạ nhanh",
  },
  {
    id: 4,
    name: "Tiếng Trung sơ cấp",
    price: 750000,
    image: "/images/chinese-course.jpg",
    shortDesc: "Giao tiếp và phát âm cơ bản",
    longDesc: "Khoá học dành cho người học tiếng Trung từ đầu...",
    rating: 4.6,
    language: "Chinese",
    description: "Phát âm chuẩn, phản xạ nhanh",
  },
  {
    id: 5,
    name: "Tiếng Anh nâng cao phản xạ",
    price: 1200000,
    image: "/images/english-course.jpg",
    shortDesc: "Nâng cao phản xạ và từ vựng",
    longDesc: "Học nói tiếng Anh lưu loát qua các tình huống thực tế...",
    rating: 4.9,
    language: "English",
    description: "Phát âm chuẩn, phản xạ nhanh",
  },
  
      ]);
    }, 1000);
  });
};
