import AboutUs from "./about_us";
import PhotoGallery from "./photo_gallery";
import Tags from "./tags";
import Contact from "./contact";
import FollowUs from "./follow_us";

export default function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-12 d-flex position-relative">
          <FollowUs />
        </div>
      </div>
      <div className="layout py-5">
        <div className="row">
          <div className="col-12 col-lg-3 d-flex flex-column justify-content-between mt-3 mt-lg-0 px-3 px-xl-5">
            <AboutUs />
          </div>
          <div className="col-12 col-lg-3 mt-3 mt-lg-0">
            <PhotoGallery />
          </div>
          <div className="col-12 col-lg-3 mt-3 mt-lg-0">
            <Tags />
          </div>
          <div className="col-12 col-lg-3 mt-3 mt-lg-0">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
