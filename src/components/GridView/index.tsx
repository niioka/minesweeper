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
      <div key={key} className={`${styles['grid']} ${styles['grid--bomb']}`}>
        💣
      </div>
    );
  }
  return (
    <div key={key} 
      className={`${styles['grid']} ${styles['grid--cover']}`} 
      onContextMenu={(event) => {
        event.preventDefault();
        changeMark(grid);
      }}
      onClick={(event) => {
        if (isDisabled) {
          return;
        }
        openCover(grid);
      }}
    >
      { grid.mark === 'FLAG' && '🚩' }
    </div>
  );
};

export { GridView };