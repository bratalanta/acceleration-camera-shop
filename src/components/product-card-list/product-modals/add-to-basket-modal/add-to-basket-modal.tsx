import cn from 'classnames';
import { ProductModal } from '../../../../const';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import useKeydown from '../../../../hooks/use-keydown';
import { setProductActiveModal } from '../../../../store/slices/app-slice/app-slice';
import { selectProductActiveModal } from '../../../../store/slices/app-slice/selectors';
import { addBasketProduct } from '../../../../store/slices/basket-slice/basket-slice';
import ProductShortDetails from '../../../product-short-details/product-short-details';

type AddToBasketModalProps = {
  isModalActive: boolean;
  closeModal: () => void;
}

function AddToBasketModal({isModalActive, closeModal}: AddToBasketModalProps) {
  useKeydown('Escape', closeModal);
  const dispatch = useAppDispatch();
  const {productDetails} = useAppSelector(selectProductActiveModal);

  const handleAddToBasketBtnClick = () => {
    dispatch(addBasketProduct(productDetails));
    dispatch(setProductActiveModal({
      activeModal: ProductModal.Success
    }));
  };

  const modalCn = cn('modal', { 'is-active': isModalActive });

  return (
    <div className={modalCn} data-testid="add">
      <div className="modal__wrapper">
        <div
          className="modal__overlay"
          onClick={() => closeModal()}
        />
        <div className="modal__content">
          <p className="title title--h4">Добавить товар в корзину</p>
          <div className="basket-item basket-item--short">
            <ProductShortDetails product={productDetails} isModal/>
          </div>
          <div className="modal__buttons">
            <button
              className="btn btn--purple modal__btn modal__btn--fit-width"
              type="button"
              onClick={handleAddToBasketBtnClick}
            >
              <svg width={24} height={16} aria-hidden="true">
                <use xlinkHref="#icon-add-basket" />
              </svg>Добавить в корзину
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
  );
}

export default AddToBasketModal;
