import styles from "./style.module.css";
import { useWindowResize } from "./useWindowResize";

const WindowResize = () => {
  const { width, height } = useWindowResize();
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Window Resize</h3>
      <div className={styles.infoContainer}>
        <table className={styles.info}>
          <tbody>
            <tr>
              <td>Window Height</td>
              <td>{height}</td>
            </tr>
            <tr>
              <td>Window Width</td>
              <td>{width}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WindowResize;
