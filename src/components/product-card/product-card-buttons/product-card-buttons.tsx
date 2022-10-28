import { generatePath, Link } from 'react-router-dom';
import { Anchor, AppRoute, ProductModal } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { setProductActiveModal } from '../../../store/slices/app-slice/app-slice';
import { selectBasketProducts } from '../../../store/slices/basket-slice/selectors';
import { TCamera } from '../../../types/camera';

type ProductCardButtonsProps = {
  product: TCamera;
}

function ProductCardButtons({product: camera}: ProductCardButtonsProps) {
  const dispatch = useAppDispatch();
  const basketProducts = useAppSelector(selectBasketProducts);

  const isProductInBasket = basketProducts.find(({product}) => product.id === camera.id);

  const handleBuyBtnClick = () => {
    dispatch(setProductActiveModal({
      activeModal: ProductModal.Add,
      productDetails: camera
    }));
  };

  return (
    <div className="product-card__buttons" data-testid="btn">
      {
        isProductInBasket ?
          <Link
            className="btn btn--purple-border product-card__btn product-card__btn--in-cart"
            to={AppRoute.Basket}
          >
            <svg width={16} height={16} aria-hidden="true">
              <use xlinkHref="#icon-basket" />
            </svg>В корзине
          </Link>
          :
          <button
            className="btn btn--purple product-card__btn"
            type="button"
            onClick={handleBuyBtnClick}
          >
          Купить
          </button>
      }
      <Link
        className="btn btn--transparent"
        to={{
          pathname: generatePath(AppRoute.Product, {id: String(camera.id)}),
          hash: Anchor.Description,
        }}
      >
        Подробнее
      </Link>
    </div>
  );
}

export default ProductCardButtons;
