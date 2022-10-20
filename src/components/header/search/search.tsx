import cn from 'classnames';
import { ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchLikelyCamerasAction } from '../../../store/api-actions/cameras-api/cameras-api';
import { selectLikelyCameras } from '../../../store/slices/cameras-slice/selectors';
import SearchList from './search-list/search-list';

function Search() {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const likelyCameras = useAppSelector(selectLikelyCameras);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const input = evt.target.value;
    setName(input);

    if (input) {
      dispatch(fetchLikelyCamerasAction(input));
    }
  };

  const searchBlockCn = cn(
    'form-search',
    {
      'list-opened': name && likelyCameras.length
    }
  );

  return (
    <div className={searchBlockCn} data-testid="search">
      <form>
        <label>
          <svg className="form-search__icon" width={16} height={16} aria-hidden="true">
            <use xlinkHref="#icon-lens" />
          </svg>
          <input
            data-testid="search-input"
            className="form-search__input"
            type="text"
            value={name}
            autoComplete="off"
            placeholder="Поиск по сайту"
            onChange={handleInputChange}
          />
        </label>
        <SearchList />
      </form>
      <button
        className="form-search__reset"
        type="reset"
        data-testid="reset"
        onClick={() => setName('')}
      >
        <svg width={10} height={10} aria-hidden="true">
          <use xlinkHref="#icon-close" />
        </svg>
        <span className="visually-hidden">Сбросить поиск</span>
      </button>
    </div>
  );
}

export default Search;
