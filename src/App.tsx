import Category from "./components/Category";
import FeatureSectionBreakfast from "./components/FeatureSectionBreak";
import FeatureSectionFruits from "./components/FeatureSectionFruits";
import Hero from "./components/Hero";
import MobNavbar from "./components/MobNavbar";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import BlogSection from "./components/BlogSection";
import NewsLetter from "./components/NewsLetter";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Cart from "./components/Cart"; 
import { CartContextProvider } from "./context/cartContext";
import { useState } from "react";

const App = () => {
  const [showCart, setShowCart] = useState (false);
  return (
    <CartContextProvider>
      <main>
      <Navbar  setShowCart= {setShowCart}/>
      <MobNavbar setShowCart= {setShowCart} />
      <Hero />
      <Category />
      <FeatureSectionFruits />
      <FeatureSectionBreakfast />
      <Banner />
      <BlogSection/>
      < NewsLetter />
      <Feature />
      <Footer />
      {showCart && <Cart setShowCart={setShowCart} />}

    </main>

    </CartContextProvider>
    
  )
}

export default App
