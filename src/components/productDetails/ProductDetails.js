import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../app/cartSlice';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div className="text-center my-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-danger my-5">{error}</div>;
  }

  return (
    <section className="product-details-section py-5">
      <div className="container">
        {product && (
          <div className="card product-details-card mx-auto">
            <div className="row g-0">
              <div className="col-md-6 d-flex align-items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid"
                  style={{ objectFit: 'contain', maxHeight: '400px', width: '100%' }}
                />
              </div>
              <div className="col-md-6">
                <div className="card-body d-flex flex-column justify-content-between h-100">
                  <h2 className="card-title text-center mb-3">{product.title}</h2>
                  <p className="card-text text-muted text-center">{product.description}</p>
                  <p className="card-text text-center fs-4 fw-bold">Price: ${product.price.toFixed(2)}</p>
                  <div className="text-center">
                    <button
                      className="btn btn-primary btn-lg px-5 py-2"
                      onClick={() => dispatch(addToCart(product))}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;
