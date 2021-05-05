import { Meta, Story } from "@storybook/react";
import { GameOverPopup } from ".";

export default {
  title: 'GameOverPopup',
  component: GameOverPopup,
} as Meta;


interface Props {

}

const Template: Story<Props> = () => {
  return (
    <GameOverPopup isOpen={true} backToMenu={() => {}} retry={() => {}} />
  );
};

export const Default = Template.bind({});
Default.args = {};