import { Fragment, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type TRateBarStatus = [string, number][];

const rateBarStatuses: TRateBarStatus = [
  ['Отлично', 5],
  ['Хорошо', 4],
  ['Нормально', 3],
  ['Плохо', 2],
  ['Ужасно', 1],
];

type ReviewRateBarProps = {
  getRatingFieldCn: () => string;
  ratingRegester: UseFormRegisterReturn;
}

function ReviewRateBar({getRatingFieldCn, ratingRegester}: ReviewRateBarProps) {
  const [currentRating, setCurrentRating] = useState(0);

  return (
    <fieldset className={getRatingFieldCn()} data-testid='rate-bar'>
      <legend className="rate__caption">Рейтинг
        <svg width={9} height={9} aria-hidden="true">
          <use xlinkHref="#icon-snowflake" />
        </svg>
      </legend>
      <div className="rate__bar">
        <div className="rate__group">
          {rateBarStatuses.map(([title, rate]) => (
            <Fragment key={rate}>
              <input
                className="visually-hidden"
                id={`star-${rate}`}
                type="radio"
                defaultValue={rate}
                {...ratingRegester}
                onChange={() => setCurrentRating(rate)}
                data-testid='rate-bar-input'
              />
              <label className="rate__label" htmlFor={`star-${rate}`} title={title} />
            </Fragment>
          ))}
        </div>
        <div className="rate__progress">
          <span className="rate__stars">{currentRating}</span>
          <span>/</span>
          <span className="rate__all-stars">5</span>
        </div>
      </div>
      <p className="rate__message">Нужно оценить товар</p>
    </fieldset>
  );
}

export default ReviewRateBar;
