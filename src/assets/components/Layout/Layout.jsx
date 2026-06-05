import { useState, useContext } from "react";
import { Outlet } from "react-router-dom";

import { CartModal } from "../CartModal/CartModal";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

import { CartContext } from "../../context/CartContext";

export const Layout = () => {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const { cart } = useContext(CartContext);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">

      {/* HEADER */}
      <Header
        cart={cart}
        setIsCartOpen={setIsCartOpen}
      />

      {/* MAIN */}
      <main className="flex-1 bg-gray-900 max-w-5xl w-full mx-auto px-4 py-6">

        <Outlet />

      </main>

      {/* FOOTER */}
      <Footer />

      {/* MODAL */}
      <CartModal
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />

    </div>
  );
};