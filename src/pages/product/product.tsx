import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import FullPageLoader from '../../components/loaders/full-page-loader/full-page-loader';
import ProductContent from '../../components/product/product-content/product-content';
import { DEFAULT_PAGE, MAX_REVIEWS_COUNT_PER_PAGE, REVIEW_DEFAULT_PAGE } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCameraAction, fetchSimilarCamerasAction } from '../../store/api-actions/cameras-api/cameras-api';
import { fetchReviewsAction } from '../../store/api-actions/reviews-api/reviews-api';
import { cameraLoadingStatusSelector, selectCamera } from '../../store/slices/cameras-slice/selectors';
import { scrollToTop } from '../../utils/utils';
import { Helmet } from 'react-helmet';
import ErrorMessage from '../error-message/error-message';
import { setCurrentReviewPage } from '../../store/slices/app-slice/app-slice';

function Product() {
  const dispatch = useAppDispatch();

  const {id} = useParams();
  const {name} = useAppSelector(selectCamera);
  const {isCameraLoadingStatusPending, isCameraLoadingStatusRejected} = useAppSelector(cameraLoadingStatusSelector);

  const productId = Number(id);

  useEffect(() => {
    scrollToTop();
    dispatch(fetchSimilarCamerasAction(productId));
    dispatch(fetchCameraAction(productId));
    dispatch(fetchReviewsAction({
      id: productId,
      limit: MAX_REVIEWS_COUNT_PER_PAGE,
      page: Number(DEFAULT_PAGE),
      replace: true
    }));

    return () => {
      dispatch(setCurrentReviewPage(REVIEW_DEFAULT_PAGE));
    };
  }, [dispatch, productId]);

  if (isCameraLoadingStatusPending) {
    return <FullPageLoader />;
  }

  if (isCameraLoadingStatusRejected) {
    return <ErrorMessage />;
  }

  return (
    <>
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <div className="wrapper" data-testid="product">
        <Header />
        <ProductContent />
        <Footer />
      </div>
    </>
  );
}

export default Product;
