// Styles
import {
  AddDeleteContainerStyled,
  ButtonContainerStyled,
  ButtonStyled,
  CartInfoContainerStyled,
  CartItemContainerStyled,
  CartItemImageContainerStyled,
  CartItemImageStyled,
  CartProductNameStyled,
  CartProductTypeStyled,
  DeleteItemStyled,
  PriceButtonContainerStyled,
  PriceStyled,
  QuantityStyled,
} from "./CartItemStyles";

// Hooks & Context
import { useDispatch } from "react-redux";

// Utils
import { formatNumber } from "utils/formatNumber";
import * as cartActions from "redux/cart/cartActions";
import { FiMinus, FiPlus, FiTrash } from "react-icons/fi";

function CartItem({ product }) {
  const dispatch = useDispatch();

  return (
    <CartItemContainerStyled>
      <CartItemImageContainerStyled>
        <CartItemImageStyled
          src={product.image}
          alt={`Imagen de ${product.name}`}
        />
      </CartItemImageContainerStyled>
      <CartInfoContainerStyled>
        <CartProductNameStyled>{product.name}</CartProductNameStyled>
        <CartProductTypeStyled>{product.type}</CartProductTypeStyled>
      </CartInfoContainerStyled>

      <PriceButtonContainerStyled>
        <PriceStyled>
          ${formatNumber(product.price * product.quantity)}
        </PriceStyled>
        <AddDeleteContainerStyled>
          <ButtonContainerStyled>
            <ButtonStyled
              showDelete={product.quantity === 1}
              onClick={() => dispatch(cartActions.removeItem(product))}
              aria-label="remove-item"
            >
              {product.quantity === 1 ? <FiTrash /> : <FiMinus />}
            </ButtonStyled>
            <QuantityStyled>{product.quantity}</QuantityStyled>
            <ButtonStyled
              onClick={() => dispatch(cartActions.addItem(product))}
              aria-label="add-item"
            >
              <FiPlus />
            </ButtonStyled>
          </ButtonContainerStyled>

          {product.quantity !== 1 && (
            <DeleteItemStyled
              onClick={() => dispatch(cartActions.deleteItem(product))}
            >
              Eliminar
            </DeleteItemStyled>
          )}
        </AddDeleteContainerStyled>
      </PriceButtonContainerStyled>
    </CartItemContainerStyled>
  );
}

export default CartItem;
