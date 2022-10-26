import ReactRemoveScroll from 'react-remove-scroll/dist/es5/Combination';
import { generatePath, Link } from 'react-router-dom';
import { AppRoute, BasketModal, DEFAULT_PAGE } from '../../../../const';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import useKeydown from '../../../../hooks/use-keydown';
import { setBasketActiveModal } from '../../../../store/slices/app-slice/app-slice';
import { selectBasketActiveModal, selectCurrentCatalogPath } from '../../../../store/slices/app-slice/selectors';

function BasketResponseModal() {
  const dispatch = useAppDispatch();
  const {activeModal} = useAppSelector(selectBasketActiveModal);
  const {currentPage, search} = useAppSelector(selectCurrentCatalogPath);

  const closeModal = () => {
    dispatch((setBasketActiveModal({
      activeModal: null,
    })));
  };

  useKeydown('Escape', closeModal);

  if (activeModal !== BasketModal.Sucess && activeModal !== BasketModal.Fail) {
    return null;
  }

  return (
    <ReactRemoveScroll>
      <div className="modal is-active modal--narrow">
        <div className="modal__wrapper">
          <div
            className="modal__overlay"
            onClick={() => closeModal()}
          />
          <div className="modal__content">
            {
              activeModal === BasketModal.Fail &&
              <>
                <p className="title title--h4">Не удалось купить товар</p>
                <div className="modal__buttons">
                  <button
                    className="btn btn--purple modal__btn modal__btn--fit-width"
                    type="button"
                    onClick={() => closeModal()}
                  >
                    Попробовать снова
                  </button>
                </div>
              </>
            }
            {
              activeModal === BasketModal.Sucess &&
              <>
                <p className="title title--h4">Спасибо за покупку</p>
                <svg className="modal__icon" width={80} height={78} aria-hidden="true">
                  <use xlinkHref="#icon-review-success" />
                </svg>
                <div className="modal__buttons">
                  <Link
                    className="btn btn--purple modal__btn modal__btn--fit-width"
                    to={{
                      pathname: generatePath(AppRoute.Catalog, { pageNumber: currentPage ? String(currentPage) : DEFAULT_PAGE }),
                      search
                    }}
                    onClick={() => closeModal()}
                  >
                    Вернуться к покупкам
                  </Link>
                </div>
              </>
            }
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

export default BasketResponseModal;
