import cn from 'classnames';
import useKeydown from '../../../../../hooks/use-keydown';
import ReviewForm from './review-form/review-form';

type ReviewModalProps = {
  isModalActive: boolean;
  closeModal: () => void;
}

function ReviewModal({isModalActive, closeModal}: ReviewModalProps) {
  useKeydown('Escape', closeModal);

  const modalCn = cn(
    'modal',
    {
      'is-active': isModalActive
    }
  );

  return (
    <div className={modalCn} data-testid='review-modal'>
      <div className="modal__wrapper">
        <div
          className="modal__overlay"
          onClick={() => closeModal()}
          data-testid='overlay'
        />
        <div className="modal__content">
          <p className="title title--h4">Оставить отзыв</p>
          <ReviewForm />
          <button
            className="cross-btn"
            type="button"
            aria-label="Закрыть попап"
            onClick={() => closeModal()}
            data-testid='cross-btn'
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

export default ReviewModal;
