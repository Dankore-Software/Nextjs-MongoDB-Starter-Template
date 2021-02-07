const title = 'Next.js MongoDB Starter Template';
const description = 'Dankore Software Nextjs MongoDB Starter Template.';

const SEO = {
  title,
  description,
  canonical: 'https://dankore.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://dankore.com',
    title,
    description,
    images: [
      {
        url: 'https://dankore.com/og.png',
        alt: title,
        width: 1200,
        height: 700,
      },
      {
        url: 'https://www.example.ie/og-image-02.jpg',
        width: 900,
        height: 800,
        alt: 'Og Image Alt Second',
      },
      { url: 'https://www.example.ie/og-image-03.jpg' },
    ],
  },
  twitter: {
    handle: '@handle',
    site: '@handle',
    cardType: 'summary_large_image',
  },
};

export default SEO;
