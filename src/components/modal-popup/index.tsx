import { useState } from "react";
import styles from "./styles.module.css";
import Modal from "./modal";

const ModalPopup = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal((prev) => !prev);
  };

  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <div>
      <button onClick={handleOpenModal} type="button" className={styles.btn}>
        Open Modal
      </button>
      {openModal && (
        <Modal
          heading={
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              maxime!
            </h3>
          }
          body={
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              deserunt magnam labore enim excepturi dolores. Repellat facere
              explicabo maiores ducimus. Optio, ipsam iure vero molestias nulla
              quidem a asperiores ad animi quae! Aliquam, amet vero. Maxime
              dolorum amet distinctio, tenetur culpa repellat ullam incidunt?
              Quam incidunt eaque velit nam veniam cum labore eos, voluptate
              quos officiis placeat, vero laborum accusamus, dolorem ad
              veritatis repellat. Itaque harum incidunt magni quo sit veniam
              necessitatibus dolorem, quidem ipsa ullam vitae dolores alias
              dicta numquam temporibus optio in quae officia recusandae quos
              veritatis ab possimus vero quibusdam? Suscipit possimus quidem
              debitis qui? Neque, nulla?
            </div>
          }
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default ModalPopup;
