import React, { useState } from 'react';
import './Products.css';
import productTableImage from '../../assets/product tabel.png';
import image4 from '../../assets/Frame 47.png';

const ProductPage = () => {
  const [isTitleHovered, setIsTitleHovered] = useState(false);

  const handleTitleHover = () => {
    setIsTitleHovered(!isTitleHovered);
  };

  return (
    <div className="container mt-5">
      <h1
        className={`mb-4 clickable-title ${isTitleHovered ? 'hovered-title' : ''}`}
        onMouseEnter={handleTitleHover}
        onMouseLeave={handleTitleHover}
      >
        <span className="vertical-line"></span> Product Description
      </h1>

      <nav className="product-navbar">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="#description">
              Description
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#user-comments">
              User Comments
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#qa">
              Questions & Answers
            </a>
          </li>
        </ul>
      </nav>

      <div className="product-content mt-3">
        <div className="row">
          <div className="col-md-6">
            <section className="description-section" id="description">
              <p>
                Grâce à React, il est facile de créer des interfaces utilisateurs interactives.
                Définissez des vues simples pour chaque état de votre application, et lorsque 
                vos données changeront, React mettra à jour, de façon optimale, juste les composants
                qui en auront besoin.
              </p>
              <img
                src={productTableImage}
                alt="Tableau de produits"
                className="img-fluid rounded"
              />
            </section>
          </div>

          <div className="col-md-6">
            <section className="image-section" id="user-comments">
              <div className="image-wrapper">
                <img
                  src={image4}
                  alt="Image du produit"
                  className="img-fluid rounded"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
