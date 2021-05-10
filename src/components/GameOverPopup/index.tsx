import { Button } from '../Button';
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
      <div><Button className={styles['button']} onClick={retry}>Retry</Button></div>
      <div><Button className={styles['button']} onClick={backToMenu}>Back to MENU</Button></div>
    </div>
  );
};

export { GameOverPopup };