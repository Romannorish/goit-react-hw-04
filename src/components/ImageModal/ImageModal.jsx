import ReactModal from "react-modal";
import css from "./ImageModal.module.css";
ReactModal.setAppElement("#root");

export default function ImageModal({modalState, modalOnClose, modal}) {
  const description = "Modal";
  return (
    <ReactModal
      isOpen={modalState}
      onRequestClose={modalOnClose}
      className={css.Modal}
      overlayClassName={css.Overlay}
    >
      <div className={css.imgContainer}>
        <img className={css.imgModal} src={modal} alt={description} />
      </div>
    </ReactModal>
  );
}
