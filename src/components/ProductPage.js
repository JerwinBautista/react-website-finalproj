// ProductPage.js

import React, { useState } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

// Import local images
import product1Image from './image/1111.jpg';
import product2Image from './image/2222.jpg';
import product3Image from './image/3333.jpg';
import product4Image from './image/4444.jpg';

const Container = styled.div`
  max-width: 800px;
  margin: 40px auto 0;  /* Add margin to the top */
  padding: 20px;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* 3 columns for each row */
  gap: 20px;
`;

const allProductsData = [
  { id: 1, name: 'Product 1', price: 19.99, image: product1Image },
  { id: 2, name: 'Product 2', price: 29.99, image: product2Image },
  { id: 3, name: 'Product 3', price: 24.99, image: product3Image },
  { id: 4, name: 'Product 4', price: 34.99, image: product4Image },
  { id: 5, name: 'Product 5', price: 39.99 },
  { id: 6, name: 'Product 6', price: 22.99 },
  { id: 7, name: 'Product 7', price: 28.99 },
  { id: 8, name: 'Product 8', price: 31.99 },
  { id: 9, name: 'Product 9', price: 26.99 },
  { id: 10, name: 'Product 10', price: 36.99 },
  { id: 11, name: 'Product 11', price: 19.99 },
  { id: 12, name: 'Product 12', price: 29.99 },
  { id: 13, name: 'Product 13', price: 24.99 },
  { id: 14, name: 'Product 14', price: 34.99 },
  { id: 15, name: 'Product 15', price: 39.99 },
  { id: 16, name: 'Product 16', price: 22.99 },
  { id: 17, name: 'Product 17', price: 28.99 },
  { id: 18, name: 'Product 18', price: 31.99 },
  { id: 19, name: 'Product 19', price: 26.99 },
  { id: 20, name: 'Product 20', price: 36.99 },
  { id: 21, name: 'Product 21', price: 42.99 },
];

const ProductPage = () => {
  const [products, setProducts] = useState(allProductsData);

  return (
    <Container>
      <h1>Product Page</h1>
      <ProductList>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductList>
    </Container>
  );
};

export default ProductPage;
