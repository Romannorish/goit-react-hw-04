import css from "./imageCard.module.css";

export default function ImageCard({image: {urls, likes, description}, onToggle}) {
  const imageInfo = {
    modal: urls.regular,
    likes,
    description,
  };
  return (
    <div
      className={css.imageContainer}
      onClick={() => {
        onToggle(imageInfo);
      }}
    >
      <img width={350} src={urls.small} alt="photo" />
    </div>
  );
}
