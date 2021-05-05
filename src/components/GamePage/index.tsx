import { ReactElement } from "react";
import { Title } from "../Title";
import styles from "./GamePage.module.css";

interface Props {
  restBombCount: number;
  elapsedSeconds: number;
  renderBoardView: () => ReactElement;
  renderGameOverPopup: () => ReactElement;
  renderConguratulationPopup: () => ReactElement;
}

const GamePage: React.FC<Props> = ({
  restBombCount,
  elapsedSeconds,
  renderBoardView,
  renderGameOverPopup,
  renderConguratulationPopup
}) => {
  return (
    <div className={styles['root']}>
      <div className={styles['container']}>
        <div className={styles['header']}>
          <Title />
          <div className={styles['discard']}>✘</div>
        </div>
        <div className={styles['info']}>
          <div className={styles['bombCount']}>💣{('000' + restBombCount).slice(-3)}</div>
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