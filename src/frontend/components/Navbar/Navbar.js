import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { useProducts } from "../../contexts/products-context";
import { useWishlist } from "../../contexts/wishlist-context";
import { useCart } from "../../contexts/cart-context";
import { filterActionTypes } from "../../utils/constants";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
// import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalMallIcon from '@mui/icons-material/LocalMall';
// import PersonIcon from "@mui/icons-material/Person";

function Navbar () {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { productState, productDispatch } = useProducts();
  const {
    wishlistState: { wishlist },
  } = useWishlist();
  const {
    cartState: { cart },
  } = useCart();

  const { SEARCH } = filterActionTypes;

  const activeIconStyles = ({ isActive }) => ({
    scale: isActive ? "1.125" : "1",
  });

  return (
    <div className="navbar"
    style={{background: "#172D3B"}}>
      <NavLink to="/">
        <div className="nav-left">
          {/* <img src="/images/home.png" alt="Plantique-logo" /> */}
          <h3>ANIMATES</h3>
          {/* <span className="app-name">Plantique</span> */}
        </div>
      </NavLink>
    
      <div className="nav-right">
      <div className="nav-search">
        
        <input
          placeholder="SEARCH"
          value={productState.searchInput}
          onChange={(event) =>
            productDispatch({ type: SEARCH, payload: event.target.value })
          }
          onKeyDown={(event) => event.key === "Enter" && navigate("/store")}
        />
        <SearchOutlinedIcon />
      </div>
        <NavLink style={activeIconStyles} to="/products">
          <div className="nav-icon">
            <LocalMallIcon />
          </div>
        </NavLink>
        <NavLink style={activeIconStyles} to="/wishlist">
          <div className="nav-icon">
            <FavoriteBorderOutlinedIcon />
            {token && wishlist.length > 0 && <p>{wishlist.length}</p>}
          </div>
        </NavLink>
        <NavLink style={activeIconStyles} to="/cart">
          <div className="nav-icon">
            <ShoppingCartIcon />
            {token && cart.length > 0 && <p>{cart.length}</p>}
          </div>
        </NavLink>
        <NavLink style={activeIconStyles} to={token ? "/profile" : "/login"}>
          <div className="nav-icon">
            {token ? <PersonOutlineIcon /> : <LoginOutlinedIcon />}
          </div>
        </NavLink>
      </div>
    </div>
  );
};
export {Navbar};
