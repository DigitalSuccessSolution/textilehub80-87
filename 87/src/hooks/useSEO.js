import { useEffect } from 'react';

const useSEO = (title, description, keywords) => {
  useEffect(() => {
    // Title
    document.title = title ? `${title} | Retail Textile` : 'Retail Textile - Elegant Garment & Textile Boutique Mall';

    // Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description || 'Retail Textile - Elegant garment and textile boutique retail mall, offering luxury sarees, kurtis, dress suits, bedsheets, and hosiery.';

    // Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords || 'sarees, leggings, kurtis, dress suits, bedsheets, suiting, shirting, ethnic wear, garments, textile boutique mall';

    // OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = title ? `${title} | Retail Textile` : 'Retail Textile - Elegant Garment & Textile Boutique Mall';

    // OG Description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.content = description || 'Retail Textile - Elegant garment and textile boutique retail mall, offering luxury sarees, kurtis, dress suits, bedsheets, and hosiery.';

  }, [title, description, keywords]);
};

export default useSEO;
