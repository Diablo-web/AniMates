

import "./App.css";

import { Toaster } from "react-hot-toast";
import { Router } from "./frontend/routes";
import { Navbar } from "./frontend/components";
import {Footer} from "./frontend/components";
import ScrollToTop from "./frontend/components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Toaster position="bottom-right" reverseOrder={false} />
      <Router />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
