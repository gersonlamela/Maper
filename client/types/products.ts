type ProductImage = {
  id: string;
  url: string;
  isPrimary: boolean;
};

type ProductCategory = {
  id: string;
  name: string;
  slug: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  discountPercentage: number;
  category: ProductCategory;
  images: ProductImage[];
};
