import React, { useState } from 'react';
import './Women2.css';
import image1 from '../../assets/image.png';
import image2 from '../../assets/image (1).png';
import image3 from '../../assets/image (2).png';
import image4 from '../../assets/Rectangle 13.png';
import { BiCart } from 'react-icons/bi';
import { FaLock, FaRuler, FaTruck, FaBoxOpen } from 'react-icons/fa';

const Women2Page = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [rating, setRating] = useState(0);
  const [commentVisible, setCommentVisible] = useState(false);
  const [comment, setComment] = useState('');
  const [selectedSize, setSelectedSize] = useState('xs');
  const [selectedColor, setSelectedColor] = useState('noir');
  const [section2Image, setSection2Image] = useState(image4);

  const section1Images = [image1, image2, image3];

  const handleImageChange = (index) => {
    setSelectedImage(index);
    setSection2Image(section1Images[index]);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const toggleComment = () => {
    setCommentVisible(!commentVisible);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleArrowLeftClick = () => {
    if (selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
      setSection2Image(section1Images[selectedImage - 1]);
    }
  };

  const handleArrowRightClick = () => {
    if (selectedImage < section1Images.length - 1) {
      setSelectedImage(selectedImage + 1);
      setSection2Image(section1Images[selectedImage + 1]);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2 col-sm-6">
          <div className="section">
            <div className="image-stack">
              <div className="image-overlay">
                {section1Images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className={`img-fluid ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => handleImageChange(index)}
                  />
                ))}
              </div>
              <div className="image-arrows">
                <button
                  className={`arrow-left ${selectedImage === 0 ? 'disabled' : ''}`}
                  onClick={handleArrowLeftClick}
                >
                  &lt;
                </button>
                <button
                  className={`arrow-right ${
                    selectedImage === section1Images.length - 1 ? 'disabled' : ''
                  }`}
                  onClick={handleArrowRightClick}
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-sm-6">
          <div className="section">
            <img src={section2Image} alt="Image4" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-5 col-sm-6">
          <div className="section">
            <div className="product-info">
              <h2>Raven Hoodi with Black Colored Design</h2>
              <div className="rating">
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={index}
                    className={`star ${index < rating ? 'filled' : ''}`}
                    onClick={() => handleRatingChange(index + 1)}
                  >
                    &#9733;
                  </span>
                ))}
                <span className="rating-text">3.5 </span>
                <i
                  className={`bi bi-chat-square ${commentVisible ? 'active' : ''}`}
                  onClick={toggleComment}
                ></i>
                <span className="comment-count">120 commentaires</span>
              </div>
              {commentVisible && (
                <div className="comment">
                  <textarea
                    rows="4"
                    cols="50"
                    placeholder="Ajouter un commentaire..."
                    value={comment}
                    onChange={handleCommentChange}
                  ></textarea>
                </div>
              )}
              <div className="size-guide">
                <div className="size-guide-label">
                  <h3>Select Size</h3>
                  <i className="bi bi-arrow-right-circle"></i>
                </div>
                <div className="size-buttons">
                  <button
                    className={`size-button ${selectedSize === 'xs' ? 'active' : ''}`}
                    onClick={() => setSelectedSize('xs')}
                  >
                    XS
                  </button>
                  <button
                    className={`size-button ${selectedSize === 's' ? 'active' : ''}`}
                    onClick={() => setSelectedSize('s')}
                  >
                    S
                  </button>
                  <button
                    className={`size-button ${selectedSize === 'm' ? 'active' : ''}`}
                    onClick={() => setSelectedSize('m')}
                  >
                    M
                  </button>
                  <button
                    className={`size-button ${selectedSize === 'l' ? 'active' : ''}`}
                    onClick={() => setSelectedSize('l')}
                  >
                    L
                  </button>
                  <button
                    className={`size-button ${selectedSize === 'xl' ? 'active' : ''}`}
                    onClick={() => setSelectedSize('xl')}
                  >
                    XL
                  </button>
                </div>
              </div>
              <div className="available-colors left-align">
                <span>Couleur disponible :</span>
                <div className="color-buttons">
                  <button
                    className={`color-button ${selectedColor === 'noir' ? 'active' : ''}`}
                    onClick={() => setSelectedColor('noir')}
                  >
                    <span className="color-circle black"></span>
                  </button>
                  <button
                    className={`color-button ${selectedColor === 'jaune' ? 'active' : ''}`}
                    onClick={() => setSelectedColor('jaune')}
                  >
                    <span className="color-circle yellow"></span>
                  </button>
                  <button
                    className={`color-button ${selectedColor === 'rose' ? 'active' : ''}`}
                    onClick={() => setSelectedColor('rose')}
                  >
                    <span className="color-circle pink"></span>
                  </button>
                  <button
                    className={`color-button ${selectedColor === 'rouge' ? 'active' : ''}`}
                    onClick={() => setSelectedColor('rouge')}
                  >
                    <span className="color-circle red"></span>
                  </button>
                </div>
              </div>
              <div className="add-to-cart">
                <button className="btn-add-to-cart">
                  <BiCart className="cart-icon" /> Ajouter au panier
                </button>
                <span className="price-button">
                  <button className="btn-price">$63.00</button>
                </span>
              </div>
              <div className="icons">
                <div className="icon">
                  <FaLock className="fa-icon" />
                  <span className="icon-text">Secure Payment</span>
                </div>
                <div className="divider"></div>
                <div className="icon">
                  <FaRuler className="fa-icon" />
                  <span className="icon-text">Size & Fit</span>
                </div>
                <div className="divider"></div>
                <div className="icon">
                  <FaTruck className="fa-icon" />
                  <span className="icon-text">Free Shipping</span>
                </div>
                <div className="divider"></div>
                <div className="icon">
                  <FaBoxOpen className="fa-icon" />
                  <span className="icon-text">Free Shipping & Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Women2Page;
