import { useAppSelector } from '../../../hooks';
import { basketProductsTotalCountSelector } from '../../../store/slices/basket-slice/selectors';

function HeaderBasketCount() {
  const basketProductsTotalCount = useAppSelector(basketProductsTotalCountSelector);

  return (
    <span className="header__basket-count" data-testid="cnt">{basketProductsTotalCount}</span>
  );
}

export default HeaderBasketCount;
