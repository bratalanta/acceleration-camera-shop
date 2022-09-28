import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import FullPageLoader from '../../components/loaders/full-page-loader/full-page-loader';
import ProductContent from '../../components/product/product-content/product-content';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCameraAction, fetchSimilarCamerasAction } from '../../store/api-actions/cameras-api';
import { cameraLoadingStatusSelector } from '../../store/slices/cameras-slice/selectors';
import { scrollToTop } from '../../utils/utils';

function Product() {
  const {id} = useParams();
  const productId = Number(id);

  const dispatch = useAppDispatch();
  const {isCameraLoadingStatusPending} = useAppSelector(cameraLoadingStatusSelector);

  useEffect(() => {
    scrollToTop();
    dispatch(fetchSimilarCamerasAction(productId));
    dispatch(fetchCameraAction(productId));
  }, [dispatch, productId]);
  console.log(isCameraLoadingStatusPending);

  if (isCameraLoadingStatusPending) {
    return (
      <FullPageLoader />
    );
  }

  return (
    <div className="wrapper">
      <Header />
      <ProductContent />
      <Footer />
    </div>
  );
}

export default Product;
