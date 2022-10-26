import ReactFocusLock from 'react-focus-lock';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs';
import BasketResponseModal from './basket-response-modal/basket-response-modal';
import BasketProductList from './basket-product-list/basket-product-list';
import BasketRemoveProductModal from './basket-remove-product-modal/basket-remove-product-modal';
import BasketSummary from './basket-summary/basket-summary';

function BasketContent() {
  return (
    <main>
      <div className="page-content">
        <Breadcrumbs isBasket/>
        <section className="basket">
          <div className="container">
            <BasketProductList />
            <BasketSummary />
          </div>
        </section>
      </div>
      <ReactFocusLock>
        <BasketRemoveProductModal />
        <BasketResponseModal />
      </ReactFocusLock>
    </main>
  );
}

export default BasketContent;
