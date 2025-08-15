import { ReactNode } from "react";
import styles from "./styles.module.css";

interface Props {
  heading: ReactNode | string;
  body: ReactNode | string;
  footer?: ReactNode | string;
  onClose: () => void;
}

const Modal = ({ heading, body, footer, onClose }: Props) => {
  return (
    <>
      <div className={styles.modalOverlay}></div>
      <div className={styles.modal}>
        <div className={styles.modalHeading}>
          <div className={styles.modalHeadingContent}>{heading}</div>
          <span className={styles.closeIcon} onClick={onClose}>
            &times;
          </span>
        </div>
        <div className={styles.modalBody}>{body}</div>
        {footer && <div className={styles.modalFooter}>{footer}</div>}
      </div>
    </>
  );
};

export default Modal;
