import cn from 'classnames';
import useKeydown from '../../../../../hooks/use-keydown';

type ReviewModalSuccessProps = {
  isModalActive: boolean;
  closeModal: () => void;
}

function ReviewModalSuccess({isModalActive, closeModal}: ReviewModalSuccessProps) {
  useKeydown('Escape', closeModal);

  const modalCn = cn(
    'modal',
    {
      'is-active': isModalActive
    },
    'modal--narrow'
  );

  return (
    <div className={modalCn}>
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={() => closeModal()}/>
        <div className="modal__content">
          <p className="title title--h4">Спасибо за отзыв</p>
          <svg className="modal__icon" width={80} height={78} aria-hidden="true">
            <use xlinkHref="#icon-review-success" />
          </svg>
          <div className="modal__buttons">
            <button
              className="btn btn--purple modal__btn modal__btn--fit-width"
              type="button"
              onClick={() => closeModal()}
            >Вернуться к покупкам
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

export default ReviewModalSuccess;
