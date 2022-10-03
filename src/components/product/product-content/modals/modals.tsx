import { useEffect } from 'react';
import { useAppSelector } from '../../../../hooks';
import { reviewPostingStatusSelector } from '../../../../store/slices/reviews-slice/selectors';
import ReviewModalSuccess from './review-modal-success/review-modal-success';
import {RemoveScroll} from 'react-remove-scroll';
import ReviewModal from './review-modal/review-modal';
import { useActiveModal } from '../../../../contexts/active-modal-provider/active-modal-provider';
import { Modal } from '../../../../const';

function Modals() {
  const {isReviewPostingStatusFulfilled} = useAppSelector(reviewPostingStatusSelector);
  const [activeModal, setActiveModal] = useActiveModal();

  useEffect(() => {
    if (isReviewPostingStatusFulfilled) {
      setActiveModal(Modal.Success);
    }
  }, [isReviewPostingStatusFulfilled]);

  return (
    <RemoveScroll enabled={activeModal === Modal.Form || activeModal === Modal.Success}>
      {activeModal === Modal.Form &&
        <ReviewModal
          isModalActive={activeModal === Modal.Form}
          closeModal={() => setActiveModal(null)}
        />}
      {activeModal === Modal.Success &&
        <ReviewModalSuccess
          isModalActive={activeModal === Modal.Success}
          closeModal={() => setActiveModal(null)}
        />}
    </RemoveScroll>
  );
}

export default Modals;
