# Pouya Data - Personal Blog & Professional Portfolio

A modern, static website built with Astro showcasing Pouya Barrach-Yousefi's expertise in Data Science, Machine Learning, Generative AI, and Digital Transformation. This site serves as both a professional portfolio and a platform for sharing insights on technology, AI, and career development.

## 🎯 Project Scope

This website represents a comprehensive digital presence that includes:

- **Professional Portfolio**: Showcases 20+ years of experience in technology transformation
- **Blog Platform**: Features in-depth articles on AI, data science, and tech career guidance
- **Resource Hub**: Provides insights on modern development practices and AI tools
- **Contact Platform**: Enables professional networking and consultation requests

## 🚀 Features

### Core Functionality

- **Static Site Generation**: Fast, SEO-optimized pages built with Astro
- **Blog System**: Markdown-based content management with automatic post listing
- **Responsive Design**: Modern, mobile-first UI with custom CSS
- **TypeScript Support**: Full type safety throughout the codebase
- **Testing Suite**: Comprehensive unit tests with Vitest

### Content Management

- **Markdown Blog Posts**: Easy-to-write content with frontmatter metadata
- **Image Optimization**: Automatic image handling for blog posts
- **SEO Optimization**: Meta tags, structured data, and search-friendly URLs
- **Content Collections**: Type-safe content management with Astro's content API

### Professional Sections

- **Executive Summary**: Overview of expertise and value proposition
- **Core Capabilities**: Six key service areas including:
  - Training & Education
  - Data & AI Strategy Consulting
  - AI Transformation
  - Automation & Operational Excellence
  - Product Development & Platform Engineering
  - DoD & Government Expertise
- **Recent Blog Posts**: Dynamic display of latest articles
- **Technology Stack**: Showcase of relevant technologies and tools
- **Call-to-Action**: Professional consultation and networking opportunities

## 🛠️ Technology Stack

### Core Framework

- **Astro 5.12.8**: Static site generator with component islands
- **TypeScript 5.9.2**: Full type safety and modern JavaScript features
- **CSS**: Custom styling with modern design principles

### Development Tools

- **Vitest 3.2.4**: Fast unit testing framework
- **@astrojs/check**: Type checking and linting
- **Git**: Version control and collaboration

### Deployment

- **GitHub Pages**: Static hosting at `https://pouyadata.github.io`
- **Static Output**: Optimized for performance and SEO

## 📁 Project Structure

```bash
src/
├── components/          # Reusable UI components
│   ├── Capabilities.astro    # Service offerings display
│   ├── CTA.astro            # Call-to-action sections
│   ├── Header.astro         # Site navigation
│   ├── Landing.astro        # Main homepage layout
│   ├── Nav.astro            # Navigation component
│   ├── PostList.astro       # Blog post listings
│   ├── RecentPosts.astro    # Recent posts widget
│   └── Technologies.astro   # Tech stack showcase
├── content/             # Content management
│   ├── blog/            # Blog posts (markdown)
│   └── config.ts        # Content schema definitions
├── layouts/             # Page layouts
│   └── BaseLayout.astro # Main layout template
├── pages/               # Route pages
│   ├── blog/            # Blog-related pages
│   └── index.astro      # Homepage
└── styles/              # CSS styling
    ├── global.css       # Global styles
    └── landing.css      # Landing page styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/pouyadata/pouyadata.github.io.git
   cd pouyadata.github.io
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321` to view the site

## 🧪 Testing

### Static Analysis

Run comprehensive static analysis on the project:

```bash
npm test
```

### Unit Tests

Run unit tests with Vitest (requires dev dependencies):

```bash
npm run test:unit
```

### Watch Mode

Run tests in watch mode for development:

```bash
npm run test:watch
```

## 🏗️ Build & Deployment

### Development

```bash
npm run dev          # Start development server
npm run preview      # Preview production build locally
```

### Production

```bash
npm run build        # Build for production
```

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## 📝 Content Management

### Adding Blog Posts

1. Create a new markdown file in `src/content/blog/[year_week]/index.md`
2. Include required frontmatter:

   ```yaml
   ---
   title: "Your Post Title"
   description: "Brief description for SEO"
   publishDate: 2025-01-01
   author: "Pouya Barrach-Yousefi"
   ---
   ```

3. Add images to the corresponding `images/` folder
4. Posts are automatically listed and sorted by date

### Updating Components

- Components are located in `src/components/`
- Use TypeScript for type safety
- Follow Astro's component syntax with frontmatter and template sections

## 🎨 Customization

### Styling

- Global styles: `src/styles/global.css`
- Landing page styles: `src/styles/landing.css`
- Component-specific styles can be added inline or in separate CSS files

### Configuration

- Astro config: `astro.config.mjs`
- Content schema: `src/content/config.ts`
- TypeScript config: `tsconfig.json`

## 🤝 Contributing

This is a personal portfolio site, but suggestions and improvements are welcome through GitHub issues and pull requests.

## 📄 License

This project is private and proprietary. All rights reserved.

## 📞 Contact

For professional inquiries, consultation requests, or collaboration opportunities:

- **Website**: [pouyadata.github.io](https://pouyadata.github.io)
- **LinkedIn**: [Pouya Barrach-Yousefi](https://linkedin.com/in/pouyadata)
- **Email**: Available through the website contact form

---

*Built with ❤️ using Astro, TypeScript, and modern web technologies.*
