function PostItem(image, type, author, date, title, desc) {
  return (
    <>
      <div className="position-relative">
        <img className="w-100" src={image} alt=""/>
        <span className="position-absolute top-0 start-0">{type}</span>
      </div>
      <div>
        <span>{author}</span>
        <span> - </span>
        <span>{date}</span>
      </div>
      <h6>{title}</h6>
      <p>{desc}</p>
    </>
  );
}

export default PostItem;
