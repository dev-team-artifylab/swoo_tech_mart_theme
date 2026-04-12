# SWOO Tech Mart Theme

A modern, high-performance Shopify theme built with Tailwind CSS v4 and Liquid.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm
- Shopify CLI

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd swoo_tech_mart_theme
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server with hot-reload:

```bash
npm run dev
```

This will:

- Start the Shopify theme development server
- Watch for changes in `assets/tailwind.input.css`
- Compile Tailwind CSS to `assets/tailwind.output.css`

### Build

Build the theme for production:

```bash
npm run build
```

## 🛠️ Tech Stack

- **Theme Engine**: Liquid
- **Styling**: Tailwind CSS v4
- **JavaScript**: Vanilla JS
- **Build Tool**: Shopify CLI

## 📁 Project Structure

```
swoo_tech_mart_theme/
├── assets/              # CSS, JS, Fonts, Images
├── config/              # Theme configuration
├── layout/              # Theme layouts
├── locales/             # Translation files
├── sections/            # Reusable sections
├── snippets/            # Reusable snippets
├── templates/           # Page templates
└── templates/customers/ # Customer account templates
```

## 🎨 Tailwind CSS Configuration

Tailwind CSS is configured in `tailwind.config.js`. You can customize:

- Colors
- Typography
- Spacing
- Breakpoints
- Custom utilities

## 📝 Liquid Templates

- **`layout/theme.liquid`**: Main layout with header, footer, and scripts
- **`templates/index.liquid`**: Homepage template
- **`templates/product.liquid`**: Product page template
- **`templates/collection.liquid`**: Collection page template
- **`templates/page.liquid`**: Page template

## 📦 Sections

Reusable components located in the `sections/` directory:

- `header.liquid` - Header section
- `footer.liquid` - Footer section
- `hero-slider.liquid` - Hero banner slider
- `featured-products.liquid` - Featured products grid
- `product-grid.liquid` - Product grid
- `product-detail.liquid` - Product detail page
- `collection-list.liquid` - Collection list
- `about-leadership.liquid` - About us leadership section
- `new-search.liquid` - Search bar with benefits

## 🚀 Deployment

To deploy the theme to Shopify:

```bash
shopify theme push
```

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
