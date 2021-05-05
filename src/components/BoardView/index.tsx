
import styles from "./BoardView.module.css";
import { ReactElement } from "react";
import { Board, Grid } from "../../containers/GameContainer/types";

interface Props {
  board: Board,
  renderGridView: (grid: Grid) => ReactElement;
}

const BoardView: React.FC<Props> = ({ board, renderGridView }) => { 
  let { width, height, grids } = board;
  return (
    <div className={styles['root']} style={{ 
      gridTemplateColumns: `repeat(${width}, 1fr)`,
      width: `${width * 20}px`,
      height: `${height * 20}px`, 
      }}>
      {grids.map((grid) => (
        renderGridView(grid)
      ))}
    </div>
  );
};

export { BoardView };