# Government Co-Ed Secondary School Teliwara Website

## Overview

This is a modern, responsive website for Government Co-Ed Secondary School Teliwara, a CBSE-affiliated educational institution established in 1966. The application is built as a full-stack web application featuring a sleek, futuristic design with glass-morphism effects and neon accents. The site serves as the school's digital presence, providing information about academics, facilities, administration, and enabling prospective students and parents to contact the school directly.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system featuring cosmic/futuristic theme
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible interfaces
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for robust form processing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript for the API server
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database for serverless PostgreSQL hosting
- **Schema Validation**: Zod for runtime type checking and validation
- **Storage**: In-memory storage implementation (MemStorage) with interface for easy database migration

### Design System
- **Theme**: Dark cosmic theme with electric blue, neon purple, and cyan accents
- **Typography**: Inter for body text, Orbitron for headings to create a futuristic aesthetic
- **Effects**: Glass-morphism, neon glows, particle animations, and intersection observer-based reveal animations
- **Responsive Design**: Mobile-first approach with comprehensive breakpoint coverage

### Component Architecture
- **Layout**: Modular section-based architecture with reusable UI components
- **Navigation**: Scroll-spy navigation with smooth scrolling between sections
- **Animations**: Intersection observer-driven animations for performance-optimized reveals
- **Effects**: Custom particle background and floating elements for visual enhancement

### Data Layer
- **Schema**: Centralized schema definition in `shared/schema.ts` using Drizzle ORM
- **Contact System**: Full contact form with validation, submission, and retrieval endpoints
- **Type Safety**: End-to-end type safety from database to frontend using TypeScript and Zod

## External Dependencies

### Core Technologies
- **Database**: Neon Database (serverless PostgreSQL)
- **Fonts**: Google Fonts (Inter, Orbitron, Architects Daughter, DM Sans, Fira Code, Geist Mono)
- **Images**: Unsplash for placeholder images

### Development Tools
- **Database Management**: Drizzle Kit for migrations and schema management
- **Development Environment**: Replit-optimized with custom plugins for error overlay and cartographer
- **Build Process**: ESBuild for server bundling, Vite for client-side builds

### UI Libraries
- **Component Library**: Extensive Radix UI primitives collection for accessible components
- **Icons**: Lucide React for consistent iconography
- **Carousel**: Embla Carousel for image galleries
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer

The application follows modern web development best practices with a focus on performance, accessibility, and user experience. The architecture supports easy scaling and maintenance while providing a visually impressive representation of the educational institution.