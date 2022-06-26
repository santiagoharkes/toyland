// Components
import Cart from "components/cart/Cart";
import Navbar from "components/navbar/Navbar";

// Styles
import { LayoutContainerStyled } from "./LayoutStyles";

function Layout(props) {
  return (
    <LayoutContainerStyled>
      <Navbar />
      <Cart />
      {props.children}
    </LayoutContainerStyled>
  );
}

export default Layout;
