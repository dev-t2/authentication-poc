class ProductService10 {
  getProduct();
  getProduct(id: number);

  getProduct(id?: number) {
    if (typeof id === 'number') {
      console.log(id);
    }

    console.log('Undefined');
  }
}

const productService = new ProductService10();

productService.getProduct();
productService.getProduct(123);
