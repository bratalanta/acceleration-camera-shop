import { Modal } from '../../../../../const';
import { useReview } from '../../../../../contexts/review-provider/review-provider';

function PostReviewButton() {
  const {setActiveModal} = useReview();

  return (
    <button
      data-testid='open-modal-btn'
      className="btn"
      type="button"
      onClick={() => setActiveModal(Modal.Form)}
    >
      Оставить свой отзыв
    </button>
  );
}

export default PostReviewButton;
