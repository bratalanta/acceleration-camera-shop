import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAppDispatch } from '.';
import { MAX_REVIEWS_COUNT_PER_PAGE } from '../const';
import { fetchReviewsAction } from '../store/api-actions/reviews-api';
import { clearReviews } from '../store/slices/reviews-slice/reviews-slice';
import { TReview } from '../types/review';

function useInfiniteScroll(reviews: TReview[], reviewsTotalCount: number, productId: number) {
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { ref, entry} = useInView();
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const pagesCount = Math.ceil(reviewsTotalCount / MAX_REVIEWS_COUNT_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
    dispatch(clearReviews());
  }, [productId]);

  useEffect(() => {
    if (entry?.isIntersecting && currentPage !== pagesCount) {
      setCurrentPage(currentPage + 1);
      console.log('scroll effect');
      const payload = {
        id: productId,
        limit: MAX_REVIEWS_COUNT_PER_PAGE,
        page: currentPage + 1
      };

      dispatch(fetchReviewsAction(payload));
    }

  }, [entry?.isIntersecting]);

  useEffect(() => {
    if (isButtonPressed) {
      console.log('button effect', currentPage);
      const payload = {
        id: productId,
        limit: MAX_REVIEWS_COUNT_PER_PAGE,
        page: currentPage
      };

      dispatch(fetchReviewsAction(payload));
      setIsButtonPressed(false);
    }
  }, [isButtonPressed]);

  useEffect(() => {
    const payload = {
      id: productId,
      limit: MAX_REVIEWS_COUNT_PER_PAGE,
      page: currentPage
    };

    dispatch(fetchReviewsAction(payload));
  }, [productId]);

  const nextPage = () => {
    setIsButtonPressed(true);
    setCurrentPage(currentPage + 1);
  };

  return {
    ref,
    currentPage,
    nextPage,
    pagesCount,
  };
}

export default useInfiniteScroll;
