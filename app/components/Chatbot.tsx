"use client";
import Image from "next/image";
import { X, Send } from "lucide-react";
import React, {
  useState,
  useEffect,
  useRef,
  FormEvent,
} from "react";
import ReactMarkdown from "react-markdown";
import chatService from "../utils/chatService";

interface Message {
  text: string;
  sender: "user" | "assistant" | "system";
}

const Chatbot = (): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Control body scroll when chatbot is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;
    try {
      setIsLoading(true);
      const userMessage: Message = {
        text: inputMessage,
        sender: "user",
      };
      setMessages((prev) => [...prev, userMessage]);
      const currentInput = inputMessage;
      setInputMessage("");
      const response = await chatService.sendMessage(currentInput);
      if (response.success) {
        setMessages((prev) => [
          ...prev,
          {
            text: response.message,
            sender: "assistant",
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            text: `Error: ${response.message}`,
            sender: "system",
          },
        ]);
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I encountered an error. Please try again.",
          sender: "system",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderMessage = (
    text: string,
    sender: Message["sender"]
  ): React.ReactNode => {
    if (sender === "user") {
      return <div className="text-white">{text}</div>;
    } else if (sender === "system") {
      return <div className="text-red-600 text-sm">{text}</div>;
    }
    return (
      <div className="prose prose-sm max-w-none">
        <ReactMarkdown
          components={{
            p: ({ children }) => <p className="mb-2">{children}</p>,
            ul: ({ children }) => (
              <ul className="list-disc pl-4 mb-2">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal pl-4 mb-2">{children}</ol>
            ),
            li: ({ children }) => <li className="mb-1">{children}</li>,
            code: ({ children }) => (
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">
                {children}
              </code>
            ),
            pre: ({ children }) => (
              <pre className="bg-gray-100 p-2 rounded text-sm font-mono overflow-x-auto">
                {children}
              </pre>
            ),
            a: ({ href, children }) => (
              <a
                href={href as string}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ),
          }}
        >
          {text}
        </ReactMarkdown>
      </div>
    );
  };

  // Loading dots component
  const LoadingDots = (): React.JSX.Element => (
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></div>
      <div
        className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
        style={{ animationDelay: "0.1s" }}
      ></div>
      <div
        className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
        style={{ animationDelay: "0.2s" }}
      ></div>
    </div>
  );

  return (
    <div className="fixed bottom-7 right-8 z-50">
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#992933] p-3 rounded-full shadow-xl hover:bg-red-700 transition cursor-pointer"
        >
          <Image
            src="/images/icons/fortune_cat.png"
            width={40}
            height={40}
            alt="cat icon"
          />
        </button>
      )}
      {/* Chat Interface */}
      {isOpen && (
        <div className="bg-white border-2 rounded-xl shadow-xl w-[350px] h-[450px] flex flex-col">
          {/* Chat Header */}
          <div className="p-3 bg-[#992933] text-white rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Image
                src="/images/icons/fortune_cat.png"
                width={30}
                height={30}
                alt="cat icon"
              />
              <h2 className="font-semibold">MaoMao AI assistant</h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-sm cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 mt-4">
                <p className="border-b pb-2 font-bold">
                  👋 Hi! I'm MaoMao your AI Assistant
                </p>
                <div className="mt-4 space-y-2 text-sm">
                  <p className="font-semibold">You can ask questions like:</p>
                  <ul className="space-y-1">
                    <li>What does UCLA do?</li>
                    <li>What events do they have?</li>
                    <li>How to attend the events?</li>
                  </ul>
                </div>
              </div>
            ) : (
              <>
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    } mb-2`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        msg.sender === "user"
                          ? "bg-gray-500 text-white rounded-br-none"
                          : msg.sender === "system"
                          ? "bg-red-100 text-red-800 rounded-bl-none"
                          : "bg-gray-100 text-gray-800 rounded-bl-none"
                      }`}
                    >
                      {renderMessage(msg.text, msg.sender)}
                    </div>
                  </div>
                ))}
                {/* Loading indicator */}
                {isLoading && (
                  <div className="flex justify-start mb-2">
                    <div className="max-w-[80%] p-3 rounded-lg bg-gray-100 text-gray-800 rounded-bl-none">
                      <LoadingDots />
                    </div>
                  </div>
                )}
              </>
            )}
            <div ref={messagesEndRef} />
          </div>
          {/* Chat Input */}
          <form
            onSubmit={handleSubmit}
            className="p-3 border-t flex items-center gap-2"
          >
            <input
              type="text"
              className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#e9a033]"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              disabled={isLoading}
            />
            <button
              type="submit"
              className="bg-[#e9a033] p-2 rounded-lg text-white hover:bg-[#992933] transition disabled:opacity-50"
              disabled={isLoading || !inputMessage.trim()}
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
