// ProductCard.js

import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  text-align: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const ProductCard = ({ product }) => {
  const { id, name, price, image } = product;

  // Placeholder image URL
  const placeholderImage = 'https://via.placeholder.com/150';

  return (
    <Card>
      <ProductImage src={image || placeholderImage} alt={name} />
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </Card>
  );
};

export default ProductCard;
