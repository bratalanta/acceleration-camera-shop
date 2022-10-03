import styles from './error-message.module.css';

function ErrorMessage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>Не удалось загрузиться :(</div>
        <button
          type="button"
          className={`btn btn--purple ${styles.reloadBtn}`}
          onClick={() => window.location.reload()}
        >
          Попробовать снова
        </button>
      </div>
    </div>
  );
}

export default ErrorMessage;
