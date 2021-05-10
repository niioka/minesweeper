import styles from './GridView.module.css';
import { Grid } from '../../containers/GameContainer/types';

interface Props {
  grid: Grid;
  isDisabled: boolean;
  openCover: (grid: Grid) => void;
  changeMark: (grid: Grid) => void;
}

const GridView: React.FC<Props> = ({ grid, isDisabled, openCover, changeMark }) => {
  const key = grid.y + "_" + grid.x;
  if (grid.type === "BLANK") {
    return (
      <div key={key} className={`${styles['grid']} ${styles['grid--blank']}`}>
        { grid.neighborBombCount > 0 && grid.neighborBombCount }
      </div>
    );  
  } else if (grid.type === "BOMB") {
    return (
      <div key={key} className={`${styles['grid']} ${styles['grid--bomb']}`}
        style={{
          backgroundColor: grid.backgroundColor,
          borderColor: grid.backgroundColor,
        }}
      >
        💣
      </div>
    );
  }

  let markStr;
  switch (grid.mark) {
    case 'FLAG': markStr = '🚩'; break;
    case 'UNKNOWN': markStr = '❓'; break;
    default: markStr = '\u00A0'; break;
  }

  return (
    <div key={key} 
      className={`${styles['grid']} ${styles['grid--cover']}`} 
      onContextMenu={(event) => {
        event.preventDefault();
        if (isDisabled) {
          return;
        }
        changeMark(grid);
      }}
      onClick={(event) => {
        event.preventDefault();
        if (isDisabled) {
          return;
        }
        openCover(grid);
      }}
    >
      {markStr}
    </div>
  );
};

export { GridView };