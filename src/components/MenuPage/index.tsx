import { StartGameArgs } from "../../types/game";
import { Title } from "../Title";
import styles from "./MenuPage.module.css";

interface Mode {
  name: string;
  width: number;
  height: number;
  bombCount: number;
}

interface Props {
  startGame: (args: StartGameArgs) => void;
}

const MenuPage: React.VFC<Props> = ({ startGame }) => {
  const modes: Mode[] = [
    { name: 'Easy', width: 9, height: 9, bombCount: 10 },
    { name: 'Normal', width: 16, height: 16, bombCount: 40 },
    { name: 'Hard', width: 30, height: 16, bombCount: 99 },
  ];
  return (
    <div className={styles['root']}>
      <Title />
      <div className={styles['buttons']}>
        {modes.map((mode) =>
          <div
            key={mode.name}
            className={styles['buttonWrapper']}
          >
            <button className={styles['button']}
              onClick={(event) => {
                event.preventDefault();
                startGame({ width: mode.width, height: mode.height, bombCount: mode.bombCount }); 
              }}         
            >
              <div>{mode.name}</div>
              <div>{mode.width} x {mode.height}</div>
              <div>{mode.bombCount}</div>
            </button>
          </div>          
        )}
      </div>
    </div>
  );
};

export { MenuPage };