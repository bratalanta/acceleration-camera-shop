import { useAppSelector } from '../../../../../hooks';
import { selectReviewsTotalCount } from '../../../../../store/slices/reviews-slice/selectors';

type ReviewsTotalCountProps ={
  reviewCount: number;
}

function ReviewsTotalCount({reviewCount}: ReviewsTotalCountProps) {
  const currentTotal = useAppSelector(selectReviewsTotalCount);

  return (
    <p className="rate__count">
      <span className="visually-hidden">Всего оценок:</span>
      {reviewCount !== currentTotal ? currentTotal : reviewCount}
    </p>
  );
}

export default ReviewsTotalCount;
