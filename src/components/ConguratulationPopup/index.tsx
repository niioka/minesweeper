import styles from "./ConguratulationPopup.module.css";

interface Props {
  isOpen: boolean;
}

const ConguratulationPopup: React.VFC<Props> = ({ isOpen }) => {
  if (!isOpen) {
    return <></>;
  }
  return (
    <div className={styles['popup']}>
      <div className={styles['title']}>Conguratulation!</div>
    </div>
  );
};

export { ConguratulationPopup };