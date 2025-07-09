import { useState } from "react";
import { products } from "../data/products";
import "../styles/ChatWidget.css";
type ChatMessage = {
  from: "user" | "bot";
  text?: string;
  element?: React.ReactNode; 
};
const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const matched = products.filter(
      (p) =>
        input.toLowerCase().includes("tiếng anh") &&
        p.name.toLowerCase().includes("tiếng anh")
    );

    if (matched.length) {
      const product = matched[0];

      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          element: (
            <ProductCard
              name={product.name}
              price={product.price}
              description={product.description}
            />
          ),
        },
      ]);
    } else {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "❌ Xin lỗi, tôi chưa tìm thấy khóa học phù hợp." },
      ]);
    }

    setInput("");
  };

  const ProductCard = ({ name, price, description }: { name: string; price: number; description?: string }) => (
    <div className="product-card">
      <strong>{name}</strong>
      <div>{price.toLocaleString()}₫</div>
      {description && <div style={{ fontSize: "0.9em", color: "#555" }}>{description}</div>}
    </div>
  );

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">🤖 Chatbot tư vấn sản phẩm</div>
          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.from}`}>
                {msg.text && <div>{msg.text}</div>}
                {msg.element && <div>{msg.element}</div>}

              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Bạn muốn học gì?"
            />
            <button onClick={handleSend}>Gửi</button>
          </div>
        </div>
      )}

      <button className="chat-toggle" onClick={toggleChat}>
        {isOpen ? "✖" : "💬"}
      </button>
    </div>
  );
};

export default ChatWidget;
