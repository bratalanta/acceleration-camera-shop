import { useAppSelector } from '../../../../../hooks';
import { reviewsLoadingStatusSelector } from '../../../../../store/slices/reviews-slice/selectors';

type ShowMoreButtonProps = {
  onShowMoreButtonClick: () => void;
}

function ShowMoreButton({onShowMoreButtonClick}: ShowMoreButtonProps) {
  const {isReviewsLoadingStatusPending} = useAppSelector(reviewsLoadingStatusSelector);

  return (
    <div className="review-block__buttons">
      <button
        className="btn btn--purple"
        type="button"
        onClick={onShowMoreButtonClick}
        disabled={isReviewsLoadingStatusPending}
      >
        Показать больше отзывов
      </button>
    </div>
  );
}

export default ShowMoreButton;
