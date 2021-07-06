interface Product {
  id: number;
  description: string;
}

interface IProductService {
  getProducts(): Product[];
  getProductById(id: number): Product;
}

class ProductService implements IProductService {
  getProducts(): Product[] {
    return [];
  }

  getProductById(id: number): Product {
    return { id: 1, description: 'Good Product' };
  }
}

class MockProductService implements IProductService {
  getProducts(): Product[] {
    return [];
  }

  getProductById(id: number): Product {
    return { id: 2, description: 'Bad Product' };
  }
}

const getProductService = (isProduct: boolean): IProductService => {
  if (isProduct) {
    return new ProductService();
  }

  return new MockProductService();
};

const productService = getProductService(true);
const products = productService.getProducts();

console.log(products);
