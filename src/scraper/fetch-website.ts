import { chromium } from 'playwright-core';
import * as fs from 'fs';
import * as path from 'path';

interface WebsiteData {
  url: string;
  title: string;
  html: string;
  styles: string[];
  scripts: string[];
  images: string[];
  links: string[];
  metadata: {
    description?: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
  };
}

async function fetchWebsite(url: string): Promise<WebsiteData> {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();

  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

    // Extract page data
    const data: WebsiteData = {
      url,
      title: await page.title(),
      html: await page.content(),
      styles: await page.$eval('link[rel="stylesheet"]', (links: any[]) =>
        links.map((link: any) => link.href)
      ),
      scripts: await page.$eval('script[src]', (scripts: any[]) =>
        scripts.map((script: any) => script.src)
      ),
      images: await page.$eval('img', (imgs: any[]) => imgs.map((img: any) => img.src)),
      links: await page.$eval('a[href]', (anchors: any[]) => anchors.map((a: any) => a.href)),
      metadata: {
        description: await page
          .$eval('meta[name="description"]', (el) => (el as any).content)
          .catch(() => undefined),
        keywords: await page
          .$eval('meta[name="keywords"]', (el) => (el as any).content)
          .catch(() => undefined),
        ogTitle: await page
          .$eval('meta[property="og:title"]', (el) => (el as any).content)
          .catch(() => undefined),
        ogDescription: await page
          .$eval('meta[property="og:description"]', (el) => (el as any).content)
          .catch(() => undefined),
        ogImage: await page
          .$eval('meta[property="og:image"]', (el) => (el as any).content)
          .catch(() => undefined),
      },
    };

    return data;
  } finally {
    await browser.close();
  }
}

async function main() {
  const targetUrl = 'https://dt68cskh.net/';

  console.log(`Fetching website: ${targetUrl}`);

  try {
    const data = await fetchWebsite(targetUrl);

    // Create output directory
    const outputDir = path.join(process.cwd(), 'scraped-data');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Save data
    const outputFile = path.join(outputDir, 'website-data.json');
    fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));

    console.log(`\nWebsite data saved to: ${outputFile}`);
    console.log(`\nSummary:`);
    console.log(`- Title: ${data.title}`);
    console.log(`- Stylesheets: ${data.styles.length}`);
    console.log(`- Scripts: ${data.scripts.length}`);
    console.log(`- Images: ${data.images.length}`);
    console.log(`- Links: ${data.links.length}`);
  } catch (error) {
    console.error('Error fetching website:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

export { fetchWebsite, WebsiteData };
