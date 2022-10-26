import { useAppSelector } from '../../../../hooks';
import { selectBasketProducts } from '../../../../store/slices/basket-slice/selectors';
import BasketProduct from './basket-product/basket-product';

function BasketProductList() {
  const basketProducts = useAppSelector(selectBasketProducts);

  return (
    <>
      <h1 className="title title--h2">Корзина</h1>
      <ul className="basket__list">
        {basketProducts.map(({product, productCount}) => (
          <BasketProduct key={product.id} product={product} productCount={productCount}/>
        ))}
      </ul>
    </>
  );
}

export default BasketProductList;
