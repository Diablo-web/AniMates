import "./ProductListing.css";
import { useProducts } from "../../contexts/products-context";
import ProductFilters from "../../components/ProductFilters/ProductFilters";
import ProductCard from "../../components/ProductCard/ProductCard";
import Loader from "../../components/Loader/Loader";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const ProductListing = () => {
  const {
    toggleFilter,
    isLoading,
    filteredBySize: filteredProducts,
  } = useProducts();

  return (
    <div className="products-listing-outer-container page-wrapper">
      {isLoading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <>
          <div className="products-filters-container">
            <ProductFilters />
          </div>
          <div className="products-outer-container">
            <div className="products-title-bar">
              <div>
                
                <h2>All Products ({filteredProducts.length})</h2>
              </div>
              <div className="filter-icon">
                <FilterAltIcon onClick={toggleFilter} />
              </div>
            </div>
            {filteredProducts.length > 0 ? (
              <div className="products-container">
                {filteredProducts?.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            ) : (
              <p className="text-center no-products-msg">
                There is nothing seems like.
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductListing;
