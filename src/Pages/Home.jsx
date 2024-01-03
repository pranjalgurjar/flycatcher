

import Banner from "./Banner";
import Contact from "./Contact";
import Feature from "./Feature";
import MobileMenu from "./MobileMenu";
import Product from "./Product";
import ProductCategory from "./ProductCategory";

import Search from "./Search";
import Blog from "./Blog";
import Instagram from "./Instagram";
import OffCanvas from "./OffCanvas";
import BacktoTop from "./BacktoTop";
import Productsmarea from "./Productsmarea";





 export default function Home(){
    return(<>
 
 <BacktoTop/>
 <OffCanvas/>
 <MobileMenu/>
 <Search/>
 <ProductCategory/>
 <Product/>
 <Feature/>
 <Banner/> 
 <Productsmarea/>
 <Blog/>
 <Instagram/>
 <Contact/>
  

    
    
    
    
    
    
    </>)
 }