# zVPN - Modern VPN Service Website

A top-tier, interactive VPN service website built with modern web technologies featuring a friendly blue-gray dark theme design.

## 🚀 Features

- **Modern Tech Stack**: React 18 + TypeScript + Vite for lightning-fast development
- **Beautiful UI**: Tailwind CSS + shadcn/ui components for a polished interface
- **Dark Theme**: Custom blue-gray dark theme optimized for VPN branding
- **Interactive Design**: Smooth animations, hover effects, and responsive interactions
- **Complete Routing**: React Router v7 with declarative routing
- **Responsive**: Mobile-first design that works on all devices

## 🎨 Design Highlights

- **Hero Section**: Gradient backgrounds with animated elements
- **Interactive Pricing**: Toggle between monthly/yearly plans with savings calculations
- **Server Locations**: Searchable and filterable global server network
- **User Dashboard**: Mock VPN dashboard with connection status and analytics
- **Modern Components**: Cards, badges, buttons with consistent design system

## 📱 Pages Included

- **Home**: Hero section, features, testimonials, and stats
- **Features**: Detailed feature showcase with categories
- **Pricing**: Interactive pricing plans with billing toggles
- **Server Locations**: Global server network with search/filter
- **About**: Company information, team, and timeline
- **Contact**: Contact form with support categories
- **Dashboard**: Mock user dashboard with VPN controls

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Routing**: React Router v7
- **Icons**: Lucide React
- **Development**: ESLint + Hot Module Replacement

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd zvpn-website-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Main navigation
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── HomePage.tsx    # Landing page
│   ├── FeaturesPage.tsx
│   ├── PricingPage.tsx
│   ├── ServerLocationsPage.tsx
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   └── DashboardPage.tsx
├── layouts/            # Layout components
│   └── RootLayout.tsx  # Main app layout
├── lib/                # Utility functions
│   └── utils.ts        # shadcn/ui utilities
└── main.tsx           # App entry point
```

## 🎨 Design System

The website uses a custom blue-gray dark theme with:
- **Primary Colors**: Blue to cyan gradients
- **Background**: Dark slate with subtle blue undertones  
- **Components**: Glass-morphism effects with backdrop blur
- **Typography**: Modern font stack with proper contrast
- **Spacing**: Consistent spacing using Tailwind's scale

## 🌟 Key Features Implemented

### Interactive Elements
- Pricing plan toggles (monthly/yearly)
- Server location search and filtering
- Dashboard connection controls
- Responsive navigation with mobile menu
- Hover animations and transitions

### Modern Design Patterns
- Glass-morphism cards
- Gradient backgrounds
- Backdrop blur effects
- Smooth scroll animations
- Mobile-first responsive design

### VPN-Specific Features
- Connection status indicators
- Server location display
- Data usage statistics
- Security feature highlights
- Privacy-focused messaging

## 🚀 Deployment

The project is ready for deployment to any modern hosting platform:

```bash
npm run build
```

The `dist` folder contains the production-ready files.

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
