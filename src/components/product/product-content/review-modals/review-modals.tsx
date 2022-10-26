import { useAppDispatch, useAppSelector } from '../../../../hooks';
import ReviewModalSuccess from './review-modal-success/review-modal-success';
import {RemoveScroll} from 'react-remove-scroll';
import { selectReviewActiveModal } from '../../../../store/slices/app-slice/selectors';
import { setReviewActiveModal } from '../../../../store/slices/app-slice/app-slice';
import { PostReviewModal } from '../../../../const';
import ReviewModal from './review-modal/review-modal';

function ReviewModals() {
  const dispatch = useAppDispatch();
  const activeModal = useAppSelector(selectReviewActiveModal);

  return (
    <RemoveScroll enabled={activeModal === PostReviewModal.Form || activeModal === PostReviewModal.Success}>
      {activeModal === PostReviewModal.Form &&
        <ReviewModal
          isModalActive={activeModal === PostReviewModal.Form}
          closeModal={() => dispatch(setReviewActiveModal(null))}
        />}
      {activeModal === PostReviewModal.Success &&
        <ReviewModalSuccess
          isModalActive={activeModal === PostReviewModal.Success}
          closeModal={() => dispatch(setReviewActiveModal(null))}
        />}
    </RemoveScroll>
  );
}

export default ReviewModals;
