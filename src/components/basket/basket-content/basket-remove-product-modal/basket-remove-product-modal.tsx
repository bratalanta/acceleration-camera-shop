import ReactRemoveScroll from 'react-remove-scroll/dist/es5/Combination';
import { BasketModal } from '../../../../const';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import useKeydown from '../../../../hooks/use-keydown';
import { setBasketActiveModal } from '../../../../store/slices/app-slice/app-slice';
import { selectBasketActiveModal } from '../../../../store/slices/app-slice/selectors';
import { removeBasketProduct } from '../../../../store/slices/basket-slice/basket-slice';
import ProductShortDetails from '../../../product-short-details/product-short-details';

function BasketRemoveProductModal() {
  const dispatch = useAppDispatch();
  const {activeModal, productDetails} = useAppSelector(selectBasketActiveModal);

  const closeModal = () => {
    dispatch((setBasketActiveModal({
      activeModal: null,
    })));
  };

  useKeydown('Escape', closeModal);

  const handleRemoveBtnClick = () => {
    dispatch(removeBasketProduct(productDetails));
    closeModal();
  };

  if (activeModal !== BasketModal.Remove) {
    return null;
  }

  return (
    <ReactRemoveScroll>
      <div className="modal is-active">
        <div className="modal__wrapper">
          <div
            className="modal__overlay"
            onClick={() => closeModal()}
          />
          <div className="modal__content">
            <p className="title title--h4">Удалить этот товар?</p>
            <div className="basket-item basket-item--short">
              <ProductShortDetails product={productDetails} />
            </div>
            <div className="modal__buttons">
              <button
                className="btn btn--purple modal__btn modal__btn--half-width"
                type="button"
                onClick={handleRemoveBtnClick}
              >
                Удалить
              </button>
              <button
                className="btn btn--transparent modal__btn modal__btn--half-width"
                onClick={() => closeModal()}
              >
                Продолжить покупки
              </button>
            </div>
            <button
              className="cross-btn"
              type="button"
              aria-label="Закрыть попап"
              onClick={() => closeModal()}
            >
              <svg width={10} height={10} aria-hidden="true">
                <use xlinkHref="#icon-close" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </ReactRemoveScroll>
  );
}

export default BasketRemoveProductModal;
