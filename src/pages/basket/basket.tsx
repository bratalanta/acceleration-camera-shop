import { useEffect } from 'react';
import BasketContent from '../../components/basket/basket-content/basket-content';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { scrollToTop } from '../../utils/utils';

function Basket() {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="wrapper" data-testid="basket-page">
      <Header />
      <BasketContent />
      <Footer />
    </div>

  );
}

export default Basket;
