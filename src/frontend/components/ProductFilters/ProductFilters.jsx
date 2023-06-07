import "./ProductFilters.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useProducts } from "../../contexts/products-context";
import { filterActionTypes } from "../../utils/constants";

const ProductFilters = () => {
  const { productState, productDispatch, showFilter, toggleFilter } =
    useProducts();

  const { CLEAR_FILTERS, CATEGORY, SORT_BY_PRICE, SORT_BY_RATING_RANGE } =
    filterActionTypes;

  const productCategories = productState.products.reduce(
    (acc, { category }) =>
      acc.includes(category) ? [...acc] : [...acc, category],
    []
  );

  return (
    <div
      className={showFilter ? "product-sidebar show-filter" : "product-sidebar"}
    >
      <div className="filter-title-bar">
        <div>
          <p className="filter-heading">FILTERS</p>
        </div>
        <div className="clear-wrapper-container">
          <p
            className="clear-filter"
            onClick={() =>
              productDispatch({
                type: CLEAR_FILTERS,
                payload: {
                  products: productState.products,
                  categories: productState.allCategories,
                },
              })
            }
          >
            Clear All
          </p>
          <div className="close-btn">
            <CloseRoundedIcon onClick={() => toggleFilter()} />
          </div>
        </div>
      </div>

      <div className="filter-wrapper">
        <p className="filter-title">Categories</p>
        <div className="filter-value filter-category">
          {productCategories?.map((category, index) => (
            <label key={index}>
              <input
                type="checkbox"
                checked={productState.categoryInput.includes(category)}
                value={category}
                onChange={(event) =>
                  productDispatch({
                    type: CATEGORY,
                    payload: event.target.value,
                  })
                }
              />
              <p>{category}</p>
            </label>
          ))}
        </div>
      </div>

      {/*filter by rating*/}

      <div className="filters">
        <div className="filter-wrapper">
          <p className="filter-title">Rating</p>
          <div className="filter-value">
            <div className="rating-options">
              <label>
                <input
                  type="radio"
                  checked={productState.ratingRange === "3"}
                  value="3"
                  onChange={(event) =>
                    productDispatch({
                      type: SORT_BY_RATING_RANGE,
                      payload: event.target.value,
                    })
                  }
                />
                <span> Below 3 star</span>
              </label>
              <label>
                <input
                  type="radio"
                  checked={productState.ratingRange === "4"}
                  value="4"
                  onChange={(event) =>
                    productDispatch({
                      type: SORT_BY_RATING_RANGE,
                      payload: event.target.value,
                    })
                  }
                />
                <span> Below 4 star</span>
              </label>
              <label>
                <input
                  type="radio"
                  checked={productState.ratingRange === "5"}
                  value="5"
                  onChange={(event) =>
                    productDispatch({
                      type: SORT_BY_RATING_RANGE,
                      payload: event.target.value,
                    })
                  }
                />
                <span> Below 5 star</span>
              </label>
            </div>
          </div>
        </div>

        <div className="filter-wrapper">
          <p className="filter-title">Sort By</p>
          <div className="filter-value filter-sort">
            <label>
              <input
                type="radio"
                checked={productState.sortPriceRadioInput === "hightolow"}
                name="sort"
                value="hightolow"
                onChange={(event) =>
                  productDispatch({
                    type: SORT_BY_PRICE,
                    payload: event.target.value,
                  })
                }
              />
              Price = High to Low
            </label>
            <label>
              <input
                type="radio"
                checked={productState.sortPriceRadioInput === "lowtohigh"}
                name="sort"
                value="lowtohigh"
                onChange={(event) =>
                  productDispatch({
                    type: SORT_BY_PRICE,
                    payload: event.target.value,
                  })
                }
              />
              Price = Low to High
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
