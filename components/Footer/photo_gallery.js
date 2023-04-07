export default function PhotoGallery() {
  return (
    <>
      <h2 className="text-white">Photo Gallery</h2>
      <div className="line"></div>
      <div className="gallery">
        <img
          className="gallery-item"
          src="/assets/images/photo-gallery-1.png"
          alt="photo-gallery-1"
        />
        <img
          className="gallery-item"
          src="/assets/images/photo-gallery-2.png"
          alt="photo-gallery-2"
        />
        <img
          className="gallery-item"
          src="/assets/images/photo-gallery-3.png"
          alt="photo-gallery-3"
        />
        <img
          className="gallery-item"
          src="/assets/images/photo-gallery-4.png"
          alt="photo-gallery-4"
        />
        <img
          className="gallery-item"
          src="/assets/images/photo-gallery-5.png"
          alt="photo-gallery-5"
        />
        <img
          className="gallery-item"
          src="/assets/images/photo-gallery-6.png"
          alt="photo-gallery-6"
        />
      </div>
    </>
  );
}
