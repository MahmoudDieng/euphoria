import React, { useState } from 'react';
import './Similar.css';
import Product1Image from '../../assets/Product 1.png';
import Product2Image from '../../assets/Product 2.png';
import Product3Image from '../../assets/Product 3.png';
import Product4Image from '../../assets/Product 4.png';
import Product5Image from '../../assets/Product 5.png';
import Product6Image from '../../assets/Product 6.png';
import Product7Image from '../../assets/Product 7.png';
import Product8Image from '../../assets/Product 8.png';

const SimilarPage = () => {
  const [isTitleHovered, setIsTitleHovered] = useState(false);

  const handleTitleHover = () => {
    setIsTitleHovered(!isTitleHovered);
  };

  const products = [
    { id: 1, image: Product1Image },
    { id: 2, image: Product2Image },
    { id: 3, image: Product3Image },
    { id: 4, image: Product4Image },
    { id: 5, image: Product5Image },
    { id: 6, image: Product6Image },
    { id: 7, image: Product7Image },
    { id: 8, image: Product8Image },
  ];

  return (
    <div className="similar-page">
      <div className="container"> {/* Utilisez la classe .container ici */}
        <h1
          className={`text-left mb-4 clickable-title similar-title ${
            isTitleHovered ? 'hovered-title' : ''
          }`}
          onMouseEnter={handleTitleHover}
          onMouseLeave={handleTitleHover}
        >
          Similar Products
        </h1>

        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-3 mb-4">
              <div className="card">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={`Product ${product.id}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarPage;
