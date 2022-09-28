import { useState } from 'react';

function usePagination(startPage: number) {
  const [currentPage, setCurrentPage] = useState(startPage);

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);
  const jump = (pageNumber: number) => setCurrentPage(pageNumber);

  return {
    currentPage,
    nextPage,
    prevPage,
    jump,
  };
}

export default usePagination;
