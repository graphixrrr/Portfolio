# Portfolio Website

A modern, responsive portfolio website built with React and TypeScript.

## Features

- 🎨 Modern, sleek design with dark theme
- 📱 Fully responsive across all devices
- ⚡ Fast and optimized performance
- 🎭 Interactive animations and effects
- 📄 Multiple pages: Home, About, Projects, Skills, Contact
- 🔗 Social media integration
- 📧 Contact information with copy functionality

## Technologies Used

- React 19
- TypeScript
- CSS3 with advanced animations
- React Router for navigation
- Modern ES6+ JavaScript

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment

### Option 1: Netlify (Recommended)

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com) and sign up/login
3. Click "New site from Git"
4. Connect your GitHub repository
5. Set build command: `npm run build`
6. Set publish directory: `build`
7. Click "Deploy site"

### Option 2: Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and sign up/login
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect it's a React app
6. Click "Deploy"

### Option 3: GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
3. Add homepage field to package.json:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name"
   ```
4. Run: `npm run deploy`

## Build

To create a production build:

```bash
npm run build
```

The build folder will contain the optimized production files.

## Project Structure

```
src/
├── App.tsx              # Main app component
├── App.css              # Global styles
├── index.tsx            # Entry point
├── pages/               # Page components
│   ├── Home.tsx         # Home page
│   ├── About.tsx        # About page
│   ├── Projects.tsx     # Projects page
│   ├── Skills.tsx       # Skills page
│   └── Contact.tsx      # Contact page
└── reportWebVitals.ts   # Performance monitoring
```

## Customization

- Update personal information in each page component
- Modify colors and styles in `App.css`
- Add new projects in `Projects.tsx`
- Update skills and experience in `Skills.tsx`
- Customize contact information in `Contact.tsx`

## Performance

- Optimized bundle size
- Lazy loading for better performance
- Modern CSS with hardware acceleration
- Responsive images and assets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, please reach out through the contact information provided in the portfolio.
