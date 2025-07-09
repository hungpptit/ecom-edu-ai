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
          id: 2,
          name: "Tiếng Anh giao tiếp với người bản xứ",
          price: 1200000,
          image: "/images/english-course.jpg",
          shortDesc: "Phát âm chuẩn, phản xạ nhanh",
          longDesc: "Khoá học nâng cao khả năng nói và phản xạ thực tế...",
          rating: 4.8,
        },
        {
          id: 3,
          name: "Tiếng Anh giao tiếp với người bản xứ",
          price: 1200000,
          image: "/images/english-course.jpg",
          shortDesc: "Phát âm chuẩn, phản xạ nhanh",
          longDesc: "Khoá học nâng cao khả năng nói và phản xạ thực tế...",
          rating: 4.8,
        },
        {
          id: 8,
          name: "Tiếng Anh giao tiếp với người bản xứ",
          price: 1200000,
          image: "/images/english-course.jpg",
          shortDesc: "Phát âm chuẩn, phản xạ nhanh",
          longDesc: "Khoá học nâng cao khả năng nói và phản xạ thực tế...",
          rating: 4.8,
        },
        {
          id: 7,
          name: "Tiếng Anh giao tiếp với người bản xứ",
          price: 1200000,
          image: "/images/english-course.jpg",
          shortDesc: "Phát âm chuẩn, phản xạ nhanh",
          longDesc: "Khoá học nâng cao khả năng nói và phản xạ thực tế...",
          rating: 4.8,
        },
      ]);
    }, 1000);
  });
};
