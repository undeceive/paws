import React from 'react';
import { Product, HeroBanner } from '../components';
import { mockProducts } from '../lib/mockData';

const Home = () => {
  const products = mockProducts;
  // Mock banner data since we don't have Sanity
  const bannerData = [{
    smallText: 'Industrial Supply Co.',
    midText: 'Quality since 2024',
    largeText1: 'Industrial Supply Co.',
    image: null,
    product: 'mig-welding-wire-035-10lb',
    buttonText: 'Shop Now',
    desc: 'Premium industrial supplies for welding, safety equipment, tools, and hardware.'
  }];

  return (
    <div>
      <HeroBanner heroBanner={bannerData[0]} />
      <div className="products-heading">
        <h2>Products</h2>
        <p>Premium industrial supplies for professionals.</p>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
