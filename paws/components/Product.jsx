import React from 'react';
import Link from 'next/link';

const Product = ({ product }) => {
  const { name, slug, price } = product;

  // Use a placeholder image since we don't have real images
  const placeholderImage = 'https://placehold.co/300x300/0a1628/f59e0b?text=Industrial+Supply';

  return (
    <Link href={`/product/${slug.current}`}>
      <div className="product-card">
        <img
          src={placeholderImage}
          alt={name}
          loading="lazy"
        />
        <p className="product-name">{name}</p>
        <p className="product-price">${price}</p>
      </div>
    </Link>
  );
};

export default Product;
