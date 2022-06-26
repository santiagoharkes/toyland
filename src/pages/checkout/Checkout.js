import { useEffect, useState } from "react";

// Components
import CartItem from "components/cart/cartItem/CartItem";
import Button from "components/button/Button";
import Loading from "components/loading/Loading";

// Styles
import { Container } from "styles/Container";
import {
  CheckoutContainerStyled,
  ProductCardsContainerStyled,
  ProductsContainerStyled,
  ProductsTitleContainerStyled,
  SuccessContainerStyled,
  TotalContainerStyled,
  TotalStyled,
} from "./CheckoutStyles";
import { LoadingContainerStyled } from "components/loading/LoadingStyles";

// Hooks & Context
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Utils
import { formatNumber } from "utils/formatNumber";
import * as cartActions from "redux/cart/cartActions";

function Checkout() {
  const dispatch = useDispatch();
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onBuyClick = () => {
    setLoading(true);

    const randomNumber = Math.floor(Math.random() * (500 - 100) + 100) * 10;

    setTimeout(() => {
      setIsSuccess(true);
      setLoading(false);
      dispatch(cartActions.clearCart());
    }, randomNumber);
  };

  useEffect(() => {
    if (cartItems.length === 0 && !isSuccess) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <ProductsContainerStyled>
      <ProductsTitleContainerStyled>
        <Container>Checkout</Container>
      </ProductsTitleContainerStyled>

      <Container>
        <CheckoutContainerStyled>
          {loading && (
            <LoadingContainerStyled>
              <Loading />
            </LoadingContainerStyled>
          )}

          {isSuccess && (
            <SuccessContainerStyled>
              Compra exitosa!{" "}
              <Button onClick={() => navigate("/")}>Volver a home</Button>
            </SuccessContainerStyled>
          )}

          {!loading && !isSuccess && cartItems.length > 0 && (
            <>
              <ProductCardsContainerStyled>
                {cartItems.map((cartItem) => (
                  <CartItem key={cartItem.head} product={cartItem} />
                ))}
              </ProductCardsContainerStyled>

              <TotalContainerStyled>
                <TotalStyled>
                  <span>Total:</span>
                  <p>${formatNumber(totalPrice)}</p>
                </TotalStyled>

                <Button onClick={onBuyClick}>Comprar</Button>
              </TotalContainerStyled>
            </>
          )}
        </CheckoutContainerStyled>
      </Container>
    </ProductsContainerStyled>
  );
}

export default Checkout;
