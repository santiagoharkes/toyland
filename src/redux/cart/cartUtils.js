const setStorage = (cartItems) => {
  localStorage.setItem(
    "mercat-cart",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

export const sumItems = (cartItems) => {
  setStorage(cartItems);

  const itemCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const totalPrice = Number(
    cartItems
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2)
  );
  return { itemCount, totalPrice };
};

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.head === cartItemToAdd.head
  );

  const newCartItems = existingCartItem
    ? cartItems.map((cartItem) => {
        return cartItem.head === cartItemToAdd.head
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem;
      })
    : [...cartItems, { ...cartItemToAdd, quantity: 1 }];

  return {
    cartItems: newCartItems,
    ...sumItems(newCartItems),
  };
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.head === cartItemToRemove.head
  );

  const newCartItems =
    existingCartItem?.quantity === 1
      ? cartItems.filter((cartItem) => cartItem.head !== cartItemToRemove.head)
      : cartItems.map((cartItem) => {
          return cartItem.head === cartItemToRemove.head
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem;
        });

  return {
    cartItems: newCartItems,
    ...sumItems(newCartItems),
  };
};

export const deleteItemFromCart = (cartItems, cartItemToDelete) => {
  const newCartItems = cartItems.filter(
    (cartItem) => cartItem.head !== cartItemToDelete.head
  );

  return {
    cartItems: newCartItems,
    ...sumItems(newCartItems),
  };
};
