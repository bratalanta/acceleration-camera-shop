import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { reviewPostingStatusSelector } from '../../../../store/slices/reviews-slice/selectors';
import ReviewModalSuccess from './review-modal-success/review-modal-success';
import { selectIsReviewModalOpened } from '../../../../store/slices/app-slice/selectors';
import { setIsReviewModalOpened } from '../../../../store/slices/app-slice/app-slice';
import {RemoveScroll} from 'react-remove-scroll';
import ReviewModal from './review-modal/review-modal';

function Modals() {
  const dispatch = useAppDispatch();
  const {isReviewPostingStatusFulfilled} = useAppSelector(reviewPostingStatusSelector);
  const isReviewModalOpened = useAppSelector(selectIsReviewModalOpened);

  const [isReviewModalSuccessOpened, setIsReviewModalSuccessOpened] = useState(false);

  useEffect(() => {
    if (isReviewPostingStatusFulfilled) {
      dispatch(setIsReviewModalOpened(false));
      setIsReviewModalSuccessOpened(true);
    }
  }, [dispatch, isReviewPostingStatusFulfilled]);

  return (
    <RemoveScroll enabled={isReviewModalOpened || isReviewModalSuccessOpened}>
      {isReviewModalOpened &&
        <ReviewModal
          isModalOpened={isReviewModalOpened}
          closeModal={() => dispatch(setIsReviewModalOpened(false))}
        />}
      {isReviewModalSuccessOpened &&
        <ReviewModalSuccess
          isModalOpened={isReviewModalSuccessOpened}
          closeModal={() => setIsReviewModalSuccessOpened(false)}
        />}
    </RemoveScroll>
  );
}

export default Modals;
