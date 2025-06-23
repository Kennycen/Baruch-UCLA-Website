# UCLA at Baruch College - Official Website

Welcome to the official website repository for **UCLA at Baruch College**, a student organization dedicated to promoting Chinese culture and fostering a supportive community. We organize fun events to educate and engage people with Chinese traditions and culture.

## Project Overview

This website serves as the digital hub for UCLA at Baruch College, showcasing our activities, events, and mission. Built with modern web technologies and TypeScript, it provides an engaging and informative experience for students, visitors, and community members interested in Chinese culture.

### Key Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, intuitive interface with smooth animations
- **Interactive Components**: Dynamic navigation, modals, and interactive elements
- **AI Chatbot Assistant**: Intelligent virtual assistant powered by Google Gemini AI
- **Performance Optimized**: Fast loading times with Next.js optimization
- **TypeScript Support**: Full type safety and enhanced developer experience
- **Accessibility**: Built with accessibility best practices in mind

### Website Sections

- **Hero Section**: Eye-catching introduction with call-to-action
- **Navigation Bar**: Interactive navigation with smooth scrolling
- **Pillars**: Showcase of core values and principles
- **About Us**: Club overview, mission, and upcoming events
- **Events**: Cultural events and initiatives calendar
- **Best Moments**: Photo gallery of memorable events
- **Culture**: Educational content about Chinese traditions and festivals
- **Board Members**: Team introduction with detailed profiles
- **AI Chatbot**: Interactive virtual assistant for visitor inquiries
- **Footer**: Contact information and social media links

## Technology Stack

### Frontend Framework
- **Next.js 15.3.3**: React framework with App Router for server-side rendering and static generation
- **React 19.0.0**: Latest version for building interactive user interfaces
- **React DOM 19.0.0**: React rendering for web applications

### TypeScript & Development
- **TypeScript 5.8.3**: Static type checking and enhanced developer experience
- **@types/react 19.1.8**: TypeScript definitions for React
- **@types/node 24.0.3**: TypeScript definitions for Node.js

### Styling & UI
- **Tailwind CSS 4.1.10**: Utility-first CSS framework for rapid UI development
- **DaisyUI 5.0.43**: Component library built on top of Tailwind CSS
- **PostCSS 8.5.6**: CSS processing tool for advanced styling features

### Animation & Icons
- **Motion 12.18.1**: Animation library for smooth transitions and effects
- **Lucide React 0.517.0**: Beautiful, customizable icon library

### AI & Backend Services
- **Google Gemini AI**: Advanced AI model for intelligent chatbot responses
- **Axios**: HTTP client for API communication
- **React Markdown**: Markdown rendering for formatted chatbot responses

### Development Tools
- **ESLint 9**: Code linting for maintaining code quality
- **Turbopack**: Fast bundler for development (enabled with `--turbopack` flag)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (version 18.17 or higher)
- **npm** (comes with Node.js) or **yarn**
- **Git** for version control
- **Google Gemini AI API Key** for chatbot functionality

### Environment Setup

1. **Create a `.env.local` file** in the root directory:
   ```bash
   GOOGLE_API_KEY=your_google_gemini_api_key_here
   ```

2. **Get a Google Gemini API Key**:
   - Visit [Google AI Studio](https://ai.google.dev)
   - Create a new API key
   - Add it to your `.env.local` file

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kennycen/ucla-website.git
   cd ucla-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   - Create `.env.local` file with your Google API key
   - Ensure the file is in the root directory

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## AI Chatbot Feature

### Overview
The website features an intelligent AI chatbot assistant named "MaoMao" that helps visitors learn about UCLA at Baruch College. The chatbot is powered by Google Gemini AI and provides conversational responses about the organization.

### Features
- **Interactive Chat Interface**: Floating chat widget with expandable interface
- **Intelligent Responses**: AI-powered responses based on UCLA information
- **Conversational Design**: Friendly, engaging conversation flow
- **Markdown Support**: Rich text formatting for responses
- **Loading States**: Visual feedback during AI processing
- **Error Handling**: Graceful error handling for failed requests

### How It Works
1. Users click the floating cat icon to open the chat interface
2. The chatbot greets users with helpful suggestions
3. Users can ask questions about UCLA events, membership, activities, etc.
4. AI processes queries using Google Gemini with UCLA-specific context
5. Responses are formatted and displayed in a conversational manner

### Customization
- **Chatbot Personality**: Modify the AI prompt in `app/api/chatbot/route.ts`
- **Response Style**: Adjust conversation tone and length
- **UI Design**: Customize the chat interface in `app/components/Chatbot.tsx`
- **Knowledge Base**: Update the `websiteInfo` variable with current information

## Development Guidelines

### Code Style
- Use ESLint for code linting
- Follow React best practices
- Use functional components with hooks
- Implement proper TypeScript types and interfaces
- Use strict TypeScript configuration for better type safety

### TypeScript Benefits
- **Type Safety**: Catch errors at compile time
- **Better IntelliSense**: Enhanced autocomplete and suggestions
- **Refactoring Support**: Safe code refactoring with confidence
- **Documentation**: Types serve as inline documentation
- **Maintainability**: Easier to maintain and scale the codebase

### Performance
- Optimize images using Next.js Image component
- Implement proper loading states
- Use React.memo for expensive components
- Leverage Next.js built-in optimizations

### AI Integration
- Handle API rate limits gracefully
- Implement proper error handling for AI responses
- Cache common responses when appropriate
- Monitor API usage and costs

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. Configure environment variables in Vercel dashboard:
   - Add `GOOGLE_API_KEY` with your Google Gemini API key

### Other Platforms
- **Netlify**: Use `npm run build` and deploy the `.next` folder
- **AWS Amplify**: Connect repository and configure build settings
- **Traditional hosting**: Build with `npm run build` and serve with `npm run start`

**Important**: Remember to set the `GOOGLE_API_KEY` environment variable in your deployment platform.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

**Note**: This project uses TypeScript. Please ensure all new code includes proper type definitions.

## Acknowledgments

- Thanks to all UCLA at Baruch College members
- Special thanks to contributors and supporters
- Built with love for the Chinese culture community
- Powered by Google Gemini AI for intelligent assistance
- Enhanced with TypeScript for better development experience

---

**Made with ❤️ by UCLA at Baruch College Team**