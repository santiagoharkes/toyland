// Styles
import {
  AddToCartButtonStyled,
  ImageContainerStyled,
  ImageStyled,
  PriceStyled,
  ProductCardContainerStyled,
  QuantityButtonContainerStyled,
  QuantityButtonStyled,
  QuantityNumberStyled,
  SubTitleStyled,
  TextContainerStyled,
  TextStyled,
  TitleContainerStyled,
  TitleStyled,
} from "./ProductCardStyles";

// Hooks & Context
import { useDispatch, useSelector } from "react-redux";

// Utils
import { formatNumber } from "utils/formatNumber";
import { FiMinus, FiPlus, FiTrash } from "react-icons/fi";
import * as cartActions from "redux/cart/cartActions";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const productInCart = cartItems.find(
    (cartItem) => cartItem.head === product.head
  );

  return (
    <ProductCardContainerStyled>
      <ImageContainerStyled>
        <ImageStyled src={product.image} alt={`Imagen de ${product.name}`} />
      </ImageContainerStyled>
      <TextContainerStyled>
        <TextStyled>
          <TitleContainerStyled>
            <TitleStyled>{product.name}</TitleStyled>
            <SubTitleStyled>{product.type}</SubTitleStyled>
          </TitleContainerStyled>

          <PriceStyled>${formatNumber(product.price)}</PriceStyled>

          {!productInCart?.quantity ? (
            <AddToCartButtonStyled
              onClick={() => dispatch(cartActions.addItem(product))}
            >
              Agregar al carrito
            </AddToCartButtonStyled>
          ) : (
            <QuantityButtonContainerStyled>
              <QuantityButtonStyled
                showDelete={productInCart?.quantity === 1}
                onClick={() => dispatch(cartActions.removeItem(product))}
                aria-label="remove-item"
              >
                {productInCart?.quantity === 1 ? <FiTrash /> : <FiMinus />}
              </QuantityButtonStyled>

              <QuantityNumberStyled>
                {productInCart?.quantity}
              </QuantityNumberStyled>

              <QuantityButtonStyled
                onClick={() => dispatch(cartActions.addItem(product))}
                aria-label="add-item"
              >
                <FiPlus />
              </QuantityButtonStyled>
            </QuantityButtonContainerStyled>
          )}
        </TextStyled>
      </TextContainerStyled>
    </ProductCardContainerStyled>
  );
}

export default ProductCard;
