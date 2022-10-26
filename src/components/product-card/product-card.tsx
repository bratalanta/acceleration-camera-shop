import { TCamera } from '../../types/camera';
import RatingStars from '../rating-stars/rating-stars';
import ProductCardButtons from './product-card-buttons/product-card-buttons';

type ProductCardProps = {
  product: TCamera;
}

function ProductCard({product}: ProductCardProps) {
  const {
    rating,
    previewImgWebp,
    previewImgWebp2x,
    previewImg,
    previewImg2x,
    name,
    reviewCount,
    price,
    category
  } = product;

  return (
    <div className="product-card is-active" data-testid='product-card'>
      <div className="product-card__img">
        <picture>
          <source type="image/webp" srcSet={`/${previewImgWebp}, /${previewImgWebp2x} 2x`} />
          <img src={previewImg} srcSet={`${previewImg2x} 2x`} width={280} height={240} alt={`${category} ${name}`} />
        </picture>
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">
          <RatingStars rating={rating}/>
          <p className="visually-hidden">Рейтинг: {rating}</p>
          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
        </div>
        <p className="product-card__title">{name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{price} ₽
        </p>
      </div>
      <ProductCardButtons product={product}/>
    </div>
  );
}

export default ProductCard;
