import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // For toggling chatbot visibility
  const messagesEndRef = useRef(null);

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const userMessage = { sender: "user", text: userInput };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await axios.post("http://localhost:8080/api/chat", {
        text: userInput,
      });
      const botMessage = { sender: "bot", text: response.data };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error communicating with chatbot:", error);
    }

    setUserInput("");
  };

  // Scroll to the bottom of the chat when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Toggle the chatbot open/close
  const toggleChatbot = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Floating Chatbot Button (Image) */}
      <div
        onClick={toggleChatbot}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "transparent",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
          animation: "float 2s ease-in-out infinite", // Floating animation
          transition: "transform 0.3s ease", // Smooth transition on hover
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.1)"; // Scale up on hover
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)"; // Reset scale on hover leave
        }}
      >
        <img
          src="../images/chatbot.jpg" // Your image URL
          alt="Chatbot Icon"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Chatbot Container */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "70px",
            right: "20px",
            maxWidth: "400px",
            width: "300px",
            border: "1px solid #ccc",
            padding: "10px",
            backgroundColor: "#fff",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              height: "300px",
              overflowY: "scroll",
              backgroundColor: "#f9f9f9",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  textAlign: msg.sender === "user" ? "right" : "left",
                  marginBottom: "10px",
                }}
              >
                <strong>{msg.sender}:</strong> {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div
            style={{ marginTop: "10px", display: "flex", alignItems: "center" }}
          >
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              style={{
                width: "70%",
                padding: "8px",
                fontSize: "14px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                marginRight: "10px",
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                width: "28%",
                padding: "8px",
                fontSize: "14px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* CSS for floating animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Chatbot;
