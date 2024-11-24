type Product = {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  stock: number;
};

const products: Product[] = [
  {
    id: "1",
    name: "Smartphone",
    image: "/images/vtafgxa0tejdyqsqoi7b.png",
    description: "A sleek and modern smartphone with advanced features.",
    price: 999.99,
    stock: 10,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};
