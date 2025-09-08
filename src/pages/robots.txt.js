export async function GET({ site }) {
  const siteUrl = site || 'https://ldpdigital.com';
  
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${siteUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Block access to admin or private areas (if any)
Disallow: /admin/
Disallow: /private/
Disallow: /_astro/

# Allow all major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

# Block AI training crawlers if desired (optional)
# User-agent: GPTBot
# Disallow: /

# User-agent: ChatGPT-User
# Disallow: /

# User-agent: CCBot
# Disallow: /`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
