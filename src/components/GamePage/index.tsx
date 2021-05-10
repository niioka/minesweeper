import { ReactElement } from "react";
import { Title } from "../Title";
import styles from "./GamePage.module.css";

interface Props {
  readonly restBombCount: number;
  readonly elapsedSeconds: number;
  readonly renderBoardView: () => ReactElement;
  readonly renderGameOverPopup: () => ReactElement;
  readonly renderConguratulationPopup: () => ReactElement;
}

const GamePage: React.FC<Props> = ({
  restBombCount,
  elapsedSeconds,
  renderBoardView,
  renderGameOverPopup,
  renderConguratulationPopup
}) => {
  let restBombCountStr = '';
  if (restBombCount <= -100) {
    restBombCountStr = "-99";
  }
  else if (restBombCount < 0) {
    restBombCountStr = "-" + ("00" + -restBombCount).slice(-2);
  } 
  else if (restBombCount >= 1000) {
    restBombCountStr = "999";
  }
  else {
    restBombCountStr = ('000' + restBombCount).slice(-3);
  }

  return (
    <div className={styles['root']}>
      <div className={styles['container']}>
        <div className={styles['header']}>
          <Title />
          <div className={styles['discard']}>✘</div>
        </div>
        <div className={styles['info']}>
          <div className={styles['bombCount']}>💣{restBombCountStr}</div>
          <div className={styles['time']}>⏱{('000' + elapsedSeconds).slice(-3)}</div>
        </div>
        {renderBoardView()}
      </div>
      {renderGameOverPopup()}
      {renderConguratulationPopup()}
    </div>
  );
};

export { GamePage };