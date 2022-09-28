import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MAX_PRODUCTS_COUNT_PER_PAGE } from '../const';

function usePageSearchParams(productsTotalCount: number) {
  const [search, setSearch] = useSearchParams();

  const startPage = search.get('page') || '1';
  const pagesCount = Math.ceil(productsTotalCount / MAX_PRODUCTS_COUNT_PER_PAGE);

  useEffect(() => {
    setSearch({page: startPage});
  }, []);

  useEffect(() => {
    if (pagesCount && (Number(startPage) < 1 || Number(startPage) > pagesCount)) {
      setSearch({page: '1'});
      toast.warn('Такой страницы не существует');
    }
  }, [pagesCount]);

  return {
    startPage,
    pagesCount,
    search
  };
}

export default usePageSearchParams;
