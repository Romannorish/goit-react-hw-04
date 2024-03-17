import ReactModal from "react-modal";
import css from "./ImageModal.module.css";
ReactModal.setAppElement("#root");

export default function ImageModal({modalState, modalOnClose, modal, description, likes}) {
  return (
    <ReactModal
      isOpen={modalState}
      onRequestClose={modalOnClose}
      className={css.Modal}
      overlayClassName={css.Overlay}
    >
      <div className={css.imgContainer}>
        <img className={css.imgModal} src={modal} alt={description} />
        <div className={css.box}>
          <p>
            <span className={css.descrColor}>Description:</span> {description}
          </p>
          <p>
            <span className={css.descrColor}>Likes:</span> {likes}
          </p>
        </div>
      </div>
    </ReactModal>
  );
}
