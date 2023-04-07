import Link from "next/link";
import { getHome } from "../api/home";

export async function getServerSideProps(context) {
  // Fetch data from external API
  let menuCate = await getHome()

  // Pass data to the page via props
  return { props: { menuCate: menuCate } }
}

function Author({menuCate}) {
  console.log(menuCate);
  return (
    <div className="w-50 d-flex flex-column align-items-center m-auto my-3">
      <img className="w-25" src="/assets/images/FintechX.png" alt=""/>
      <h1 className="my-3">FintechX</h1>
      <p className="text-center">
         a Fellow at the adam smith institute in London, a writer here and
        there on this and that and strangely. one the global experts on the
        metal scandium, one of the rare erths. An odd thing to be but someone
        does have to be such and in this flavour of our universe I am. I have
        written fro the times , Daily Telegraph, Express, Independent e also
        ghosted pieces for several UK politicians in many of the UK papers,
        including the Dily Sport.
      </p>
      <div className="social my-4">
        <Link 
          href="/"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Facebook"
          className="facebook d-flex justify-content-center align-items-center rounded-circle"
          passHref
        >
          <img src="/assets/images/facebook.svg" alt=""/>
        </Link>
        <Link 
          href="/"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Instagram"
          className="instagram d-flex justify-content-center align-items-center rounded-circle"
          passHref
        >
          <img src="/assets/images/instagram.svg" alt=""/>
        </Link>
        <Link 
          href="/"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Youtube"
          className="youtube d-flex justify-content-center align-items-center rounded-circle"
          passHref
        >
          <img src="/assets/images/youtube.svg" alt=""/>
        </Link>
        <Link 
          href="/"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Twitter"
          className="twitter d-flex justify-content-center align-items-center rounded-circle"
          passHref
        >
          <img src="/assets/images/twitter.svg" alt=""/>
        </Link>
        <Link 
          href="/"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Behance"
          className="behance d-flex justify-content-center align-items-center rounded-circle"
          passHref
        >
          <img src="/assets/images/behance.svg" alt=""/>
        </Link>
        <Link 
          href="/"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Dibble"
          className="dribble d-flex justify-content-center align-items-center rounded-circle"
          passHref
        >
          <img src="/assets/images/dribble.svg" alt=""/>
        </Link>
        <Link 
          href="/"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Email"
          className="email d-flex justify-content-center align-items-center rounded-circle"
          passHref
        >
          <img src="/assets/images/email.svg" alt=""/>
        </Link>
      </div>
    </div>
  );
}

export default Author;
