export async function GET({ site }) {
  const siteUrl = site || 'https://ldpdigital.co.id';

  const pages = [
    {
      url: '',
      changefreq: 'weekly',
      priority: '1.0',
      lastmod: '2025-09-15'
    },
    {
      url: 'about',
      changefreq: 'monthly',
      priority: '0.8',
      lastmod: '2025-09-15'
    },
    {
      url: 'contact',
      changefreq: 'monthly',
      priority: '0.9',
      lastmod: '2025-09-15'
    },
    {
      url: 'services',
      changefreq: 'monthly',
      priority: '0.9',
      lastmod: '2025-09-15'
    },
    {
      url: 'portfolio',
      changefreq: 'monthly',
      priority: '0.8',
      lastmod: '2025-09-15'
    },
    {
      url: 'privacy',
      changefreq: 'yearly',
      priority: '0.3',
      lastmod: '2025-09-15'
    },
    {
      url: 'terms',
      changefreq: 'yearly',
      priority: '0.3',
      lastmod: '2025-09-15'
    },
    {
      url: 'industries/construction',
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: '2025-09-15'
    },
    {
      url: 'services/erp',
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: '2025-09-15'
    },
    {
      url: 'services/custom-software',
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: '2025-09-15'
    },
    {
      url: 'services/consulting',
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: '2025-09-15'
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${pages.map(page => `  
  <url>
    <loc>${siteUrl}${page.url ? '/' + page.url : ''}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
  
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
