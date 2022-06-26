// Styles
import { Container } from "styles/Container";
import {
  CartItemsNumberStyled,
  LogoStyled,
  NavbarContainerStyled,
  NavbarContentStyled,
  NavbarItemStyled,
  NavbarListStyled,
  NavbarStyled,
} from "./NavbarStyles";

// Hooks & Context
import { useDispatch, useSelector } from "react-redux";

// Utils
import { useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import * as cartActions from "redux/cart/cartActions";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { itemCount } = useSelector((state) => state.cart);

  return (
    <NavbarContainerStyled>
      <Container>
        <NavbarContentStyled>
          <LogoStyled onClick={() => navigate("/")}>ToyLand!</LogoStyled>

          <NavbarStyled>
            <NavbarListStyled>
              <NavbarItemStyled onClick={() => navigate("products")}>
                Productos
              </NavbarItemStyled>
              <NavbarItemStyled
                onClick={() => dispatch(cartActions.toggleCart())}
              >
                {itemCount > 0 && (
                  <CartItemsNumberStyled>{itemCount}</CartItemsNumberStyled>
                )}
                <FiShoppingCart />
              </NavbarItemStyled>
            </NavbarListStyled>
          </NavbarStyled>
        </NavbarContentStyled>
      </Container>
    </NavbarContainerStyled>
  );
}

export default Navbar;
