import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface DocumentMetaProps {
  title: string;
  description: string;
  canonicalPath?: string;
  image?: string;
  noIndex?: boolean;
}

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=100&w=2400&auto=format&fit=crop';
const BASE_URL = 'https://lumiopartner.com';

export function useDocumentMeta({
  title,
  description,
  canonicalPath,
  image = DEFAULT_IMAGE,
  noIndex = false,
}: DocumentMetaProps) {
  const location = useLocation();

  useEffect(() => {
    // 1. Update Document Title
    const formattedTitle = title.includes('Lumio') ? title : `${title} | Lumio`;
    document.title = formattedTitle;

    // Helper to update or create a meta tag
    const updateOrCreateMeta = (name: string, value: string, isProperty = false) => {
      const attributeName = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attributeName}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    // 2. Standard Metadata
    updateOrCreateMeta('description', description);
    updateOrCreateMeta('robots', noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 3. Canonical URL
    const currentPath = canonicalPath || location.pathname;
    const fullUrl = `${BASE_URL}${currentPath}`;
    
    let canonicalElement = document.querySelector('link[rel="canonical"]');
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.setAttribute('href', fullUrl);

    // 4. Open Graph Metadata
    updateOrCreateMeta('og:title', formattedTitle, true);
    updateOrCreateMeta('og:description', description, true);
    updateOrCreateMeta('og:image', image, true);
    updateOrCreateMeta('og:url', fullUrl, true);
    updateOrCreateMeta('og:type', 'website', true);

    // 5. Twitter Card Metadata
    updateOrCreateMeta('twitter:title', formattedTitle);
    updateOrCreateMeta('twitter:description', description);
    updateOrCreateMeta('twitter:image', image);
    updateOrCreateMeta('twitter:url', fullUrl);
    updateOrCreateMeta('twitter:card', 'summary_large_image');

  }, [title, description, canonicalPath, image, noIndex, location.pathname]);
}
