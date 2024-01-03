
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Slider from './Components/Slider';
import OffCanvas from './Pages/OffCanvas';
import MobileMenu from './Pages/MobileMenu';
import Search from './Pages/Search';
import ProductCategory from './Pages/ProductCategory';
import Product from './Pages/Product';
import Feature from './Pages/Feature';
import Banner from './Pages/Banner';
import Blog from './Pages/Blog';
import Instagram from './Pages/Instagram';
import Contact from './Pages/Contact';
import Cart from './Components/Cart';
import PublicRouter from './Router/PublicRouter';
import Home from './Pages/Home';
import BacktoTop from './Pages/BacktoTop';
import Signup from './Pages/Signup';
import Productdetails from './Pages/Productdetails';
import Productsmarea from './Pages/Productsmarea';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Login from './Pages/Login';





function App() {
  return (<>

    <Header />
    <Slider />

    <main>
      <Routes>

        <Route path="/" element={<PublicRouter />}>
          <Route index element={<Home />} />
          <Route path='backtotop' element={<BacktoTop />} />
          <Route path='offcanvas' element={<OffCanvas />} />
          <Route path='mobilemenu' element={<MobileMenu />} />
          <Route path='search' element={<Search />} />
          <Route path='productcategory' element={<ProductCategory />} />
          <Route path="product" element={<Product />} />
          <Route path="feature" element={<Feature />} />
          <Route path="banner" element={<Banner />} />
          <Route path='productdetails' element={<Productdetails />} />
          <Route path='productsmarea' element={<Productsmarea />} />
          <Route path='blog' element={<Blog />} />
          <Route path='instagram' element={<Instagram />} />
          <Route path='contact' element={<Contact />} />
          <Route path='cart' element={<Cart />} />
          <Route path="signup" element={<Signup/>} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>

    </main>
    <Footer />

  </>);
}
export default App;