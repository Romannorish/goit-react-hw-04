import ImageCard from "./ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({images}) {
  return (
    <div className={css.gallery}>
      <ul className={css.galleryBox}>
        {images.map((image) => {
          return (
            <li key={image.id}>
              <ImageCard image={image} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
