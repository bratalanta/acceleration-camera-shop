import { useMemo, useState } from 'react';
import { MAX_PRODUCTS_COUNT_PER_SLIDE } from '../../../../const';
import { TCamera } from '../../../../types/camera';
import ProductCardList from '../../../product-card-list/product-card-list';

type SimilarProductsProps = {
  products: TCamera[];
}

function SimilarProducts({products}: SimilarProductsProps) {
  const [currentSlide, setCurrentSlide] = useState(1);

  const slidesCount = useMemo(() => Math.ceil(products.length / MAX_PRODUCTS_COUNT_PER_SLIDE), [products]);
  const currentCameras = products.slice(
    (currentSlide - 1) * MAX_PRODUCTS_COUNT_PER_SLIDE, currentSlide * MAX_PRODUCTS_COUNT_PER_SLIDE
  );

  return (
    <div className="page-content__section" data-testid='similar'>
      <section className="product-similar">
        <div className="container">
          <h2 className="title title--h3">Похожие товары</h2>
          <div className="product-similar__slider">
            <div className="product-similar__slider-list">
              <ProductCardList cameras={currentCameras}/>
            </div>
            <button
              className="slider-controls slider-controls--prev"
              type="button"
              aria-label="Предыдущий слайд"
              onClick={() => setCurrentSlide(currentSlide - 1)}
              disabled={currentSlide === 1}
              data-testid='prev-btn'
            >
              <svg width={7} height={12} aria-hidden="true">
                <use xlinkHref="#icon-arrow" />
              </svg>
            </button>
            <button
              className="slider-controls slider-controls--next"
              type="button"
              aria-label="Следующий слайд"
              onClick={() => setCurrentSlide(currentSlide + 1)}
              disabled={currentSlide === slidesCount}
            >
              <svg width={7} height={12} aria-hidden="true">
                <use xlinkHref="#icon-arrow" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SimilarProducts;

