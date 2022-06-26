import { useEffect } from "react";

// Components
import CartItem from "./cartItem/CartItem";

// Styles
import {
  CartBackgroundStyled,
  CartContainerStyled,
  CartContentStyled,
  CartItemsContainerStyled,
  CartTitleStyled,
  CartTotalContainer,
  CheckoutButtonStyled,
  CloseIconStyled,
  TotalContainerStyled,
  TotalStyled,
} from "./CartStyles";

// Hooks & Context
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// Utils
import * as cartActions from "redux/cart/cartActions";
import { FiX } from "react-icons/fi";
import { formatNumber } from "utils/formatNumber";

function Cart() {
  const { showCart, cartItems, totalPrice } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (showCart) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showCart]);

  return (
    <>
      <CartBackgroundStyled
        $showCart={showCart}
        onClick={() => dispatch(cartActions.toggleCart())}
      />
      <CartContainerStyled $showCart={showCart}>
        <CartContentStyled>
          <CartItemsContainerStyled>
            <CartTitleStyled>
              <p>Carrito</p>
              <CloseIconStyled
                onClick={() => dispatch(cartActions.toggleCart())}
              >
                <FiX />
              </CloseIconStyled>
            </CartTitleStyled>

            {cartItems.length === 0
              ? "No hay productos!"
              : cartItems.map((product) => (
                  <CartItem key={product.head} product={product} />
                ))}
          </CartItemsContainerStyled>

          {cartItems.length > 0 && (
            <CartTotalContainer>
              <TotalContainerStyled>
                <p>Total:</p>
                <TotalStyled>${formatNumber(totalPrice)}</TotalStyled>
              </TotalContainerStyled>
              <CheckoutButtonStyled
                onClick={() => {
                  navigate("checkout");
                  dispatch(cartActions.toggleCart());
                }}
              >
                Ir a pagar
              </CheckoutButtonStyled>
            </CartTotalContainer>
          )}
        </CartContentStyled>
      </CartContainerStyled>
    </>
  );
}

export default Cart;
