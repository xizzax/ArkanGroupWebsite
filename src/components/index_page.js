import NavBar from "./navbar";
import Home from "./home";
import AboutUs from "./about-us";
import Shipping from "./shipping";
import Agro from "./agro";
import Fertilizer from "./fertilizer";
import OilGas from "./oil-gas";
import ContactUs from "./contact-us";
import Footer from "./footer";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";

function Index() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="shipping" element={<Shipping />} />
          <Route path="agro" element={<Agro />} />
          <Route path="fertilizer" element={<Fertilizer />} />
          <Route path="oil-gas" element={<OilGas />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      
    </BrowserRouter>
    </>
  );
}

export default Index;
