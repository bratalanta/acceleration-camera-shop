import { useAppSelector } from '../../../hooks';
import { selectSimilarCameras } from '../../../store/slices/cameras-slice/selectors';
import { scrollToTop } from '../../../utils/utils';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs';
import Modals from './modals/modals';
import ProductDetails from './product-details/product-details';
import ReviewСardList from './review-card-list/review-card-list';
import SimilarProducts from './similar-products/similar-products';

function ProductContent() {
  const similarCameras = useAppSelector(selectSimilarCameras);

  return (
    <main>
      <div className="page-content">
        <Breadcrumbs isProduct/>
        <ProductDetails />
        {similarCameras.length ? <SimilarProducts products={similarCameras}/> : ''}
        <ReviewСardList />
      </div>
      <button
        className="up-btn"
        onClick={() => scrollToTop('smooth')}
      >
        <svg width={12} height={18} aria-hidden="true">
          <use xlinkHref="#icon-arrow2" />
        </svg>
      </button>
      <Modals />
    </main>
  );
}

export default ProductContent;
