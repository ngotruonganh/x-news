import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-2 col-xs-12 d-flex position-relative">
          <img src="/assets/images/follow-us-5.png" alt="" />
          <img src="/assets/images/follow-us-4.png" alt="" />
          <img src="/assets/images/follow-us-3.png" alt="" />
          <img src="/assets/images/follow-us-2.png" alt="" />
          <img src="/assets/images/follow-us-1.png" alt="" />
          <a className="follow-us" href="#">
            <img src="/assets/images/instargram.png" alt="follow us" />
            <span>Follow us</span>
          </a>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-3 d-flex flex-column justify-content-between mt-3 mt-md-0">
            <img src="/assets/images/logo-white.svg" alt="main logo" />
            <p className="text-white my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque,
              pellentesque dictum posuere id diam rutrum.
            </p>
            <div className="social d-flex justify-content-around">
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Facebook"
                className="bg-primary d-flex justify-content-center align-items-center rounded-circle"
              >
                <img src="/assets/images/facebook.svg" />
              </a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Twitter"
                className="bg-info d-flex justify-content-center align-items-center rounded-circle"
              >
                <img src="/assets/images/twitter.svg" />
              </a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Instagram"
                className="bg-instagram d-flex justify-content-center align-items-center rounded-circle"
              >
                <img src="/assets/images/instagram.svg" />
              </a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Youtube"
                className="bg-danger d-flex justify-content-center align-items-center rounded-circle"
              >
                <img src="/assets/images/youtube.svg" />
              </a>
            </div>
          </div>
          <div className="col-12 col-md-3 mt-3 mt-md-0">
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
          </div>
          <div className="col-12 col-md-3 mt-3 mt-md-0">
            <h2 className="text-white">Tags</h2>
            <div className="line"></div>
            <div className="tags">
              <button className="px-2 bg-warning border border-0 rounded text-white">
                Tag one
              </button>
              <button className="px-2 bg-warning border border-0 rounded text-white">
                Trend
              </button>
              <button className="px-2 bg-warning border border-0 rounded text-white">
                Top coin
              </button>
              <button className="px-2 bg-warning border border-0 rounded text-white">
                Top grain
              </button>
              <button className="px-2 bg-warning border border-0 rounded text-white">
                Fintech
              </button>
              <button className="px-2 bg-warning border border-0 rounded text-white">
                Bitcoin
              </button>
            </div>
          </div>
          <div className="col-12 col-md-3 mt-3 mt-md-0">
            <h2 className="text-white">Stay In Touch</h2>
            <div className="line"></div>
            <p className="text-white">
              To be updated with all the latest news, offers and special
              annoucements.
            </p>
            <form className="d-flex flex-column">
              <input
                placeholder="Your email address"
                className="text-dark text-center py-2"
              />
              <button className="button mt-2 border border-0 py-2 font-weight-bold">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
