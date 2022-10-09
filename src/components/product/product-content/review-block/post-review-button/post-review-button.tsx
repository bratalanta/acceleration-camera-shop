import { Modal } from '../../../../../const';
import { useAppDispatch } from '../../../../../hooks';
import { setActiveModal } from '../../../../../store/slices/app-slice/app-slice';

function PostReviewButton() {
  const dispatch = useAppDispatch();

  return (
    <button
      data-testid='open-modal-btn'
      className="btn"
      type="button"
      onClick={() => dispatch(setActiveModal(Modal.Form))}
    >
      Оставить свой отзыв
    </button>
  );
}

export default PostReviewButton;
