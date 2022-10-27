import { BasketModal } from '../../../../../const';
import { useAppDispatch } from '../../../../../hooks';
import { setBasketActiveModal } from '../../../../../store/slices/app-slice/app-slice';
import { TCamera } from '../../../../../types/camera';
import ProductShortDetails from '../../../../product-short-details/product-short-details';
import BasketProductControls from './basket-product-controls/basket-product-controls';

type BasketProductProps = {
  product: TCamera;
  productCount: number;
}

function BasketProduct({product, productCount}: BasketProductProps) {
  const dispatch = useAppDispatch();
  const productTotalPrice = product.price * productCount;

  return (
    <li className="basket-item" data-testid="basket-product">
      <ProductShortDetails product={product} isBasket/>
      <BasketProductControls productCount={productCount} product={product}/>
      <div className="basket-item__total-price">
        <span className="visually-hidden">Общая цена:</span>{productTotalPrice} ₽
      </div>
      <button
        className="cross-btn"
        type="button"
        aria-label="Удалить товар"
        onClick={() => dispatch(setBasketActiveModal({
          activeModal: BasketModal.Remove,
          productDetails: product
        }))}
      >
        <svg width={10} height={10} aria-hidden="true">
          <use xlinkHref="#icon-close" />
        </svg>
      </button>
    </li>
  );
}

export default BasketProduct;
