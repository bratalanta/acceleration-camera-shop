import { Modal } from '../../../../../const';
import { useActiveModal } from '../../../../../contexts/active-modal-provider/active-modal-provider';

function PostReviewButton() {
  const [, setActiveModal] = useActiveModal();

  return (
    <button
      className="btn"
      type="button"
      onClick={() => setActiveModal(Modal.Form)}
    >
      Оставить свой отзыв
    </button>
  );
}

export default PostReviewButton;
