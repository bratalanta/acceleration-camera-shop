import { ProductModal } from '../../../../const';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { setProductActiveModal } from '../../../../store/slices/app-slice/app-slice';
import { selectCamera } from '../../../../store/slices/cameras-slice/selectors';
import RatingStars from '../../../rating-stars/rating-stars';
import ProductTabs from './product-tabs/product-tabs';
import ReviewsTotalCount from './reviews-total-count/reviews-total-count';

function ProductDetails() {
  const dispatch = useAppDispatch();
  const camera = useAppSelector(selectCamera);
  const {
    name,
    previewImg,
    previewImg2x,
    previewImgWebp,
    previewImgWebp2x,
    rating,
    reviewCount,
    price,
  } = camera;

  const handleAddToBasketBtnClick = () => {
    dispatch(setProductActiveModal(ProductModal.Add));
    dispatch(setProductActiveModal({
      productDetails: camera
    }));
  };

  return (
    <div className="page-content__section" data-testid='details'>
      <section className="product">
        <div className="container">
          <div className="product__img">
            <picture>
              <source type="image/webp" srcSet={`/${previewImgWebp}, /${previewImgWebp2x} 2x`} />
              <img
                src={previewImg}
                srcSet={`${previewImg2x} 2x`}
                width={560}
                height={480}
                alt={name}
              />
            </picture>
          </div>
          <div className="product__content">
            <h1 className="title title--h3">{name}</h1>
            <div className="rate product__rate">
              <RatingStars rating={rating}/>
              <p className="visually-hidden">Рейтинг: {rating}</p>
              <ReviewsTotalCount reviewCount={reviewCount}/>
            </div>
            <p className="product__price"><span className="visually-hidden">Цена:</span>{price} ₽</p>
            <button
              className="btn btn--purple"
              type="button"
              onClick={handleAddToBasketBtnClick}
            >
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
