import axios from "axios";

const chatService = {
  sendMessage: async (message) => {
    try {
      const response = await axios.post("/api/chatbot", { message });
      return response.data;
    } catch (error) {
      console.error("Chat API Error:", error);
      throw new Error(
        error.response?.data?.message || "Failed to send message"
      );
    }
  },
};

export default chatService;
