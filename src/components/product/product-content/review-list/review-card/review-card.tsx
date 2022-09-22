import { MAX_RATING } from '../../../../../const';
import { TReview } from '../../../../../types/review';
import { humanizeDate } from '../../../../../utils/date';

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
    <li className="review-card">
      <div className="review-card__head">
        <p className="title title--h4">{userName}</p>
        <time className="review-card__data" dateTime={humanizeDate(createAt, 'YYYY-MM-DD')}>
          {humanizeDate(createAt, 'DD MMMM')}
        </time>
      </div>
      <div className="rate review-card__rate">
        {Array.from({length: MAX_RATING}, (_, k) => (
          <svg width={17} height={16} aria-hidden="true" key={k}>
            <use xlinkHref={`#icon${k <= rating ? '-full' : ''}-star`} />
          </svg>
        ))}
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
