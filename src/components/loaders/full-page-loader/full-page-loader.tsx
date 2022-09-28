import styles from './full-page-loader.module.css';

function FullPageLoader() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  );
}

export default FullPageLoader;
