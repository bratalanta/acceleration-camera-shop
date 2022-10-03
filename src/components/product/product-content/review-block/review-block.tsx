import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { reviewPostingStatusSelector, reviewsLoadingStatusSelector, selectReviewsTotalCount } from '../../../../store/slices/reviews-slice/selectors';
import { useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { DEFAULT_PAGE, MAX_REVIEWS_COUNT_PER_PAGE } from '../../../../const';
import { fetchReviewsAction } from '../../../../store/api-actions/reviews-api/reviews-api';
import { useInView } from 'react-intersection-observer';
import styles from './review-block.module.css';
import ReviewCardList from './review-card-list/review-card-list';
import PostReviewButton from './post-review-button/post-review-button';
import ShowMoreButton from './show-more-button/show-more-button';

function ReviewBlock() {
  const {id} = useParams();
  const dispatch = useAppDispatch();

  const reviewsTotalCount = useAppSelector(selectReviewsTotalCount);
  const {isReviewPostingStatusFulfilled} = useAppSelector(reviewPostingStatusSelector);
  const {isReviewsLoadingStatusPending} = useAppSelector(reviewsLoadingStatusSelector);

  const [currentPage, setCurrentPage] = useState(Number(DEFAULT_PAGE) + 1);
  const [shouldReplace, setShouldReplace] = useState(false);
  const {ref: inViewRef, entry} = useInView();

  const productId = Number(id);
  const pagesCount = useMemo(() => Math.ceil(reviewsTotalCount / MAX_REVIEWS_COUNT_PER_PAGE),
    [reviewsTotalCount]);

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
  }, [entry?.isIntersecting]);

  useEffect(() => {
    if (isReviewPostingStatusFulfilled) {
      setShouldReplace(true);
    }
  }, [isReviewPostingStatusFulfilled]);

  useEffect(() => {
    if (shouldReplace) {
      console.log('startover');
      dispatch(fetchReviewsAction({
        id: productId,
        limit: MAX_REVIEWS_COUNT_PER_PAGE * (currentPage - 1),
        page: Number(DEFAULT_PAGE),
        replace: true
      }));

      setShouldReplace(false);
    }
  }, [shouldReplace]);


  const onShowMoreButtonClick = () => {
    console.log('fetch showmore');
    dispatch(fetchReviewsAction({
      id: productId,
      limit: MAX_REVIEWS_COUNT_PER_PAGE,
      page: currentPage
    }));

    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <div className="page-content__section">
        <section className="review-block">
          <div className="container">
            <div className="page-content__headed">
              <h2 className="title title--h3">Отзывы</h2>
              <PostReviewButton />
            </div>
            <ReviewCardList />
            {currentPage !== pagesCount + 1 && <ShowMoreButton onShowMoreButtonClick={onShowMoreButtonClick}/>}
          </div>
        </section>
      </div>
      <div className={styles.intersected} ref={inViewRef}></div>
    </>
  );
}

export default ReviewBlock;
