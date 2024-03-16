import {useEffect, useState} from "react";
import SearchBar from "./SearchBar/SearchBar";
import {fetchPhoto} from "../Servises/api";
import ImageGallery from "./ImageGallery/ImageGallery";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import {useToggle} from "./myHooks/useToggle";
import ImageModal from "./ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [searchPhoto, setSearchPhoto] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadMoreBtn, setLoadMoreBtn] = useState(false);
  const [info, setInfo] = useState({});

  const [currentPage, setCurrentPage] = useState(1);
  const per_page = 12;

  useEffect(() => {
    async function FetchData() {
      try {
        setError(false);
        setLoading(true);
        setLoadMoreBtn(false);
        const res = await fetchPhoto(currentPage, per_page, searchPhoto);
        if (res.total === 0) {
          setImages([]);
          setError(true);
        } else {
          setImages((prevImages) => [...prevImages, ...res.results]);
          if (currentPage < res.total_pages) {
            setLoadMoreBtn(true);
          } else {
            setLoadMoreBtn(false);
          }
        }
      } catch (err) {
        setError(err.messese);
      } finally {
        setLoading(false);
      }
    }
    if (searchPhoto !== "") FetchData();
  }, [currentPage, searchPhoto]);

  const hundleSeach = (photo) => {
    if (photo !== "" && photo !== searchPhoto) {
      setSearchPhoto(photo);
      setCurrentPage(1);
      setImages([]);
    }
  };
  const hundlePagination = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const {isOpen, open, close} = useToggle();
  const handleToggle = (image) => {
    setInfo(image);
    open();
  };
  return (
    <>
      <SearchBar onSeach={hundleSeach} />
      <ErrorMessage messege={error} />
      {loading && <Loader />}
      {images.length > 0 && <ImageGallery images={images} onToggle={handleToggle} />}
      {loadMoreBtn && <LoadMoreBtn onLoadMore={hundlePagination} />}
      <ImageModal modalState={isOpen} modalOnClose={close} {...info} />
    </>
  );
}

export default App;
