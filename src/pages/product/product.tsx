import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import FullPageLoader from '../../components/loaders/full-page-loader/full-page-loader';
import ProductContent from '../../components/product/product-content/product-content';
import { DEFAULT_PAGE, MAX_REVIEWS_COUNT_PER_PAGE } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCameraAction, fetchSimilarCamerasAction } from '../../store/api-actions/cameras-api';
import { fetchReviewsAction } from '../../store/api-actions/reviews-api';
import { cameraLoadingStatusSelector, selectCamera } from '../../store/slices/cameras-slice/selectors';
import { scrollToTop } from '../../utils/utils';
import { Helmet } from 'react-helmet';
import { clearReviews } from '../../store/slices/reviews-slice/reviews-slice';

function Product() {
  const {id} = useParams();
  const {name} = useAppSelector(selectCamera);
  const dispatch = useAppDispatch();
  const {isCameraLoadingStatusPending} = useAppSelector(cameraLoadingStatusSelector);

  const productId = Number(id);

  useEffect(() => {
    scrollToTop();
    dispatch(fetchSimilarCamerasAction(productId));
    dispatch(fetchCameraAction(productId));
    dispatch(fetchReviewsAction({
      id: productId,
      limit: MAX_REVIEWS_COUNT_PER_PAGE,
      page: Number(DEFAULT_PAGE)
    }));

    return () => {
      dispatch(clearReviews());
    };
  }, [dispatch, productId]);

  if (isCameraLoadingStatusPending) {
    return (
      <FullPageLoader />
    );
  }

  return (
    <>
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <div className="wrapper">
        <Header />
        <ProductContent />
        <Footer />
      </div>
    </>
  );
}

export default Product;
