# WPUI - WordPress UI Component Showcase

A comprehensive showcase of WordPress-styled UI components built with React, TypeScript, and the official WordPress component library.

## Overview

WPUI demonstrates various UI interfaces and components commonly found in WordPress and web applications, styled with the WordPress design system. This project serves as both a reference implementation and a practical example of how to build modern interfaces using WordPress components.

## Features

- **Component Gallery**: Browse various UI components organized by category
- **WordPress Styling**: Uses official WordPress components and styling
- **Theme Switching**: Toggle between 8 WordPress admin color schemes

## Examples Included

- **Widgets**: Calendar, Authentication Form, Settings Page, Team Members, Chat, Payments, Report Issue, Share Document
- **Email**: Email Client interface
- **Dashboard**: Admin Dashboard 
- **Media**: Music Player
- **Auth**: Authentication screens

## Getting Started

### Prerequisites

- Node.js (recommended: latest LTS version)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/wpui.git
cd wpui

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The application will be available at `http://localhost:5173/`

### Building for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

### Deployment

This project is configured for deployment to Surge:

```bash
npm run build && npm run deploy
```

This will deploy the application to `wpui.surge.sh`.

## License

See the [LICENSE](LICENSE) file for details.