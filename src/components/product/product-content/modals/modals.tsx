import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { reviewPostingStatusSelector } from '../../../../store/slices/reviews-slice/selectors';
import ReviewModalSuccess from './review-modal-success/review-modal-success';
import {RemoveScroll} from 'react-remove-scroll';
import ReviewModal from './review-modal/review-modal';
import { Modal } from '../../../../const';
import { selectActiveModal } from '../../../../store/slices/app-slice/selectors';
import { setActiveModal } from '../../../../store/slices/app-slice/app-slice';

function Modals() {
  const dispatch = useAppDispatch();
  const {isReviewPostingStatusFulfilled} = useAppSelector(reviewPostingStatusSelector);
  const activeModal = useAppSelector(selectActiveModal);

  useEffect(() => {
    if (activeModal && isReviewPostingStatusFulfilled) {
      dispatch(setActiveModal(Modal.Success));
    }
  }, [activeModal, dispatch, isReviewPostingStatusFulfilled]);

  return (
    <RemoveScroll enabled={activeModal === Modal.Form || activeModal === Modal.Success}>
      {activeModal === Modal.Form &&
        <ReviewModal
          isModalActive={activeModal === Modal.Form}
          closeModal={() => dispatch(setActiveModal(null))}
        />}
      {activeModal === Modal.Success &&
        <ReviewModalSuccess
          isModalActive={activeModal === Modal.Success}
          closeModal={() => dispatch(setActiveModal(null))}
        />}
    </RemoveScroll>
  );
}

export default Modals;
