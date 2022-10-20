import { useSearchParams } from 'react-router-dom';
import { FILTER_PARAMS } from '../../../../const';

type FilterResetButtonProps = {
  resetForm: () => void;
}

function FilterResetButton({resetForm}: FilterResetButtonProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleResetBtnClick = () => {
    const newParams = Array.from(searchParams.entries())
      .filter(([key]) => !FILTER_PARAMS.includes(key));
    setSearchParams(newParams);
    resetForm();
  };

  return (
    <button
      className="btn catalog-filter__reset-btn"
      type="reset"
      onClick={handleResetBtnClick}
      disabled={!FILTER_PARAMS.some((param) => searchParams.get(param))}
      data-testid="btn-reset"
    >
      Сбросить фильтры
    </button>
  );
}

export default FilterResetButton;
