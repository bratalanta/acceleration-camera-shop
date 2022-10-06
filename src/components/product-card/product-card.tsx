import { generatePath, Link } from 'react-router-dom';
import { Anchor, AppRoute } from '../../const';
import { TCamera } from '../../types/camera';
import RatingStars from '../rating-stars/rating-stars';

type ProductCardProps = {
  product: TCamera;
}

function ProductCard({product}: ProductCardProps) {
  const {
    id,
    rating,
    previewImgWebp,
    previewImgWebp2x,
    previewImg,
    previewImg2x,
    name,
    reviewCount,
    price
  } = product;

  return (
    <div className="product-card is-active" data-testid='product-card'>
      <div className="product-card__img">
        <picture>
          <source type="image/webp" srcSet={`/${previewImgWebp}, /${previewImgWebp2x} 2x`} />
          <img src={previewImg} srcSet={`${previewImg2x} 2x`} width={280} height={240} alt={name} />
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
      <div className="product-card__buttons">
        <button className="btn btn--purple product-card__btn" type="button">Купить
        </button>
        <Link
          className="btn btn--transparent"
          to={{
            pathname: generatePath(AppRoute.Product, {id: String(id)}),
            hash: Anchor.Description,
          }}
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
