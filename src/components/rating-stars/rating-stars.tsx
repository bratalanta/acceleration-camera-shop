import { MAX_RATING } from '../../const';

type RatingStarsProps = {
  rating: number;
}

function RatingStars({rating}: RatingStarsProps): JSX.Element {
  return (
    <>
      {Array.from({length: MAX_RATING}, (_, k) => {
        const iconCn = k <= rating ? '#icon-full-star' : '#icon-star';

        return (
          <svg width={17} height={16} aria-hidden="true" key={k}>
            <use xlinkHref={iconCn} />
          </svg>
        );
      })}
    </>
  );
}

export default RatingStars;
