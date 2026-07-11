export interface NavMenuItem {
  label: string;
  href: string;
  subItems?: string[];
}

export interface StatItem {
  value: string;
  label: string;
  iconName: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
}

export interface ProductDevice {
  id: string;
  name: string;
  brand: string;
  image: string;
  description: string;
  features: string[];
}

export interface TechnologyStrength {
  id: string;
  title: string;
  iconName: string;
  description: string;
}

export interface CosmeticBrand {
  name: string;
  logo: string;
  description?: string;
}
