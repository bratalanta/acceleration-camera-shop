import { KeyboardEvent } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import { Anchor, AppRoute } from '../../../../const';
import { useAppSelector } from '../../../../hooks';
import { selectLikelyCameras } from '../../../../store/slices/cameras-slice/selectors';

function SearchList() {
  const likelyCameras = useAppSelector(selectLikelyCameras);
  const navigate = useNavigate();

  const redirectToProductPage = (evt: KeyboardEvent<HTMLLIElement>, id: number) => {
    if (evt.key === 'Enter' || evt.key === ' ') {
      evt.preventDefault();

      navigate({
        pathname: generatePath(AppRoute.Product, {id: String(id)}),
        hash: Anchor.Description
      });
    }
  };

  return (
    <ul
      className="form-search__select-list"
    >
      {likelyCameras.map(({name, id}) => (
        <li
          data-testid='likely'
          key={id}
          data-id={id}
          className="form-search__select-item"
          tabIndex={0}
          onClick={() => navigate({
            pathname: generatePath(AppRoute.Product, {id: String(id)}),
            hash: Anchor.Description
          })}
          onKeyDown={(evt) => redirectToProductPage(evt, id)}
        >
          {name}
        </li>
      ))}
    </ul>
  );
}

export default SearchList;
