import Breadcrumbs from '../../breadcrumbs/breadcrumbs';
import ProductDetails from './product-details/product-details';
import ReviewСardList from './review-list/review-card-list';
import SimilarProducts from './similar-products/similar-products';

function ProductContent() {
  return (
    <>
      <main>
        <div className="page-content">
          <Breadcrumbs isProduct/>
          <ProductDetails />
          <SimilarProducts />
          <ReviewСardList />
        </div>
      </main>
      <a className="up-btn" href="#header">
        <svg width={12} height={18} aria-hidden="true">
          <use xlinkHref="#icon-arrow2" />
        </svg>
      </a>
    </>
  );
}

export default ProductContent;
