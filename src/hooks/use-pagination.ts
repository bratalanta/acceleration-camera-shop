import { generatePath, useNavigate } from 'react-router-dom';
import { AppRoute } from '../const';

function usePagination(startPage: number) {
  const navigate = useNavigate();

  // const nextPage = () => setCurrentPage(currentPage + 1);
  const nextPage = () => navigate(generatePath(AppRoute.Catalog, {pageNumber: String(startPage + 1)}));

  // const prevPage = () => setCurrentPage(currentPage - 1);
  const prevPage = () => navigate(generatePath(AppRoute.Catalog, {pageNumber: String(startPage - 1)}));

  const jump = (pageNumber: number) => navigate(generatePath(AppRoute.Catalog, {pageNumber: String(pageNumber)}));

  return {
    nextPage,
    prevPage,
    jump,
  };
}

export default usePagination;
