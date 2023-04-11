import Link from "next/link";

export default function Author() {
  return (
    <div className="about-author-wrap">
      <img src="/assets/images/FintechX.png" alt="" />
      <h1 className="my-3">FintechX</h1>
      <p className="text-center">
        I am a Fellow at the adam smith institute in London, a writer here and
        there on this and that and strangely. one the global experts on the
        metal scandium, one of the rare erths. An odd thing to be but someone
        does have to be such and in this flavour of our universe I am. I have
        written fro the times , Daily Telegraph, Express, Independent I have
        also ghosted pieces for several UK politicians in many of the UK papers,
        including the Dily Sport.
      </p>
      <div className="social-link my-4">
        <Link
          href="/"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Facebook"
          className="facebook d-flex justify-content-center align-items-center rounded-circle"
          passHref
        >
          <img src="/assets/images/facebook.svg" alt="facebook" />
        </Link>
        <Link
          href="/"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Instagram"
          className="instagram d-flex justify-content-center align-items-center rounded-circle"
          passHref
        >
          <img src="/assets/images/instagram.svg" alt="instagram" />
        </Link>
        <Link
          href="/"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Youtube"
          className="youtube d-flex justify-content-center align-items-center rounded-circle"
          passHref
        >
          <img src="/assets/images/youtube.svg" alt="youtube" />
        </Link>
        <Link
          href="/"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Twitter"
          className="twitter d-flex justify-content-center align-items-center rounded-circle"
          passHref
        >
          <img src="/assets/images/twitter.svg" alt="twitter" />
        </Link>
        <Link
          href="/"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Behance"
          className="behance d-flex justify-content-center align-items-center rounded-circle"
          passHref
        >
          <img src="/assets/images/behance.svg" alt="behance" />
        </Link>
        <Link
          href="/"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Dibble"
          className="dribble d-flex justify-content-center align-items-center rounded-circle"
          passHref
        >
          <img src="/assets/images/dribble.svg" alt="dibble" />
        </Link>
        <Link
          href="/"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Email"
          className="email d-flex justify-content-center align-items-center rounded-circle"
          passHref
        >
          <img src="/assets/images/email.svg" alt="email" />
        </Link>
      </div>
    </div>
  );
}
