import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Home from './component/home/Home';
// import Slider from './component/slider/Slider';
import Shop from './component/shop/Shop'
// import Heart from './component/shop/Heart'
import Men from './component/shop/Men'; 
import Women from './component/women/Women';
import User from './component/user/User';
import Panier from './component/panier/Panier';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <BrowserRouter>  
      <Home /> 
      {/* <Slider /> */}
    <Routes> 
    <Route path="/shop" element={<Shop />} />
    <Route path="/men" element={<Men />} /> 
       <Route path="/women" element={<Women />} /> 
       <Route path="/user" element={<User />} />
       <Route path="/panier" element={<Panier />} />
      {/*<Route  path="/heart" element={<Heart />} /> */}
    </Routes>
    </BrowserRouter>
    </div>
    
  );  
}

export default App;
