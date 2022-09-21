import { cameras } from '../../../../mocks';

function ProductDetails() {
  const product = cameras[0];
  const {
    name,
    previewImg,
    previewImg2x,
    previewImgWebp,
    previewImgWebp2x,
    rating,
    reviewCount,
    category,
    description,
    level,
    price,
    vendorCode,
    type
  } = product;

  return (
    <div className="page-content__section">
      <section className="product">
        <div className="container">
          <div className="product__img">
            <picture>
              <source type="image/webp" srcSet={`${previewImgWebp}, ${previewImgWebp2x} 2x`} />
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
              <svg width={17} height={16} aria-hidden="true">
                <use xlinkHref="#icon-full-star" />
              </svg>
              <svg width={17} height={16} aria-hidden="true">
                <use xlinkHref="#icon-full-star" />
              </svg>
              <svg width={17} height={16} aria-hidden="true">
                <use xlinkHref="#icon-full-star" />
              </svg>
              <svg width={17} height={16} aria-hidden="true">
                <use xlinkHref="#icon-full-star" />
              </svg>
              <svg width={17} height={16} aria-hidden="true">
                <use xlinkHref="#icon-star" />
              </svg>
              <p className="visually-hidden">Рейтинг: {rating}</p>
              <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
            </div>
            <p className="product__price"><span className="visually-hidden">Цена:</span>{price} ₽</p>
            <button className="btn btn--purple" type="button">
              <svg width={24} height={16} aria-hidden="true">
                <use xlinkHref="#icon-add-basket" />
              </svg>Добавить в корзину
            </button>
            <div className="tabs product__tabs">
              <div className="tabs__controls product__tabs-controls">
                <button className="tabs__control is-active" type="button">Характеристики</button>
                <button className="tabs__control" type="button">Описание</button>
              </div>
              <div className="tabs__content">
                <div className="tabs__element">
                  <ul className="product__tabs-list">
                    <li className="item-list"><span className="item-list__title">Артикул:</span>
                      <p className="item-list__text"> {vendorCode}</p>
                    </li>
                    <li className="item-list"><span className="item-list__title">Категория:</span>
                      <p className="item-list__text">{category}</p>
                    </li>
                    <li className="item-list"><span className="item-list__title">Тип камеры:</span>
                      <p className="item-list__text">{type}</p>
                    </li>
                    <li className="item-list"><span className="item-list__title">Уровень:</span>
                      <p className="item-list__text">{level}</p>
                    </li>
                  </ul>
                </div>
                <div className="tabs__element is-active">
                  <div className="product__tabs-text">
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetails;
