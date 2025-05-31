# Amali Website - Deployment Guide

## Quick Deployment (Static Site)

The website has been built as a static Next.js export and is ready for deployment. Use the files in the `out/` directory or the pre-packaged deployment zip.

### Option 1: Netlify Deployment (Recommended)

1. **Direct Upload Method:**
   - Download `amali-website-deployment.zip` from the `output/` folder
   - Go to [Netlify](https://app.netlify.com)
   - Drag and drop the zip file to deploy instantly

2. **Git Repository Method:**
   - Push this project to GitHub/GitLab
   - Connect your repository to Netlify
   - Build settings are already configured in `netlify.toml`
   - Build command: `bun run build`
   - Publish directory: `out`

### Option 2: Vercel Deployment

1. **CLI Method:**
   ```bash
   npx vercel --prod
   ```

2. **Web Interface:**
   - Go to [Vercel](https://vercel.com)
   - Import project from Git
   - Framework will be auto-detected as Next.js

### Option 3: Other Static Hosting

The `out/` directory contains all static files and can be deployed to any static hosting service:
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Surge.sh

## Build Configuration

### Next.js Config (`next.config.js`)
```javascript
const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  images: {
    unoptimized: true,
    // Image domains configured for external images
  }
};
```

### Netlify Config (`netlify.toml`)
```toml
[build]
  command = "bun run build"
  publish = "out"

[images]
  remote_images = ["https://source.unsplash.com/.*", ...]
```

## Build Process

To rebuild the site:

1. **Install dependencies:**
   ```bash
   bun install
   ```

2. **Build static export:**
   ```bash
   bun run build
   ```

3. **The static files will be generated in the `out/` directory**

## Environment Setup

No environment variables are required for basic deployment. However, if you need to customize:

1. **Shopify Integration:**
   - Product links point to: `https://amali.myshopify.com/products/amali-nutrition-pack`
   - Shopify Buy Button script is embedded with domain: `amali.myshopify.com`

2. **Klaviyo Newsletter:**
   - Form is embedded and pre-configured
   - No additional setup required

## Troubleshooting

### Common Issues:

1. **Images not loading:**
   - Ensure all images in `public/` directory are included
   - Check image paths are relative (no leading slash)

2. **Shopify integration not working:**
   - Verify Shopify domain is correct
   - Check product URLs are accessible

3. **Build fails:**
   - Run `bun install` to ensure dependencies are installed
   - Check for TypeScript errors with `bunx tsc --noEmit`

### Build Commands:
```bash
# Clean build
rm -rf .next out
bun run build

# Lint and format
bun run lint
bun run format
```

## File Structure

```
amali-website/
├── out/                 # Static build output (deploy this)
├── src/
│   ├── app/
│   │   ├── page.tsx    # Main homepage component
│   │   ├── layout.tsx  # Root layout
│   │   └── globals.css # Global styles
│   └── components/ui/   # Shadcn/ui components
├── public/             # Static assets (images, etc.)
├── next.config.js      # Next.js configuration
├── netlify.toml       # Netlify deployment config
└── package.json       # Dependencies and scripts
```

## Performance Notes

- Site is fully static (no server-side rendering)
- Images are optimized for web
- CSS is built with Tailwind CSS
- JavaScript is bundled and minified
- Total bundle size: ~116kb first load

## Support

For deployment issues or customizations, refer to:
- [Next.js Static Export Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Netlify Deployment Guide](https://docs.netlify.com/)
- [Vercel Deployment Guide](https://vercel.com/docs)