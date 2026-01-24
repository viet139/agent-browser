# DT68 Website - Deployment Guide

## Project Overview

This repository contains two main components:

1. **Web Scraper** (`src/scraper/fetch-website.ts`) - A Playwright-based tool to fetch website content
2. **DT68 Website** (`dt68-website/`) - A modern React gaming platform website

## Web Scraper

### Purpose
Fetches and analyzes website structure, content, and metadata from any URL.

### Usage

```bash
# Build the scraper
npm run build

# Run the scraper
node dist/scraper/fetch-website.js
```

The scraper will:
- Navigate to the target URL (https://dt68cskh.net/)
- Extract HTML, CSS, JavaScript, images, and metadata
- Save the data to `scraped-data/website-data.json`

### Requirements
- Node.js 14+
- Playwright Chromium browser

## DT68 Website

### Local Development

```bash
cd dt68-website
npm install
npm start
```

Visit http://localhost:3000 to view the website.

### Production Build

```bash
cd dt68-website
npm run build
```

The optimized build will be in the `build/` folder.

### Deployment Options

#### 1. Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd dt68-website
vercel
```

#### 2. Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
cd dt68-website
npm run build
netlify deploy --prod --dir=build
```

#### 3. GitHub Pages

1. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/dt68-website"
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add deploy scripts to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

4. Deploy:
```bash
npm run deploy
```

#### 4. Static Server (Any VPS)

```bash
cd dt68-website
npm run build

# Install serve globally
npm install -g serve

# Serve the build folder
serve -s build -l 3000
```

For production with Nginx:

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/dt68-website/build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

#### 5. Docker

Create `Dockerfile` in `dt68-website/`:

```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t dt68-website .
docker run -p 80:80 dt68-website
```

## Environment Variables

No environment variables are required for the basic setup. If you add backend integration, create a `.env` file:

```env
REACT_APP_API_URL=https://api.yourdomain.com
REACT_APP_ANALYTICS_ID=your-analytics-id
```

## Performance Optimization

The website is already optimized with:
- ✅ Code splitting
- ✅ Minified CSS and JavaScript
- ✅ Gzip compression
- ✅ Optimized images (using emojis as placeholders)
- ✅ Lazy loading ready

### Further Optimizations

1. **Add real images**: Replace emoji placeholders with optimized images
2. **CDN**: Use a CDN for static assets
3. **Caching**: Configure proper cache headers
4. **Analytics**: Add Google Analytics or similar
5. **SEO**: Add meta tags, sitemap, robots.txt

## Security Considerations

For a production gaming platform:

1. **SSL/TLS**: Always use HTTPS
2. **Content Security Policy**: Add CSP headers
3. **Authentication**: Implement secure user authentication
4. **Payment Processing**: Use PCI-DSS compliant payment gateways
5. **Age Verification**: Implement proper age verification (18+)
6. **Licensing**: Ensure proper gaming licenses
7. **Responsible Gaming**: Add self-exclusion and limit-setting features

## Monitoring

Recommended monitoring tools:
- **Uptime**: UptimeRobot, Pingdom
- **Performance**: Google Lighthouse, WebPageTest
- **Analytics**: Google Analytics, Plausible
- **Error Tracking**: Sentry, LogRocket

## Support

For issues or questions:
1. Check the README.md in the dt68-website folder
2. Review component documentation
3. Check browser console for errors

## License

This is a demonstration project. Ensure you have proper licensing for any production gaming platform.
