import { useAppSelector } from '../../../../../hooks';
import { selectReviews } from '../../../../../store/slices/reviews-slice/selectors';
import ReviewCard from '../review-card/review-card';

function ReviewCardList() {
  const reviews = useAppSelector(selectReviews);

  return (
    <ul className="review-block__list">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </ul>
  );
}

export default ReviewCardList;
