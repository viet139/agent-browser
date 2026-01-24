# DT68 Gaming Platform

A modern Vietnamese online gaming platform built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Dark theme with neon accents and glassmorphism effects
- **Interactive Components**:
  - Sticky navigation header with mobile menu
  - Auto-rotating hero banner carousel
  - Game categories grid with hover effects
  - Featured games showcase
  - Promotional cards
  - Live chat widget
  - Multi-column footer

## Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS 3.4.1** for styling
- **PostCSS** with autoprefixer
- **Create React App** for build tooling

## Getting Started

### Prerequisites

- Node.js 14+ and npm

### Installation

1. Navigate to the project directory:
```bash
cd dt68-gaming
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

## Project Structure

```
dt68-gaming/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── HeroBanner.tsx      # Hero carousel
│   │   ├── GameCategories.tsx  # Game category grid
│   │   ├── FeaturedGames.tsx   # Featured games section
│   │   ├── Promotions.tsx      # Promotional cards
│   │   ├── Footer.tsx          # Footer with links
│   │   └── LiveChat.tsx        # Live chat widget
│   ├── App.tsx                 # Main app component
│   ├── index.tsx               # Entry point
│   └── index.css               # Global styles
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── package.json
```

## Design Features

### Color Scheme
- **Background**: Deep dark blue/black gradient (#0a0e27 to #1a1f3a)
- **Accent Colors**:
  - Gold/Yellow (#FFD700, #FFA500) for CTAs
  - Electric Blue (#00D4FF, #0099FF) for interactive elements
  - Red (#DC143C) for live indicators
  - Green (#00FF00) for positive actions

### Components

#### Header
- Sticky navigation with logo and menu items
- Responsive mobile hamburger menu
- Login/Register buttons with gradient effects

#### Hero Banner
- Auto-rotating carousel (4-second intervals)
- 3 promotional slides with different themes
- Navigation dots for manual control

#### Game Categories
- 6 category cards in responsive grid
- Live indicator for casino games
- Hover effects with scale and glow

#### Featured Games
- 6 game cards with provider information
- HOT/NEW badges
- Play button overlay on hover

#### Promotions
- 4 promotional cards with bonus information
- Gradient backgrounds
- Call-to-action buttons

#### Live Chat
- Floating chat button with notification badge
- Expandable chat window
- Pulsing animation to draw attention

#### Footer
- Multi-column layout with links
- Social media icons
- Payment method badges
- License and age restriction indicators

## Vietnamese Content

All content is in Vietnamese language:
- Trang Chủ (Home)
- Thể Thao (Sports)
- Casino
- Slot Games
- Bắn Cá (Fishing Games)
- Khuyến Mãi (Promotions)
- Nạp Tiền (Deposit)
- Rút Tiền (Withdrawal)

## License

This project is for demonstration purposes only.
