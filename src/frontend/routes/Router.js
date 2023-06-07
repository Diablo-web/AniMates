
import { Routes, Route } from "react-router-dom";
import MockMan from "mockman-js";
import { RequiresAuth }  from "./RequiresAuth";
import { Home } from "../pages";
import Cart from "../pages/Cart/Cart";
import Wishlist from "../pages/Wishlist/Wishlist";
import ProductListing from "../pages/ProductListing/ProductListing";
import {LogIn} from "../pages/Authentication/LogIn/LogIn";
import Logout from "../pages/Authentication/Logout/Logout";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import UserAccount from "../pages/UserAccount/UserAccount";
import Checkout from "../pages/Checkout/Checkout";

import UserProfile from "../components/UserProfile/UserProfile";
import AddressList from "../components/AddressList/AddressList";

function Router () {
  return (
    <Routes>
      <Route path="/mockman" element={<MockMan />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/product/:productID" element={<SingleProduct />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/signup" element={<SignUp />} />
     

      <Route
        path="/cart"
        element={
          <RequiresAuth>
            <Cart />
          </RequiresAuth>
        }
      />

      <Route
        path="/checkout"
        element={
          <RequiresAuth>
            <Checkout />
          </RequiresAuth>
        }
      />
      <Route
        path="/wishlist"
        element={
          <RequiresAuth>
            <Wishlist />
          </RequiresAuth>
        }
      />

      <Route
        path="/profile"
        element={
          <RequiresAuth>
            <UserAccount />
          </RequiresAuth>
        }
      >
        <Route path="" element={<UserProfile />} />
        <Route path="addresses" element={<AddressList />} />
    
      </Route>
    </Routes>
  );
};


// export default NavRoutes;
export {Router};
