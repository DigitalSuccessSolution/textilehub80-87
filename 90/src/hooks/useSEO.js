import { useEffect } from 'react';

const useSEO = (titleArg, descriptionArg, keywordsArg) => {
  let title = titleArg;
  let description = descriptionArg;
  let keywords = keywordsArg;

  // Support passing a single object: useSEO({ title, description, keywords })
  if (typeof titleArg === 'object' && titleArg !== null) {
    title = titleArg.title;
    description = titleArg.description;
    keywords = titleArg.keywords;
  }

  useEffect(() => {
    // Title
    document.title = title ? `${title} | Kaaya Fabrics` : 'Kaaya Fabrics - Premium Garment & Textile Destination';

    // Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description || 'Kaaya Fabrics - Leading premium textile showroom and garment store, offering sarees, dress suits, bedsheets, and hosiery.';

    // Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords || 'sarees, leggings, kurtis, dress suits, bedsheets, suiting, shirting, ethnic wear, garments, textile retail, Kaaya Fabrics';

    // OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = title ? `${title} | Kaaya Fabrics` : 'Kaaya Fabrics - Premium Garment & Textile Destination';

    // OG Description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.content = description || 'Kaaya Fabrics - Leading premium textile showroom and garment store, offering sarees, dress suits, bedsheets, and hosiery.';

  }, [title, description, keywords]);
};

export default useSEO;
