import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { fetchSimilarCamerasAction } from '../../../../store/api-actions/cameras-api';
import { selectSimilarCameras } from '../../../../store/slices/cameras-slice/selectors';
import ProductCardList from '../../../product-card-list/product-card-list';

function SimilarProducts() {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const similarCameras = useAppSelector(selectSimilarCameras);

  useEffect(() => {
    dispatch(fetchSimilarCamerasAction(Number(id)));
  }, [id]);

  return (
    <div className="page-content__section">
      <section className="product-similar">
        <div className="container">
          <h2 className="title title--h3">Похожие товары</h2>
          <div className="product-similar__slider">
            <div className="product-similar__slider-list">
              <ProductCardList cameras={similarCameras}/>
            </div>
            <button className="slider-controls slider-controls--prev" type="button" aria-label="Предыдущий слайд" disabled>
              <svg width={7} height={12} aria-hidden="true">
                <use xlinkHref="#icon-arrow" />
              </svg>
            </button>
            <button className="slider-controls slider-controls--next" type="button" aria-label="Следующий слайд">
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

