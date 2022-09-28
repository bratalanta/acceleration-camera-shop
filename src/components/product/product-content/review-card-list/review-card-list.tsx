import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { selectReviews, selectReviewsTotalCount } from '../../../../store/slices/reviews-slice/selectors';
import ReviewCard from './review-card/review-card';
import styles from './review-card-list.module.css';
import useInfiniteScroll from '../../../../hooks/use-infinite-scroll';
import { setIsReviewModalOpened } from '../../../../store/slices/app-slice/app-slice';
import { useParams } from 'react-router-dom';

function ReviewCardList() {
  const {id} = useParams();
  const productId = Number(id);

  const dispatch = useAppDispatch();
  const reviews = useAppSelector(selectReviews);
  const reviewsTotalCount = useAppSelector(selectReviewsTotalCount);

  const {
    currentPage,
    ref,
    pagesCount,
    nextPage
  } = useInfiniteScroll(reviews, reviewsTotalCount, productId);

  console.log(reviews);
  console.log(currentPage, 'page');
  console.log('---------------------------');
  return (
    <div className="page-content__section" style={{position: 'relative'}}>
      <section className="review-block">
        <div className="container">
          <div className="page-content__headed">
            <h2 className="title title--h3">Отзывы</h2>
            <button
              className="btn"
              type="button"
              onClick={() => dispatch(setIsReviewModalOpened(true))}
            >
              Оставить свой отзыв
            </button>
          </div>
          <ul className="review-block__list">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review}/>
            ))}
          </ul>
          {currentPage !== pagesCount &&
          <div className="review-block__buttons" onClick={nextPage}>
            <button className="btn btn--purple" type="button">Показать больше отзывов
            </button>
          </div>}
        </div>
      </section>
      <div ref={ref} className={styles.lastElement}></div>
    </div>
  );
}

export default ReviewCardList;
