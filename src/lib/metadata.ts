export interface PageMetadata {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  keywords?: string;
}

export const pageMetadata: Record<string, PageMetadata> = {
  '/': {
    title: '🇲🇾 Resign Je - Malaysia\'s #1 Resignation Platform',
    description: 'The ultimate Malaysian resignation platform. Track your resignation journey, connect with fellow resignees, and celebrate your career transitions in true Malaysian style.',
    ogTitle: '🇲🇾 Resign Je - Malaysia\'s #1 Resignation Platform',
    ogDescription: 'Join Malaysia\'s premier resignation community. Track your journey, earn awards, and connect with fellow career changers.',
    ogImage: '/og-landing.jpg',
    keywords: 'resignation, malaysia, career change, job transition, malaysian workplace'
  },
  '/hall-of-fame': {
    title: 'Hall of Fame - Resign Je',
    description: 'Discover the legendary resignees who have made their mark. Browse profiles of Malaysian professionals who took the leap and transformed their careers.',
    ogTitle: 'Hall of Fame - Malaysia\'s Top Resignees',
    ogDescription: 'Meet the legends who dared to resign and build something amazing. Get inspired by their stories.',
    ogImage: '/og-hall-of-fame.jpg',
    keywords: 'hall of fame, successful resignees, career inspiration, malaysian professionals'
  },
  '/awards': {
    title: 'Awards & Achievements - Resign Je',
    description: 'Configure and manage resignation awards. Set up achievement systems to gamify the resignation experience for your community.',
    ogTitle: 'Resignation Awards System - Resign Je',
    ogDescription: 'Gamify resignations with our comprehensive awards system. Create achievements that celebrate career transitions.',
    ogImage: '/og-awards.jpg',
    keywords: 'resignation awards, achievements, gamification, career milestones'
  },
  '/should-i-resign': {
    title: 'Should I Resign? - Decision Game - Resign Je',
    description: 'Not sure if you should resign? Play our interactive decision game to explore your options and get insights into your career situation.',
    ogTitle: 'Should I Resign? - Interactive Career Decision Tool',
    ogDescription: 'Confused about resigning? Our fun interactive game helps you explore your career options and make informed decisions.',
    ogImage: '/og-should-i-resign.jpg',
    keywords: 'should i resign, career decision, job satisfaction, resignation advice, career guidance'
  },
  '/settings': {
    title: 'Settings - Resign Je',
    description: 'Customize your Resign Je experience. Manage your profile, notification preferences, and platform settings.',
    ogTitle: 'Settings - Resign Je',
    ogDescription: 'Personalize your resignation journey. Configure your profile and preferences.',
    ogImage: '/og-settings.jpg',
    keywords: 'settings, profile, preferences, account management'
  }
};

export const updateMetadata = (path: string) => {
  const metadata = pageMetadata[path] || pageMetadata['/'];
  
  // Update document title
  document.title = metadata.title;
  
  // Update or create meta tags
  updateMetaTag('description', metadata.description);
  updateMetaTag('keywords', metadata.keywords || '');
  
  // Update Open Graph tags
  updateMetaTag('og:title', metadata.ogTitle || metadata.title, 'property');
  updateMetaTag('og:description', metadata.ogDescription || metadata.description, 'property');
  updateMetaTag('og:image', metadata.ogImage || '/og-default.jpg', 'property');
  updateMetaTag('og:url', `${window.location.origin}${path}`, 'property');
  updateMetaTag('og:type', 'website', 'property');
  updateMetaTag('og:site_name', 'Resign Je', 'property');
  
  // Update Twitter Card tags
  updateMetaTag('twitter:card', 'summary_large_image', 'name');
  updateMetaTag('twitter:title', metadata.ogTitle || metadata.title, 'name');
  updateMetaTag('twitter:description', metadata.ogDescription || metadata.description, 'name');
  updateMetaTag('twitter:image', metadata.ogImage || '/og-default.jpg', 'name');
};

const updateMetaTag = (key: string, content: string, attribute: 'name' | 'property' = 'name') => {
  if (!content) return;
  
  let element = document.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement;
  
  if (element) {
    element.content = content;
  } else {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    element.content = content;
    document.head.appendChild(element);
  }
};