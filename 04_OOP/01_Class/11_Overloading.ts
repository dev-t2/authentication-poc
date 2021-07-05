interface Product11 {
  id: number;
  description: string;
}

class ProductService11 {
  getProduct(id: number): Product11;
  getProduct(description: string): Product11[];

  getProduct(product: number | string): Product11 | Product11[] {
    if (typeof product === 'number') {
      console.log('Overloading ID');

      return { id: product, description: '' };
    }

    if (typeof product === 'string') {
      console.log('Overloading Description');

      return [
        { id: 1, description: product },
        { id: 2, description: product },
      ];
    }
  }
}

const productService11 = new ProductService11();

console.log(productService11.getProduct(123));
console.log('');
console.log(productService11.getProduct('Product'));
