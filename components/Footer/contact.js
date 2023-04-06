export default function Contact() {
  return (
    <>
      <h2 className="text-white">Stay In Touch</h2>
      <div className="line"></div>
      <p className="text-white">
        To be updated with all the latest news, offers and special annoucements.
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
    </>
  );
}
