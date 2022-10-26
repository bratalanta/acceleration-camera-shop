import cn from 'classnames';
import { generatePath, Link, useLocation } from 'react-router-dom';
import { AppPage, AppRoute, DEFAULT_PAGE } from '../../../../const';
import { useAppSelector } from '../../../../hooks';
import useKeydown from '../../../../hooks/use-keydown';
import { selectCurrentCatalogPath } from '../../../../store/slices/app-slice/selectors';

type AddSuccessModalProps = {
  isModalActive: boolean;
  closeModal: () => void;
}

function AddSuccessModal({isModalActive, closeModal}: AddSuccessModalProps) {
  const {currentPage, search} = useAppSelector(selectCurrentCatalogPath);
  const location = useLocation();
  useKeydown('Escape', closeModal);

  const isCatalogPage = location.pathname.includes(AppPage.Catalog);
  const modalCn = cn('modal modal--narrow', { 'is-active': isModalActive });

  return (
    <div className={modalCn}>
      <div className="modal__wrapper">
        <div
          className="modal__overlay"
          onClick={() => closeModal()}
        />
        <div className="modal__content">
          <p className="title title--h4">Товар успешно добавлен в корзину</p>
          <svg className="modal__icon" width={86} height={80} aria-hidden="true">
            <use xlinkHref="#icon-success" />
          </svg>
          <div className="modal__buttons">
            {isCatalogPage ?
              <button
                className="btn btn--transparent modal__btn"
                onClick={() => closeModal()}
              >
                Продолжить покупки
              </button>
              :
              <Link
                className="btn btn--transparent modal__btn"
                onClick={() => closeModal()}
                to={{
                  pathname: generatePath(
                    AppRoute.Catalog,
                    {pageNumber: currentPage ? String(currentPage) : DEFAULT_PAGE}
                  ),
                  search
                }}
              >
                Продолжить покупки
              </Link>}
            <Link
              className="btn btn--purple modal__btn modal__btn--fit-width"
              onClick={() => closeModal()}
              to={AppRoute.Basket}
            >
              Перейти в корзину
            </Link>
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

export default AddSuccessModal;
