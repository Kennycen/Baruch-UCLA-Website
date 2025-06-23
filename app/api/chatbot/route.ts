import { GoogleGenAI } from "@google/genai";
import { NextRequest } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

// Website information that will be used to train the AI
const websiteInfo = `
United Chinese Language Association (UCLA) – Baruch College

Organization Overview
	•	Name: United Chinese Language Association (UCLA)
	•	Founded: 2004
	•	Location: Baruch College, CUNY, New York, NY
	•	Mission: To promote Chinese American awareness, cultural education, language proficiency, community bonding, and mentorship.
	•	Core Pillars:
	•	Culture: Celebrate Chinese festivals and traditions such as Lunar New Year and Mid-Autumn Festival.
	•	Family: Build strong social bonds through outings, games, and informal gatherings.
	•	Service: Organize volunteer and philanthropic activities in New York City.
	•	Mentorship: Provide structured mentor–mentee relationships to support language learning and cultural integration.

Key Activities
	•	Educate the Baruch community about Chinese culture through workshops, events, and discussions.
	•	Offer conversational Mandarin practice in a pressure-free environment.
	•	Host signature cultural festivals that are open to all Baruch students.
	•	Create social events and recreational outings to foster a sense of community.
	•	Lead community service initiatives throughout New York City.
	•	Develop mentorship programs that connect experienced members with new participants.

Membership Requirements

To become a recognized member of UCLA, students must:
	•	Attend at least one General Interest Meeting (GIM event).
	•	Attend at least one Cultural Language Practice (CLP event).
	•	Attend either one social event (such as a game night or outing) or one philanthropy event (such as a volunteer activity).

Leadership Path: Vice President (VP) – UCLA

To qualify for the VP position in the club:
	•	The student must first become an active UCLA member by meeting all membership requirements.
	•	The student must actively participate as a committee member in one of the club's functional teams (such as Events, Mentorship, Philanthropy, or Graphics).

Organizational Structure
	•	President
	•	Vice Presidents (various focuses such as Membership, Events, etc.)
	•	Committee Members (serve in specialized groups like Events, Philanthropy, Graphics)
	•	General Members (participate in events, meetings, and service activities)

Event Types
	•	General Interest Meetings (GIM): Introduction to the club's mission and upcoming activities.
	•	Cultural Language Practice (CLP): Mandarin workshops and conversation circles.
	•	Social Events: Group outings, game nights, and cultural exchange activities.
	•	Philanthropy Events: Community service and volunteer projects in NYC.
	•	Cultural Festivals: Campus-wide celebrations such as Lunar New Year and Mid-Autumn Festival.

Cultural and Community Impact
	•	UCLA welcomes students from all cultural and language backgrounds, including those who are new to Chinese language or culture.
	•	The club creates a life-long network for students through mentorship, language practice, and community service.
	•	UCLA serves as a cultural bridge between Baruch College and the broader New York City Chinese community through educational and volunteer efforts.
`;

interface ChatRequest {
  message: string;
}

interface ChatResponse {
  success: boolean;
  message: string;
  sender?: string;
}

export async function POST(request: NextRequest): Promise<Response> {
  try {
    const { message }: ChatRequest = await request.json();

    if (!message) {
      return Response.json(
        {
          success: false,
          message: "Message is required.",
        } as ChatResponse,
        { status: 400 }
      );
    }

    // Create the prompt with context
    const prompt = `You are a friendly AI assistant for the United Chinese Language Association (UCLA) at Baruch College. 

IMPORTANT INSTRUCTIONS:
- Keep your responses SHORT and CONVERSATIONAL (2-3 sentences maximum)
- Be welcoming and friendly
- After answering, always ask a follow-up question to keep the conversation going
- Use the information below to answer accurately about UCLA

UCLA Information: ${websiteInfo}

User question: ${message}

Remember: Keep it short, friendly, and ask a follow-up question!`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return Response.json({
      success: true,
      message: response.text,
      sender: "assistant",
    } as ChatResponse);
  } catch (error) {
    console.error("Chat Error", error);
    return Response.json(
      {
        success: false,
        message: "Failed to process your message. Please try again.",
      } as ChatResponse,
      { status: 500 }
    );
  }
}
