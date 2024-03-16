import css from "./imageCard.module.css";

export default function ImageCard({image: {urls}}, onToggle) {
  const imageInfo = {
    modal: urls.regular,
  };
  return (
    <div>
      <img className={css.img} src={urls.small} alt="" onClick={() => onToggle(imageInfo)} />
    </div>
  );
}
