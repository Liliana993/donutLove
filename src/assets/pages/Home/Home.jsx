import { Hero } from '../../components/Hero/Hero';
import { Categories } from '../../components/Categories/Categories';
import { FeaturedProducts } from '../../components/FeaturedProducts/FeaturedProducts';
import { Combos } from '../../components/Combos/Combos';
import { Benefits } from '../../components/Benefits/Benefits';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const Home = () => {

 const { cart, setCart, addToCart } = useContext(CartContext);
  return (
    <>
      <Hero />

      <Categories
        cart={cart}
        setCart={setCart}
      />

      <div id="featured-products">
  <FeaturedProducts
    cart={cart}
    setCart={setCart}
  />
</div>

      <Combos />
      <Benefits />
    </>
  );
};
