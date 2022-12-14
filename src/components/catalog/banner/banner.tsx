import { generatePath, Link } from 'react-router-dom';
import { Anchor, AppRoute } from '../../../const';
import { useAppSelector } from '../../../hooks';
import { selectPromo } from '../../../store/slices/promo-slice/selectors';

function Banner() {
  const {name, id} = useAppSelector(selectPromo);

  return (
    <div className="banner" data-testid='banner'>
      <picture>
        <source
          type="image/webp"
          srcSet="/img/content/banner-bg.webp, /img/content/banner-bg@2x.webp 2x"
        />
        <img
          src="img/content/banner-bg.jpg"
          srcSet="img/content/banner-bg@2x.jpg 2x"
          width={1280}
          height={280}
          alt="баннер"
        />
      </picture>
      <p className="banner__info">
        <span className="banner__message">Новинка!</span>
        <span className="title title--h1">{name}</span>
        <span className="banner__text">Профессиональная камера от&nbsp;известного производителя</span>
        <Link
          className="btn"
          data-testid='banner-link'
          to={{
            pathname: generatePath(AppRoute.Product, {id: String(id)}),
            hash: Anchor.Description
          }}
        >
          Подробнее
        </Link>
      </p>
    </div>
  );
}

export default Banner;
