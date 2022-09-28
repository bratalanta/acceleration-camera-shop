import { Fragment, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type TRateBarStatuses = readonly [
  readonly [string, number],
  readonly [string, number],
  readonly [string, number],
  readonly [string, number],
  readonly [string, number],
];

const RateBarStatuses: TRateBarStatuses = [
  ['Отлично', 5],
  ['Хорошо', 4],
  ['Нормально', 3],
  ['Плохо', 2],
  ['Ужасно', 1],
] as const;

type ReviewRateBarProps = {
  getRatingFieldCn: () => string;
  ratingRegester: UseFormRegisterReturn;
}

function ReviewRateBar({getRatingFieldCn, ratingRegester}: ReviewRateBarProps) {
  const [currentRating, setCurrentRating] = useState(0);

  return (
    <fieldset className={getRatingFieldCn()}>
      <legend className="rate__caption">Рейтинг
        <svg width={9} height={9} aria-hidden="true">
          <use xlinkHref="#icon-snowflake" />
        </svg>
      </legend>
      <div className="rate__bar">
        <div className="rate__group">
          {RateBarStatuses.map(([title, rate]) => (
            <Fragment key={rate}>
              <input
                className="visually-hidden"
                id={`star-${rate}`}
                type="radio"
                defaultValue={rate}
                {...ratingRegester}
                onChange={() => setCurrentRating(rate)}
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
