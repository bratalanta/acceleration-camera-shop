import { TReview } from '../../../../../types/review';
import { humanizeDate } from '../../../../../utils/utils';
import RatingStars from '../../../../rating-stars/rating-stars';

type ReviewProps = {
  review: TReview
}

function ReviewCard({review}: ReviewProps) {
  const {
    userName,
    advantage,
    disadvantage,
    review: comment,
    rating,
    createAt
  } = review;

  return (
    <li className="review-card" data-testid='review-card'>
      <div className="review-card__head">
        <p className="title title--h4">{userName}</p>
        <time className="review-card__data" dateTime={humanizeDate(createAt, 'YYYY-MM-DD')}>
          {humanizeDate(createAt, 'D MMMM')}
        </time>
      </div>
      <div className="rate review-card__rate">
        <RatingStars rating={rating}/>
        <p className="visually-hidden">Оценка: {rating}</p>
      </div>
      <ul className="review-card__list">
        <li className="item-list"><span className="item-list__title">Достоинства:</span>
          <p className="item-list__text">{advantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Недостатки:</span>
          <p className="item-list__text">{disadvantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Комментарий:</span>
          <p className="item-list__text">
            {comment}
          </p>
        </li>
      </ul>
    </li>
  );
}

export default ReviewCard;
