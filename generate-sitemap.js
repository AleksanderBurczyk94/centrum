const fs = require('fs'); // wymagane do pracy z plikami
const path = require('path');

// Ręcznie wprowadzone ścieżki do aplikacji
const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/zakres-pomocy', changefreq: 'daily', priority: 0.8 },
  {
    url: '/zakres-pomocy/konsultacje-psychologiczne',
    changefreq: 'daily',
    priority: 0.8,
  },
  {
    url: '/zakres-pomocy/terapia-integracji-sensorycznej',
    changefreq: 'daily',
    priority: 0.8,
  },
  {
    url: '/zakres-pomocy/terapia-nerorozwojowa-odruchow',
    changefreq: 'daily',
    priority: 0.8,
  },
  {
    url: '/zakres-pomocy/terapia-neurotaktylna',
    changefreq: 'daily',
    priority: 0.8,
  },
  {
    url: '/zakres-pomocy/terapia-przetwarzania-sluchowego',
    changefreq: 'daily',
    priority: 0.8,
  },
  { url: '/zakres-pomocy/terapia-reki', changefreq: 'daily', priority: 0.8 },
  {
    url: '/zakres-pomocy/terapia-pedagogiczna',
    changefreq: 'daily',
    priority: 0.8,
  },
  {
    url: '/zakres-pomocy/konsultacje-specjalistyczne',
    changefreq: 'daily',
    priority: 0.8,
  },
  { url: '/cennik', changefreq: 'daily', priority: 0.7 },
  { url: '/nasze-centrum', changefreq: 'daily', priority: 0.7 },
  { url: '/blog', changefreq: 'weekly', priority: 0.6 },
  { url: '/blog/0', changefreq: 'weekly', priority: 0.7 },
  { url: '/kontakt', changefreq: 'daily', priority: 0.7 },
  { url: '/dokumenty/zgoda-na-terapie', changefreq: 'monthly', priority: 0.5 },
  {
    url: '/dokumenty/zgoda-na-udostepnienie-wizerunku',
    changefreq: 'monthly',
    priority: 0.5,
  },
  {
    url: '/dokumenty/standardy-ochrona-nieletnich',
    changefreq: 'monthly',
    priority: 0.5,
  },
  { url: '/rodo', changefreq: 'monthly', priority: 0.5 },
  { url: '/terapeuta/0', changefreq: 'daily', priority: 0.8 },
  { url: '/terapeuta/1', changefreq: 'daily', priority: 0.6 },
  { url: '/terapeuta/2', changefreq: 'daily', priority: 0.6 },
  { url: '/terapeuta/3', changefreq: 'daily', priority: 0.6 },
  { url: '/terapeuta/4', changefreq: 'daily', priority: 0.6 },
  { url: '/umow-wizyte', changefreq: 'monthly', priority: 0.5 },
  { url: '/kariera', changefreq: 'monthly', priority: 0.5 },
];

// Funkcja do generowania sitemap.xml
const generateSitemap = () => {
  const sitemapUrls = urls.map((urlObj) => {
    return `
      <url>
        <loc>https://rownowagacentrum.pl${urlObj.url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>${urlObj.changefreq}</changefreq>
        <priority>${urlObj.priority}</priority>
      </url>
    `;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapUrls.join('')}
    </urlset>
  `;

  // Zapisz plik sitemap.xml w folderze src/assets
  const filePath = path.join(__dirname, 'src/sitemap.xml'); // Ścieżka do zapisu
  fs.writeFileSync(filePath, sitemap); // Zapisz do pliku
  console.log('Sitemap generated at: ', filePath);
};

// Uruchom funkcję
generateSitemap();
