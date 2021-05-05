import { Meta, Story } from "@storybook/react";
import { MenuPage } from ".";

export default {
  title: 'MenuPage',
  component: MenuPage,
} as Meta;

interface Props {

}

const Template: Story<Props> = () => {
  return <MenuPage startGame={(args) => {}} />;
};

export const Default = Template.bind({});