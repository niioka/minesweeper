import { Meta, Story } from "@storybook/react";
import { BoardView } from ".";
import { GridView } from "../GridView";
import { Board, Grid } from "../../containers/GameContainer/types";

export default {
  title: 'BoardView',
  component: BoardView,
} as Meta;

interface Props {
  width: number;
  height: number;
}

const Template: Story<Props> = (args) => {
  const board = init(args);
  return (
    <BoardView board={board}
      renderGridView={(grid) =>
        <GridView grid={grid} isDisabled={false} changeMark={() => {}} openCover={() => {}} />
      } 
      />
  );
};

function init(args: Props): Board {
  const { width, height } = args;
  const grids: Grid[] = [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      grids.push({
        index: x + y * width,
        x,
        y,
        isBomb: false,
        mark: "NONE",
        type: "COVERED",
        neighborBombCount: 0,
      })
    }
  }
  const board: Board = {
    width,
    height,
    grids,
  };
  return board;
}

export const Small = Template.bind({});
Small.args = {
  width: 9,
  height: 9,
};

export const Medium = Template.bind({});
Medium.args = {
  width: 16,
  height: 16,
};

export const Large = Template.bind({});
Large.args = {
  width: 30,
  height: 16,
};