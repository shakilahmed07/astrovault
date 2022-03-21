import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Services from "./pages/Services/Services";
import Farms from "./pages/Farms/Farms";
import Browser from "./pages/Browser/Browser";
import Launchpad from "./components/launchpad/Launchpad";
import LaunchpadDetails from "./components/launchpad/LaunchpadDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browser" element={<Browser />} />
        <Route path="/services/*" element={<Services />} />
        <Route path="/services/:Id" element={<Launchpad />} />
        <Route path="/services/launchpad/:Id" element={<LaunchpadDetails />} />
        <Route path="/farms" element={<Farms />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
