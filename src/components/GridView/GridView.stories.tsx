import { Meta, Story } from "@storybook/react";
import { GridView } from ".";
import { Grid } from "../../containers/GameContainer/types";

export default {
  title: 'GridView',
  component: GridView,
} as Meta;

interface Props {
  grid: Grid;
}

const Template: Story<Props> = (props) => {
  return (
    <GridView grid={props.grid} isDisabled={false} openCover={(grid) => {}} changeMark={(grid) => {}} /> 
  );
};

export const Covered = Template.bind({});
Covered.args = {
  grid: { 
    index: 0,
    x: 0, 
    y: 0, 
    type: "COVERED", 
    isBomb: true, 
    mark: "NONE",
    neighborBombCount: 0 
  },
};


export const Bomb = Template.bind({});
Bomb.args = {
  grid: { 
    index: 0,
    x: 0, 
    y: 0, 
    type: "BOMB", 
    isBomb: true, 
    mark: "NONE",
    neighborBombCount: 0 
  },
};

export const Blank0 = Template.bind({});
Blank0.args = {
  grid: { 
    index: 0,
    x: 0, 
    y: 0, 
    type: "BLANK", 
    isBomb: false, 
    mark: "NONE",
    neighborBombCount: 0 
  },
};

export const Blank8 = Template.bind({});
Blank8.args = {
  grid: { 
    index: 0,
    x: 0, 
    y: 0, 
    type: "BLANK", 
    isBomb: false, 
    mark: "NONE",
    neighborBombCount: 8 
  },
};