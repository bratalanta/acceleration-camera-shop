import { CategoryName } from '../../const';
import { TCamera } from '../../types/camera';

type ProductShortDetailsProps = {
  product: TCamera;
  isModal?: boolean;
  isBasket?: boolean;
}

function ProductShortDetails({product, isModal, isBasket}: ProductShortDetailsProps) {
  const {
    category,
    name,
    previewImgWebp,
    previewImg,
    previewImg2x,
    previewImgWebp2x,
    vendorCode,
    type,
    level,
    price
  } = product;

  return (
    <>
      <div className="basket-item__img" data-testid="short">
        <picture>
          <source type="image/webp" srcSet={`/${previewImgWebp}, /${previewImgWebp2x} 2x`} />
          <img src={previewImg} srcSet={`${previewImg2x} 2x`} width={280} height={240} alt={`${category} ${name}`} />
        </picture>
      </div>
      <div className="basket-item__description">
        <p className="basket-item__title">{name}</p>
        <ul className="basket-item__list">
          <li className="basket-item__list-item">
            <span className="basket-item__article">Артикул: </span>
            <span className="basket-item__number">
              {vendorCode}
            </span>
          </li>
          <li className="basket-item__list-item">{type} {CategoryName[category].toLowerCase()}</li>
          <li className="basket-item__list-item">{level} уровень</li>
        </ul>
        {isModal && <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{price} ₽</p>}
      </div>
      {isBasket && <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{price} ₽</p>}
    </>
  );
}

export default ProductShortDetails;
