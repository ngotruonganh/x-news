import Link from "next/link";

export default function FollowUs() {
  return (
    <>
      <img className="responsive" src="/assets/images/follow-us-1.png" alt="" />
      <img className="responsive" src="/assets/images/follow-us-2.png" alt="" />
      <img className="responsive" src="/assets/images/follow-us-3.png" alt="" />
      <img className="responsive" src="/assets/images/follow-us-4.png" alt="" />
      <img className="responsive" src="/assets/images/follow-us-5.png" alt="" />
      <Link className="follow-us" href="/" passHref>
        <img src="/assets/images/instargram.png" alt="follow us" />
        <span>Follow us</span>
      </Link>
    </>
  );
}
