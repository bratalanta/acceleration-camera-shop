import styles from '../not-found/not-found.module.css';
import { generatePath, Link } from 'react-router-dom';
import { AppRoute, DEFAULT_PAGE } from '../../const';

function NotFound(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.code}>404</div>
        <div className={styles.text}>Упс, что-то пошло не так</div>
        <Link
          className={styles.toCatalog}
          to={generatePath(AppRoute.Catalog, {pageNumber: DEFAULT_PAGE})}
        >
          Вернуться в каталог
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
