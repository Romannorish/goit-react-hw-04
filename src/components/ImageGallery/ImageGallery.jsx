import ImageCard from "./ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({images, onToggle}) {
  return (
    <div className={css.gallery}>
      <ul className={css.galleryBox}>
        {images.map((image) => {
          return (
            <li key={image.id}>
              <ImageCard image={image} onToggle={onToggle} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
