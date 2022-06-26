import { useEffect, useState } from "react";

// Components
import Loading from "components/loading/Loading";
import ProductCard from "components/productCard/ProductCard";
import Input from "components/input/Input";

// Styles
import { Container } from "styles/Container";
import {
  ProductCardsContainerStyled,
  ProductsContainerStyled,
  ProductsContentStyled,
  ProductsTitleContainerStyled,
} from "./ProductsStyles";
import { LoadingContainerStyled } from "components/loading/LoadingStyles";

// Hooks & Context
import { useDispatch, useSelector } from "react-redux";

// Utils
import * as productsActions from "redux/products/productsActions";
import { FiSearch } from "react-icons/fi";

function Products() {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.products);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    dispatch(productsActions.fetchProducts());
  }, [dispatch]);

  return (
    <ProductsContainerStyled>
      <ProductsTitleContainerStyled>
        <Container>Nuestros productos</Container>
      </ProductsTitleContainerStyled>

      {loading && (
        <LoadingContainerStyled>
          <Loading />
        </LoadingContainerStyled>
      )}

      {error && <p>Hubo un error!</p>}

      {!loading && !error && products.length >= 0 && (
        <Container>
          <ProductsContentStyled>
            {/* Input */}
            <Input
              type="text"
              id="search-product"
              placeholder="Buscar..."
              icon={<FiSearch />}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              clearInput={() => setSearchText("")}
            />

            {/* Product Cards */}
            <ProductCardsContainerStyled>
              {products
                .slice(1, 10)
                .filter((product) =>
                  product.name.toUpperCase().includes(searchText.toUpperCase())
                )
                .map((product) => (
                  <ProductCard key={product.head} product={product} />
                ))}
            </ProductCardsContainerStyled>
          </ProductsContentStyled>
        </Container>
      )}
    </ProductsContainerStyled>
  );
}

export default Products;
