import { generatePath, useNavigate } from 'react-router-dom';
import { Anchor, AppRoute } from '../../../../const';
import { useAppSelector } from '../../../../hooks';
import { selectLikelyCameras } from '../../../../store/slices/cameras-slice/selectors';

function SearchList() {
  const likelyCameras = useAppSelector(selectLikelyCameras);
  const navigate = useNavigate();

  return (
    <ul className="form-search__select-list">
      {likelyCameras.map(({name, id}) => (
        <li
          key={id}
          className="form-search__select-item"
          tabIndex={0}
          onClick={() => navigate({
            pathname: generatePath(AppRoute.Product, {id: String(id)}),
            hash: Anchor.Description
          })}
        >
          {name}
        </li>
      ))}
    </ul>
  );
}

export default SearchList;
