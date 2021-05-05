import styles from './GameOverPopup.module.css';

interface Props {
  isOpen: boolean;
  retry: () => void;
  backToMenu: () => void;
}

const GameOverPopup: React.FC<Props> = ({ isOpen, retry, backToMenu }) => {

  if (!isOpen) {
    return <></>;
  }
  return (
    <div className={styles['root']}>
      <div className={styles['title']}>Game Over</div>
      <div><button className={styles['button']} onClick={retry}>Retry</button></div>
      <div><button className={styles['button']} onClick={backToMenu}>Back to MENU</button></div>
    </div>
  );
};

export { GameOverPopup };