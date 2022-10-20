import styles from './inner-loader.module.css';

function InnerLoader() {
  return (
    <div className={styles.container} data-testid='inner-loader'>
      <div className={styles.loader}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  );
}

export default InnerLoader;
