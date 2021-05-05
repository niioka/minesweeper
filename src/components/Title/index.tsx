import styles from "./Title.module.css";

interface Props {

}

const Title: React.VFC<Props> = () => {
  return (
    <div className={styles['title']}>MINESWEEPER</div>
  );
};

export { Title };