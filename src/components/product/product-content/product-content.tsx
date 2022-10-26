import ReactFocusLock from 'react-focus-lock';
import { useAppSelector } from '../../../hooks';
import { selectSimilarCameras } from '../../../store/slices/cameras-slice/selectors';
import { scrollToTop } from '../../../utils/utils';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs';
import ReviewModals from './review-modals/review-modals';
import ProductDetails from './product-details/product-details';
import ReviewBlock from './review-block/review-block';
import SimilarProducts from './similar-products/similar-products';

function ProductContent() {
  const similarCameras = useAppSelector(selectSimilarCameras);

  return (
    <main>
      <div className="page-content" data-testid='content'>
        <Breadcrumbs isProduct/>
        <ProductDetails />
        {similarCameras.length ? <SimilarProducts products={similarCameras}/> : ''}
        <ReviewBlock />
      </div>
      <button
        className="up-btn"
        onClick={() => scrollToTop('smooth')}
      >
        <svg width={12} height={18} aria-hidden="true">
          <use xlinkHref="#icon-arrow2" />
        </svg>
      </button>
      <ReactFocusLock>
        <ReviewModals />
      </ReactFocusLock>
    </main>
  );
}

export default ProductContent;
