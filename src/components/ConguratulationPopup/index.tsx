import { Button } from "../Button";
import styles from "./ConguratulationPopup.module.css";

interface Props {
  isOpen: boolean;
  time: number;
  bestTime: number;
  retry: () => void;
  backToMenu: () => void;
}

const ConguratulationPopup: React.VFC<Props> = ({ isOpen, time, bestTime, retry, backToMenu }) => {
  if (!isOpen) {
    return <></>;
  }
  return (
    <div className={styles['popup']}>
      <div className={styles['title']}>Conguratulation🎉</div>
      <div className={styles['content']}>
        <div>TIME:</div>
        <div>{time}</div>
        <div>BEST TIME:</div>
        <div>{bestTime}</div>
      </div>
      <div className={styles['footer']}>
        <div><Button className={styles['button']} onClick={retry}>RETRY</Button></div>
        <div><Button className={styles['button']} onClick={backToMenu}>BACK TO MENU</Button></div>
      </div>
    </div>
  );
};

export { ConguratulationPopup };