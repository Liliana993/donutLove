import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {

    setCart((prev) => {

      const existingProduct = prev.find(
        (item) => item.id === product.id
      );

      // SI YA EXISTE
      if (existingProduct) {

        return prev.map((item) =>

          item.id === product.id

            ? {
                ...item,

                quantity:
                  item.quantity + quantity,
              }

            : item
        );
      }

      // SI NO EXISTE
      return [

        ...prev,

        {
          ...product,

          quantity,
        },
      ];
    });
  };

  const removeFromCart = (id) => {

  setCart((prev) =>
    prev.filter((item) => item.id !== id)
  );
};

const clearCart = () => {

  setCart([]);

};

const totalQuantity = cart.reduce(
  (acc, item) => acc + item.quantity,
  0
);

const totalPrice = cart.reduce(
  (acc, item) =>
    acc + item.price * item.quantity,
  0
);

const incrementQuantity = (id) => {

  setCart((prev) =>

    prev.map((item) =>

      item.id === id

        ? {
            ...item,
            quantity: item.quantity + 1,
          }

        : item
    )
  );
};

const decrementQuantity = (id) => {

  setCart((prev) =>

    prev
      .map((item) =>

        item.id === id

          ? {
              ...item,
              quantity: item.quantity - 1,
            }

          : item
      )

      .filter((item) => item.quantity > 0)
  );
};

  return (

    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        clearCart,
        totalQuantity,
        totalPrice,
        incrementQuantity,
        decrementQuantity
      }}
    >

      {children}

    </CartContext.Provider>
  );
};