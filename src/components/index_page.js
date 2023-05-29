import NavBar from "./navbar";
import Home from "./home";
import AboutUs from "./about-us";
import Shipping from "./shipping";
import Agro from "./agro";
import Fertilizer from "./fertilizer";
import OilGas from "./oil-gas";
import ContactUs from "./contact-us";
import Footer from "./footer";
import SupplierForm from "./supplier";
import ShippingForm from "./shipper";
import AdminLogin from "./admin-login";
import AdminDashboard from "./admin-dashboard";
import TradingOptions from "./trading-options";
import ViewShipper from "./view-shipper";
import ViewSupplier from "./view-supplier";
import ChangeCredentials from "./change-credentials";
import AddNewOption from "./add-new";
import EditExistingOption from "./edit-existing";
import DeleteExistingOption from "./delete-existing";
import ViewAllIDs from "./view-ids";
import ViewExistingOption from "./view-existing";
import ViewContact from "./view-contact-form";

import { BrowserRouter, Route, Routes } from "react-router-dom";

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
          <Route path="supplier" element={<SupplierForm />} />
          <Route path="shipper" element={<ShippingForm />}/>
          <Route path="admin-login" element={<AdminLogin />} />
          <Route path="admin-dashboard" element={<AdminDashboard />} />
          <Route path="trading-options" element={<TradingOptions />} />
          <Route path="view-shipper" element={<ViewShipper />} />
          <Route path="view-supplier" element={<ViewSupplier />} />
          <Route path="change-credentials" element={<ChangeCredentials />} />
          <Route path="add-new" element={<AddNewOption />} />
          <Route path="edit-existing" element={<EditExistingOption />} />
          <Route path="delete-existing" element={<DeleteExistingOption />} />
          <Route path="view-ids" element={<ViewAllIDs />} />
          <Route path="view-contact" element={<ViewContact />} />
          <Route path="view-existing" element={<ViewExistingOption />} />
        </Routes>

        <Footer />

    </BrowserRouter>
    </>
  );
}

export default Index;
