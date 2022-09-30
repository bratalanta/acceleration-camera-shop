import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { reviewPostingStatusSelector, reviewsLoadingStatusSelector, selectReviews, selectReviewsTotalCount } from '../../../../store/slices/reviews-slice/selectors';
import ReviewCard from './review-card/review-card';
import { setIsReviewModalOpened } from '../../../../store/slices/app-slice/app-slice';
import { useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { DEFAULT_PAGE, MAX_REVIEWS_COUNT_PER_PAGE } from '../../../../const';
import { fetchReviewsAction } from '../../../../store/api-actions/reviews-api';
import { useInView } from 'react-intersection-observer';
import styles from './review-card-list.module.css';
import { clearReviews } from '../../../../store/slices/reviews-slice/reviews-slice';

function ReviewCardList() {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const reviews = useAppSelector(selectReviews);
  const reviewsTotalCount = useAppSelector(selectReviewsTotalCount);
  const productId = Number(id);
  const {isReviewPostingStatusFulfilled} = useAppSelector(reviewPostingStatusSelector);

  const [currentPage, setCurrentPage] = useState(Number(DEFAULT_PAGE) + 1);
  const [shouldShowMore, setShouldShowMore] = useState(false);
  const [shouldStartOver, setShouldStartOver] = useState(false);
  const pagesCount = useMemo(() => Math.ceil(reviewsTotalCount / MAX_REVIEWS_COUNT_PER_PAGE), [reviewsTotalCount]);
  const {isReviewsLoadingStatusPending} = useAppSelector(reviewsLoadingStatusSelector);
  const {ref: inViewRef, entry} = useInView();

  useEffect(() => {
    if (entry?.isIntersecting && pagesCount >= currentPage && !isReviewsLoadingStatusPending) {
      console.log('fetch scroll');
      dispatch(fetchReviewsAction({
        id: productId,
        limit: MAX_REVIEWS_COUNT_PER_PAGE,
        page: currentPage
      }));

      setCurrentPage((prevPage) => prevPage + 1);
    }
  }, [currentPage, entry?.isIntersecting]);

  useEffect(() => {
    if (shouldShowMore) {
      console.log('fetch shomore');
      dispatch(fetchReviewsAction({
        id: productId,
        limit: MAX_REVIEWS_COUNT_PER_PAGE,
        page: currentPage
      }));

      setCurrentPage((prevPage) => prevPage + 1);
      setShouldShowMore(false);
    }
  }, [shouldShowMore]);

  useEffect(() => {
    if (isReviewPostingStatusFulfilled) {
      setShouldStartOver(true);
    }
  }, [isReviewPostingStatusFulfilled]);

  useEffect(() => {
    if (shouldStartOver) {
      console.log('startover');
      dispatch(clearReviews());
      dispatch(fetchReviewsAction({
        id: productId,
        limit: MAX_REVIEWS_COUNT_PER_PAGE * (currentPage - 1),
        page: Number(DEFAULT_PAGE)
      }));

      setShouldStartOver(false);
    }
  }, [shouldStartOver]);

  return (
    <>
      <div className="page-content__section">
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
                <ReviewCard key={review.id} review={review} />
              ))}
            </ul>
            {currentPage !== pagesCount + 1 &&
            <div className="review-block__buttons">
              <button
                className="btn btn--purple"
                type="button"
                onClick={() => setShouldShowMore(true)}
                disabled={isReviewsLoadingStatusPending}
              >
                Показать больше отзывов
              </button>
            </div>}
          </div>
        </section>
      </div>
      <div className={styles.intersected} ref={inViewRef}></div>
    </>
  );
}

export default ReviewCardList;
