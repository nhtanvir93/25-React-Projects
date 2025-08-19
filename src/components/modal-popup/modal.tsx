import { RefObject, ReactNode, useRef } from "react";
import styles from "./styles.module.css";
import { useClickOutside } from "./useClickOutside";

interface Props {
  heading: ReactNode | string;
  body: ReactNode | string;
  footer?: ReactNode | string;
  onClose: () => void;
}

const Modal = ({ heading, body, footer, onClose }: Props) => {
  const modalRef = useRef<HTMLElement>(null);
  useClickOutside(modalRef, onClose);

  return (
    <>
      <div className={styles.modalOverlay}></div>
      <div className={styles.modal} ref={modalRef as RefObject<HTMLDivElement>}>
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
