import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { fetchCameraAction } from '../../../../store/api-actions/cameras-api';
import { cameraLoadingStatusSelector, selectCamera } from '../../../../store/slices/cameras-slice/selectors';
import RatingStars from '../../../rating-stars/rating-stars';
import ProductTabs from './product-tabs/product-tabs';

function ProductDetails() {
  const {id} = useParams();
  const dispatch = useAppDispatch();

  const camera = useAppSelector(selectCamera);
  const {isCameraLoadingStatusPending} = useAppSelector(cameraLoadingStatusSelector);

  useEffect(() => {
    dispatch(fetchCameraAction(Number(id)));
  }, [id]);

  const {
    name,
    // previewImg,
    // previewImg2x,
    // previewImgWebp,
    // previewImgWebp2x,
    rating,
    reviewCount,
    price,
  } = camera;

  if (isCameraLoadingStatusPending) {
    return <h1>loading</h1>;
  }

  return (
    <div className="page-content__section">
      <section className="product">
        <div className="container">
          <div className="product__img">
            <picture>
              <source type="image/webp" srcSet="img/content/2000-go.webp, img/content/2000-go@2x.webp 2x" />
              <img src="img/content/2000-go.jpg" srcSet="img/content/2000-go@2x.jpg 2x" width={560} height={480} alt="Ретрокамера Das Auge IV" />
            </picture>
          </div>
          <div className="product__content">
            <h1 className="title title--h3">{name}</h1>
            <div className="rate product__rate">
              <RatingStars rating={rating}/>
              <p className="visually-hidden">Рейтинг: {rating}</p>
              <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
            </div>
            <p className="product__price"><span className="visually-hidden">Цена:</span>{price} ₽</p>
            <button className="btn btn--purple" type="button">
              <svg width={24} height={16} aria-hidden="true">
                <use xlinkHref="#icon-add-basket" />
              </svg>Добавить в корзину
            </button>
            <ProductTabs product={camera}/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetails;
