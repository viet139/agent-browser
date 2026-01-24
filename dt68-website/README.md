# DT68 Gaming Platform Website

A modern, responsive gaming platform website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 🎰 Gaming platform interface with casino, sports betting, and slots sections
- 🎁 Promotions and special offers section
- 📱 Mobile-friendly responsive layout
- ⚡ Fast performance with React
- 🔒 TypeScript for type safety

## Tech Stack

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Create React App** - Build tooling

## Getting Started

### Prerequisites

- Node.js 14+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd dt68-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deploy

You can deploy the `build` folder to any static hosting service:

```bash
npm install -g serve
serve -s build
```

## Project Structure

```
dt68-website/
├── public/              # Static files
├── src/
│   ├── components/      # React components
│   │   ├── Header.tsx   # Navigation header
│   │   ├── Hero.tsx     # Hero section
│   │   ├── GameGrid.tsx # Games display
│   │   ├── Promotions.tsx # Promotions section
│   │   └── Footer.tsx   # Footer
│   ├── App.tsx          # Main app component
│   ├── index.tsx        # Entry point
│   └── index.css        # Global styles with Tailwind
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Dependencies
```

## Components

### Header
- Responsive navigation menu
- Mobile hamburger menu
- Login/Register buttons

### Hero
- Eye-catching hero section
- Feature highlights
- Call-to-action buttons
- Trust indicators

### GameGrid
- Display of popular games
- Category filtering
- Hover effects and animations
- Player count indicators

### Promotions
- Special offers and bonuses
- Promotional cards
- Featured banner

### Footer
- Quick links
- Support information
- Payment methods
- Social media links
- Responsible gaming notice

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: { ... },
      gold: { ... }
    }
  }
}
```

### Content

Update the content in each component file to match your requirements.

## License

This project is created for demonstration purposes.

## Responsible Gaming

⚠️ This is a demo website. Real gaming platforms should include:
- Age verification (18+)
- Responsible gaming resources
- Proper licensing information
- Security measures
- Terms and conditions
