# DT68 Gaming Platform

A modern, responsive gaming platform built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Dark Theme**: Modern dark theme with gold accents
- **Interactive Components**: 
  - Auto-rotating hero carousel
  - Login modal
  - Mobile hamburger menu
  - Hover effects on cards and buttons
- **Game Categories**: Sports betting, live casino, slots, table games, lottery, and fishing games
- **Promotions Section**: Featured bonuses and promotional offers
- **Trust Indicators**: Payment methods, social links, and security badges

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Swiper** - Touch slider for carousels
- **PostCSS** - CSS processing

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
dt68-gaming/
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Navigation and login modal
│   │   ├── Hero.tsx         # Hero carousel section
│   │   ├── GameCategories.tsx # Game categories and featured games
│   │   ├── Promotions.tsx   # Promotional offers
│   │   └── Footer.tsx       # Footer with links and trust indicators
│   ├── App.tsx              # Main app component
│   ├── index.css            # Global styles and Tailwind imports
│   └── main.tsx             # App entry point
├── index.html
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── package.json
```

## Color Scheme

- **Primary**: Deep navy blue (#1a1f3a)
- **Gold**: Bright gold (#ffd700)
- **Accents**: Red, blue, and purple for various elements
- **Background**: Dark theme (#0f1220)

## Components

### Header
- Sticky navigation bar
- Responsive mobile menu
- Login modal with form
- Register button

### Hero
- Auto-rotating carousel with 3 slides
- Smooth transitions
- Call-to-action buttons

### Game Categories
- 6 game category cards with icons
- 8 featured game cards
- Hover effects and animations

### Promotions
- 4 promotional offer cards
- Badge indicators (NEW, HOT, VIP, BONUS)
- Claim buttons

### Footer
- Payment method icons
- Footer navigation links
- Social media links
- Trust indicators
- Live chat button (fixed position)

## Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  primary: { ... },
  gold: { ... },
  accent: { ... }
}
```

### Content
Update the content arrays in each component file to modify:
- Navigation links
- Carousel slides
- Game categories
- Featured games
- Promotions
- Footer links

## License

MIT

## Disclaimer

This is a demonstration project. Gambling can be addictive. Please play responsibly. 18+ only.
