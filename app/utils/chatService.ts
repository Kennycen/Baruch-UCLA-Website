import axios from "axios";

type ChatResponse = {
  success: boolean;
  message: string;
  sender?: string;
}

type ChatRequest = {
  message: string;
}

const chatService = {
  sendMessage: async (message: string): Promise<ChatResponse> => {
    try {
      const response = await axios.post<ChatResponse>("/api/chatbot", {
        message,
      } as ChatRequest);
      return response.data;
    } catch (error: any) {
      console.error("Chat API Error:", error);
      throw new Error(
        error.response?.data?.message || "Failed to send message"
      );
    }
  },
};

export default chatService;
