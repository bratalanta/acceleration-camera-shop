import { useLayoutEffect, useState } from 'react';
import cn from 'classnames';
import { TCamera } from '../../../../../types/camera';
import browserHistory from '../../../../../browser-history';

const enum Hash {
  Features = '#features',
  Description = '#description'
}

type ProductTabsProps = {
  product: TCamera;
}

function ProductTabs({product}: ProductTabsProps) {
  const [currentHash, setCurrentHash] = useState(browserHistory.location.hash || Hash.Description);

  useLayoutEffect(() => {
    browserHistory.push(currentHash);
  }, [currentHash]);


  const {
    vendorCode,
    category,
    type,
    level,
    description
  } = product;

  const FeatureTabCn = {
    Element: cn(
      'tabs__element',
      {
        'is-active': currentHash === Hash.Features
      }
    ),
    Control: cn(
      'tabs__control',
      {
        'is-active': currentHash === Hash.Features
      }
    ),
  } as const;

  const DescriptionTabCn = {
    Element: cn(
      'tabs__element',
      {
        'is-active': currentHash === Hash.Description
      }
    ),
    Control: cn(
      'tabs__control',
      {
        'is-active': currentHash === Hash.Description
      }
    ),
  } as const;

  return (
    <div className="tabs product__tabs">
      <div className="tabs__controls product__tabs-controls">
        <button
          className={FeatureTabCn.Control}
          type="button"
          onClick={() => setCurrentHash(Hash.Features)}
        >
          Характеристики
        </button>
        <button
          className={DescriptionTabCn.Control}
          type="button"
          onClick={() => setCurrentHash(Hash.Description)}
        >
          Описание
        </button>
      </div>
      <div className="tabs__content">
        <div className={FeatureTabCn.Element}>
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
        <div className={DescriptionTabCn.Element}>
          <div className="product__tabs-text">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTabs;
