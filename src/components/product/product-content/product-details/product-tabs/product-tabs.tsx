import { useState } from 'react';
import cn from 'classnames';
import { TCamera } from '../../../../../types/camera';

const enum ProductTab {
  Features = 'features',
  Description = 'description'
}

type ProductTabsProps = {
  product: TCamera;
}

function ProductTabs({product}: ProductTabsProps) {
  const [currentTab, setCurrentTab] = useState(ProductTab.Description);

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
      currentTab === ProductTab.Features && 'is-active'
    ),
    Control: cn(
      'tabs__control',
      currentTab === ProductTab.Features && 'is-active'
    ),
  } as const;

  const DescriptionTabCn = {
    Element: cn(
      'tabs__element',
      currentTab === ProductTab.Description && 'is-active'
    ),
    Control: cn(
      'tabs__control',
      currentTab === ProductTab.Description && 'is-active'
    ),
  } as const;

  return (
    <div className="tabs product__tabs">
      <div className="tabs__controls product__tabs-controls" onClick={(evt) => console.log(evt.target)}>
        <button
          className={FeatureTabCn.Control}
          type="button"
          onClick={() => console.log(1)}
        >
          Характеристики
        </button>
        <button
          className={DescriptionTabCn.Control}
          type="button"
          onChange={() => setCurrentTab(ProductTab.Description)}
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
