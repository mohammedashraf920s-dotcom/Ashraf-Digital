export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Development' | 'Marketing' | 'AI';
  image: string;
  link?: string;
  tags: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Dev' | 'Marketing' | 'AI';
}

export interface NavItem {
  label: string;
  href: string;
}
