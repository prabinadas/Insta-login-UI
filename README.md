# Instagram Login UI

A modern, responsive Instagram-inspired login and signup interface built with React, Vite, and Tailwind CSS. This project features a clean, mobile-first design with smooth animations and a professional user experience.

##  Features

- **Responsive Design**: Optimized for mobile and desktop devices
- **Modern UI**: Instagram-inspired design with glassmorphism effects
- **Routing**: Client-side routing with React Router
- **Form Validation**: Basic form handling for login and signup
- **Social Login**: Facebook login integration (UI only)
- **App Download Section**: Prominent app store links
- **Footer**: Comprehensive footer with links and copyright
- **Phone Mockup**: Interactive phone mockup display
- **Dark/Light Mode Ready**: Built with Tailwind CSS for easy theming

##  Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 4.1.18
- **Icons**: Lucide React 0.563.0
- **Routing**: React Router DOM 7.13.0
- **Linting**: ESLint 9.33.0
- **Language**: JavaScript (ES6+)

##  Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

##  Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/prabinadas/Insta-login-UI.git
   cd react_code
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

##  Usage

### Development
```bash
npm run dev
```
Starts the development server with hot module replacement.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `dist` folder.

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing.

### Linting
```bash
npm run lint
```
Runs ESLint to check for code quality issues.

##  Project Structure

```
react_code/
├── public/
│   ├── insta4.png              # Instagram logo
│   └── vite.svg               # Vite logo
├── src/
│   ├── components/
│   │   ├── Footer.jsx         # Site footer component
│   │   ├── GetApp.jsx         # App download section
│   │   ├── LoginPage.jsx      # Login page component
│   │   ├── PhoneMockup.jsx    # Phone mockup display
│   │   └── SignupPage.jsx     # Signup page component
│   ├── pages/                 # Additional page components
│   ├── App.jsx                # Main app component with routing
│   ├── index.css              # Global styles and Tailwind imports
│   └── main.jsx               # App entry point
├── index.html                 # HTML template
├── package.json               # Project dependencies and scripts
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── eslint.config.js           # ESLint configuration
└── README.md                  # Project documentation
```

##  Key Components

### LoginPage
- Username/email/phone input
- Password input
- Facebook login option
- "Forgot password" link
- Sign up link

### SignupPage
- Email/phone input
- Full name input
- Username input
- Password input
- Terms and conditions
- Login link

### Footer
- Meta/Instagram links
- Legal pages
- Copyright information

### GetApp
- Google Play Store link
- Microsoft Store link

### PhoneMockup
- Instagram app preview
- Responsive design showcase

##  Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
1. Push your code to GitHub
2. Connect your repository to Netlify or Vercel
3. Set the build command to `npm run build`
4. Set the publish directory to `dist`

### Deploy to GitHub Pages
```bash
npm install -g gh-pages
npm run build
npm run deploy
```

##  Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Use meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

##  Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

##  License

This project is for educational purposes only and is not affiliated with Instagram or Meta. All rights reserved.

##  Support

If you have any questions or need help, please open an issue on GitHub.

##  Acknowledgments

- Instagram for design inspiration
- React and Vite communities
- Tailwind CSS for the amazing utility-first CSS framework
- Lucide React for beautiful icons

---

**Note**: This is a frontend-only project. For a complete authentication system, you'll need to integrate with a backend API.
