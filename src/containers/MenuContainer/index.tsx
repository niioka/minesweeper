import { MenuPage } from "../../components/MenuPage";
import { StartGameArgs } from "../../types/game";

interface Props {
  isOpen: boolean;
  startGame: (args: StartGameArgs) => void;
}

const MenuContainer: React.VFC<Props> = ({ isOpen, startGame }) => {
  if (!isOpen) {
    return <></>;
  }
  return (
    <MenuPage startGame={startGame} />
  );
};

export { MenuContainer };