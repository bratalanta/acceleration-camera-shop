import { MAX_REVIEWS_COUNT_PER_PAGE } from '../../../../../const';
import { useReview } from '../../../../../contexts/review-provider/review-provider';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import { fetchReviewsAction } from '../../../../../store/api-actions/reviews-api/reviews-api';
import { reviewsLoadingStatusSelector } from '../../../../../store/slices/reviews-slice/selectors';

type ShowMoreButtonProps = {
  productId: number;
}

function ShowMoreButton({productId}: ShowMoreButtonProps) {
  const dispatch = useAppDispatch();
  const {currentPage, setCurrentPage} = useReview();
  const {isReviewsLoadingStatusPending} = useAppSelector(reviewsLoadingStatusSelector);

  const handleShowMoreButtonClick = () => {
    dispatch(fetchReviewsAction({
      id: productId,
      limit: MAX_REVIEWS_COUNT_PER_PAGE,
      page: currentPage
    }));

    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="review-block__buttons">
      <button
        className="btn btn--purple"
        type="button"
        onClick={handleShowMoreButtonClick}
        disabled={isReviewsLoadingStatusPending}
        data-testid='show-btn'
      >
        Показать больше отзывов
      </button>
    </div>
  );
}

export default ShowMoreButton;
