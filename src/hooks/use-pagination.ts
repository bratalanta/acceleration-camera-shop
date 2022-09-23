import { useEffect, useState } from 'react';
import browserHistory from '../browser-history';

export default function usePagination() {
  const [currentPage, setCurrentPage] = useState(
    Number(browserHistory.location.search.at(-1)) || 1
  );

  useEffect(() => {
    browserHistory.push(`?_page=${currentPage}`);
  }, [currentPage]);

  return [currentPage, setCurrentPage];
}
