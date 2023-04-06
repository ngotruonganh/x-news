export default function AboutUs() {
  return (
    <>
      <img src="/assets/images/logo-white.svg" alt="main logo" />
      <p className="text-white my-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque,
        pellentesque dictum posuere id diam rutrum.
      </p>
      <div className="social d-flex justify-content-center justify-content-lg-around">
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
    </>
  );
}
