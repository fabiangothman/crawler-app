export interface ItemType {
  pageType: string;
  name: string;
  description: string;
  price: string;
  available: boolean;
  size: string;
  image: string;
  level: number;
  category: string;
  subCategory: string;
}

export interface CategoryItemType {
  fileName: string;
  prevPath: string;
  newPath: string;
  path: string;
  childUrl: string;
  pageType: string;
  name: string;
  level: number;
  child?: CategoryItemType[] | ItemType;
  description?: string;
  price?: string;
  available?: boolean;
  size?: string;
  image?: string;
}