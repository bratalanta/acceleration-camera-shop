import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { reviewsLoadingStatusSelector, selectReviewsTotalCount } from '../../../../store/slices/reviews-slice/selectors';
import { useParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { MAX_REVIEWS_COUNT_PER_PAGE } from '../../../../const';
import { fetchReviewsAction } from '../../../../store/api-actions/reviews-api/reviews-api';
import { useInView } from 'react-intersection-observer';
import styles from './review-block.module.css';
import ReviewCardList from './review-card-list/review-card-list';
import PostReviewButton from './post-review-button/post-review-button';
import ShowMoreButton from './show-more-button/show-more-button';
import { useReview } from '../../../../contexts/review-provider/review-provider';

function ReviewBlock() {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const reviewsTotalCount = useAppSelector(selectReviewsTotalCount);
  const {isReviewsLoadingStatusPending} = useAppSelector(reviewsLoadingStatusSelector);

  const {currentPage, setCurrentPage} = useReview();
  const {ref: inViewRef, entry} = useInView();
  const pagesCount = useMemo(() => Math.ceil(reviewsTotalCount / MAX_REVIEWS_COUNT_PER_PAGE),
    [reviewsTotalCount]);

  const productId = Number(id);

  useEffect(() => {
    if (entry?.isIntersecting && pagesCount >= currentPage && !isReviewsLoadingStatusPending) {
      dispatch(fetchReviewsAction({
        id: productId,
        limit: MAX_REVIEWS_COUNT_PER_PAGE,
        page: currentPage
      }));

      setCurrentPage((prevPage) => prevPage + 1);
    }
  }, [entry?.isIntersecting]);

  return (
    <>
      <div className="page-content__section" data-testid='block'>
        <section className="review-block">
          <div className="container">
            <div className="page-content__headed">
              <h2 className="title title--h3">Отзывы</h2>
              <PostReviewButton />
            </div>
            <ReviewCardList />
            {pagesCount !== 0 && currentPage !== pagesCount + 1 && <ShowMoreButton productId={productId}/>}
          </div>
        </section>
      </div>
      <div className={styles.intersected} ref={inViewRef} data-testid='intersect'></div>
    </>
  );
}

export default ReviewBlock;
