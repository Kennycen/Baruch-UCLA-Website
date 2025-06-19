# UCLA at Baruch College - Official Website

Welcome to the official website repository for **UCLA at Baruch College**, a student organization dedicated to promoting Chinese culture and fostering a supportive community. We organize fun events to educate and engage people with Chinese traditions and culture.

## Project Overview

This website serves as the digital hub for UCLA at Baruch College, showcasing our activities, events, and mission. Built with modern web technologies, it provides an engaging and informative experience for students, visitors, and community members interested in Chinese culture.

### Key Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, intuitive interface with smooth animations
- **Interactive Components**: Dynamic navigation, modals, and interactive elements
- **Performance Optimized**: Fast loading times with Next.js optimization
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
- **Footer**: Contact information and social media links

## Technology Stack

### Frontend Framework
- **Next.js 15.3.3**: React framework with App Router for server-side rendering and static generation
- **React 19.0.0**: Latest version for building interactive user interfaces
- **React DOM 19.0.0**: React rendering for web applications

### Styling & UI
- **Tailwind CSS 4.1.10**: Utility-first CSS framework for rapid UI development
- **DaisyUI 5.0.43**: Component library built on top of Tailwind CSS
- **PostCSS 8.5.6**: CSS processing tool for advanced styling features

### Animation & Icons
- **Motion 12.18.1**: Animation library for smooth transitions and effects
- **Lucide React 0.517.0**: Beautiful, customizable icon library

### Development Tools
- **ESLint 9**: Code linting for maintaining code quality
- **Turbopack**: Fast bundler for development (enabled with `--turbopack` flag)

## Project Structure

```
ucla-website/
├── app/                    # Next.js App Router directory
│   ├── components/         # React components
│   │   ├── About.jsx      # About section component
│   │   ├── BestMoments.jsx # Photo gallery component
│   │   ├── Culture.jsx    # Culture education component
│   │   ├── Events.jsx     # Events display component
│   │   ├── Footer.jsx     # Footer component
│   │   ├── Hero.jsx       # Hero section component
│   │   ├── Navbar.jsx     # Navigation component
│   │   ├── Pillars.jsx    # Core pillars component
│   │   ├── Team.jsx       # Team members component
│   │   ├── TeamCard.jsx   # Individual team member card
│   │   └── TeamModal.jsx  # Team member modal
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout component
│   └── page.js            # Home page component
├── public/                # Static assets
├── TeamData/              # Team member data
├── .next/                 # Next.js build output
├── node_modules/          # Dependencies
├── package.json           # Project configuration
├── next.config.mjs        # Next.js configuration
├── postcss.config.mjs     # PostCSS configuration
├── eslint.config.mjs      # ESLint configuration
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (version 18.17 or higher)
- **npm** (comes with Node.js) or **yarn**
- **Git** for version control

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kennycen/Baruch-UCLA-Website.git
   cd ucla-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Customization Guide

### Adding New Team Members

1. Navigate to the `TeamData/` directory
2. Add new member data following the existing format
3. Update the team component to include new members

### Modifying Styles

- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind CSS classes
- DaisyUI components can be customized through Tailwind config

### Adding New Sections

1. Create a new component in `app/components/`
2. Import and add it to the main page in `app/page.js`
3. Update navigation if needed

## Development Guidelines

### Code Style
- Use ESLint for code linting
- Follow React best practices
- Use functional components with hooks
- Implement proper TypeScript types (if migrating to TypeScript)

### Performance
- Optimize images using Next.js Image component
- Implement proper loading states
- Use React.memo for expensive components
- Leverage Next.js built-in optimizations

### Accessibility
- Use semantic HTML elements
- Implement proper ARIA labels
- Ensure keyboard navigation works
- Test with screen readers

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. Configure environment variables if needed

### Other Platforms
- **Netlify**: Use `npm run build` and deploy the `.next` folder
- **AWS Amplify**: Connect repository and configure build settings
- **Traditional hosting**: Build with `npm run build` and serve with `npm run start`

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines
- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation if needed

## Support & Contact

- **Website**: [UCLA at Baruch College Website](https://your-website-url.com)
- **Email**: [your-email@example.com]
- **Social Media**: [Add your social media links]

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to all UCLA at Baruch College members
- Special thanks to contributors and supporters
- Built with love for the Chinese culture community

---

**Made with ❤️ by UCLA at Baruch College Team**