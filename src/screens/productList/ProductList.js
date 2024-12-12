import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center my-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-danger my-5">{error}</div>;
  }

  return (
    <section className="product-list-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Products</h2>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card product-card h-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'contain' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-truncate" title={product.title}>
                    {product.title}
                  </h5>
                  <p className="card-text text-muted">${product.price.toFixed(2)}</p>
                  <button
                    className="btn btn-primary mt-auto"
                    onClick={() => navigate(`/products/${product.id}`)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;

// CSS (add to your styles.css or inline styles for the component):
/*
.product-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.product-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.product-card img {
  transition: transform 0.3s ease;
}

.product-card:hover img {
  transform: scale(1.1);
}

.product-card .card-title {
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
}

.product-card .card-text {
  font-size: 1rem;
  color: #555;
  text-align: center;
}

.product-card .btn {
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
}
*/