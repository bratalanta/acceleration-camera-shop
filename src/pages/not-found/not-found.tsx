import styles from '../not-found/not-found.module.css';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFound(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.code}>404</h1>
        <div className={styles.text}>Упс, что-то пошло не так</div>
        <Link
          className={styles.toCatalog}
          to={AppRoute.Catalog}
        >
          Вернуться в каталог
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
