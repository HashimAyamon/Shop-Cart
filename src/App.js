import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header"
import Home from "./screens/home/Home"
import About from "./screens/about/About"
import ProductList from "./screens/productList/ProductList"
import Contact from "./screens/contact/Contact"
import NotFound from "./screens/notFound/NotFount"
import Footer from "./components/footer/Footer"
import ProductDetails from  "./components/productDetails/ProductDetails"
import Cart from './screens/cart';
function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:productId" element={<ProductDetails />} /> 
        <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
   
      <Footer />
    </>
  );
}

export default App;