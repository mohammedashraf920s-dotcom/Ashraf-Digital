import { Project, Skill, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES = [
  { title: 'Facebook Marketing', desc: 'High-ROI ad campaigns tailored to drive sales and active engagement.', icon: 'Facebook' },
  { title: 'Instagram Marketing', desc: 'Visual storytelling and community management to grow your brand presence.', icon: 'Instagram' },
  { title: 'TikTok Marketing', desc: 'Viral content strategies designed for the next generation of social media.', icon: 'Zap' },
  { title: 'YouTube Marketing', desc: 'Channel growth tactics and SEO optimization to dominate search results.', icon: 'Youtube' },
  { title: 'Short Video Editing', desc: 'Professional editing for Reels, Shorts, and TikToks optimized for high retention.', icon: 'Video' },
  { title: 'Apple ID Marketing', desc: 'Specialized lead generation and account creation marketing strategies.', icon: 'Apple' },
  { title: 'E-commerce Development', desc: 'AI-powered, high-converting online stores built for scale and performance.', icon: 'ShoppingBag' },
  { title: 'Growth Strategy', desc: 'Full-scale marketing strategies designed to scale your business operations.', icon: 'TrendingUp' },
];

export const BLOG_POSTS = [
  { id: '1', category: 'Facebook Marketing', date: 'APRIL 15, 2024', title: 'Facebook Ad Algorithms: How to Win in 2024', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop' },
  { id: '2', category: 'Short Video Content', date: 'APRIL 10, 2024', title: 'TikTok Growth: Scaling Your Brand with Reels & Shorts', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop' },
  { id: '3', category: 'Web Development', date: 'MARCH 28, 2024', title: 'E-commerce Website Strategy for High Conversion', image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop' },
];


export const REVIEWS = [
  { name: 'Kaitlin Beaver', role: 'NEW YORK', date: 'October 3, 2024', text: "Ashraf's expertise in Facebook ads has significantly increased our sales. Highly professional!", rating: 5 },
  { name: 'Nhân Lê', role: 'HO CHI MINH CITY', date: 'August 11, 2024', text: "The best digital marketing service I've experienced. My business growth is now unstoppable.", rating: 5 },
  { name: 'Dhrupo Nil', role: 'DHAKA', date: 'June 23, 2024', text: "Excellent strategic planning and execution. Truly transformed my brand identity.", rating: 5 },
  { name: 'Sarah Miller', role: 'LONDON', date: 'November 2, 2024', text: "Incredible attention to detail. My ROI went up by 300% in just two months.", rating: 5 },
  { name: 'Fahim Murshed', role: 'DUBAI', date: 'May 12, 2024', text: "The short video editing style is world-class. My Reels are finally going viral!", rating: 5 },
  { name: 'James Wilson', role: 'TORONTO', date: 'December 12, 2024', text: "Professional, timely, and results-oriented. Ashraf is a marketing genius.", rating: 5 },
];

