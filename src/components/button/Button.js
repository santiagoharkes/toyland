// styles
import { ButtonContainerStyled } from "./ButtonStyles";

function Button({ children, ...rest }) {
  return <ButtonContainerStyled {...rest}>{children}</ButtonContainerStyled>;
}

export default Button;
