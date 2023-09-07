// App.js

import React from 'react';
import './App.css';
import Women2Page from './components/Women2/Women2';
import ProductPage from './components/Products/Products';
import SimilarPage from './components/Similar/Similar'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      {/* Page Women2 */}
      <Women2Page />

      {/* Page Product */}
      <ProductPage />

      {/* Page Similar */}
      <SimilarPage />
    </div>
  );
}

export default App;
