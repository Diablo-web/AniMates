import "./ProductCard.css";
import { Link, useNavigate } from "react-router-dom";
import { useWishlist } from "../../contexts/wishlist-context";
import { useCart } from "../../contexts/cart-context";
import { useAuth } from "../../contexts/auth-context";
import { useProducts } from "../../contexts/products-context";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductCard = ({ product, addedToWishlist }) => {
  const navigate = useNavigate();
  const { getProductById } = useProducts();
  const { addToWishlist, removeFromWishlist, itemInWishlist } = useWishlist();
  const { addToCart, itemInCart } = useCart();
  const { token } = useAuth();
  const {
    _id,
    title,
    imgSrc,
    price,
    updatedPrice,
    starRating,
    category,
    size,
    // onSale,
  } = product;

  return (
    <div className="product-card">
      <Link to={`/product/${_id}`}>
        <div className="product-img">
          <img src={imgSrc} alt={title} onClick={() => getProductById(_id)} />
        </div>
      </Link>
      {category && (
        <div className="category">
          <p>{category}</p>
        </div>
      )}
      <div className="wishlist-btn">
        {token && itemInWishlist(_id) ? (
          <FavoriteIcon
            className="wishlist-fav-icon"
            onClick={() => removeFromWishlist(product)}
          />
        ) : (
          <FavoriteBorderRoundedIcon
            onClick={
              token ? () => addToWishlist(product) : () => navigate("/login")
            }
          />
        )}
      </div>
      <div className="card-details">
        <Link to={`/product/${_id}`}>
          <h4 onClick={() => getProductById(_id)}>{title}</h4>
        </Link>
        <div className="card-tag">
          
          <p className="star-value"> {starRating}</p>
          <StarRoundedIcon />
        

          <div className="price-delivery-tags">
            <div className="prices">
              <p className="new-price">₹{updatedPrice}</p>
              <p className="old-price">₹{price}</p>
            </div>
          </div>
        </div>
        {!addedToWishlist ? (
          <button
            className="add-to-cart-btn"
            onClick={() =>
              token
                ? itemInCart(_id)
                  ? navigate("/cart")
                  : addToCart(product)
                : navigate("/login")
            }
          >
            <div className="shopping">
              <ShoppingCartIcon />
              {token && itemInCart(_id) ? "Go to Cart" : "Add To Cart"}
            </div>
          </button>
        ) : itemInCart(_id) ? (
          <button
            className="move-to-cart-btn"
            onClick={() => navigate("/cart")}
          >
            Go to cart
          </button>
        ) : (
          <button
            className="add-to-cart-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        )}
      </div>
      {/* {!inStock ? (
        <div className="out-of-stock-tag">
          <Link to={`/product/${_id}`}>
            <div onClick={() => getProductById(_id)}>Out of Stock</div>
          </Link>
        </div>
      ) : null} */}
    </div>
  );
};
export default ProductCard;
