import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';
import { mockProducts, getProductBySlug, getRelatedProducts } from '../../lib/mockData';

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  // Use a placeholder image since we don't have real images
  const placeholderImage = 'https://placehold.co/400x400/0a1628/f59e0b?text=Industrial+Supply';

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={placeholderImage}
              className="product-detail-image"
              alt={name}
            />
          </div>
          <div className="small-images-container">
            {/* Show placeholder images */}
            {[1, 2, 3].map((_, i) => (
              <img
                key={i}
                src={placeholderImage}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
                alt={`${name} view ${i+1}`}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details:</h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Use mock data instead of Sanity
export async function getStaticPaths() {
  const paths = mockProducts.map((product) => ({
    params: { slug: product.slug.current }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = getProductBySlug(params.slug);
  const products = getRelatedProducts(params.slug);
  return { props: { product, products } };
}

export default ProductDetails;
