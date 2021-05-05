import { Meta, Story } from "@storybook/react";
import { BoardView } from "../BoardView";
import { GamePage } from ".";
import { GridView } from "../GridView";
import { createBoard, getRandomBombPositions } from "../../containers/GameContainer/createBoard";


export default {
  title: 'GamePage',
  component: GamePage,
} as Meta;

interface Props {
  width: number,
  height: number,
  bombCount: number,
}

const Template: Story<Props> = ({ width, height, bombCount }) => {
  const board = createBoard({
    width: width, 
    height: height, 
    getBombPositions: getRandomBombPositions(bombCount),
  });
  return (
    <GamePage
      restBombCount={bombCount}
      elapsedSeconds={999}
      renderBoardView={() => 
        <BoardView
          board={board}
          renderGridView={(grid) =>
            <GridView
              grid={grid}
              isDisabled={false}
              openCover={() => {}}
              changeMark={() => {}}
            />
          }
        />
      }
      renderGameOverPopup={() => <></>}
      renderConguratulationPopup={() => <></>}
    />
  );
};

export const Small = Template.bind({});
Small.args = {
  width: 9,
  height: 9,
  bombCount: 10,
};

export const Medium = Template.bind({});
Medium.args = {
  width: 16,
  height: 16,
  bombCount: 40,
};

export const Large = Template.bind({});
Large.args = {
  width: 30,
  height: 16,
  bombCount: 99,
};