import PostItem from "./PostItem";
import data from "../../mocks/resData/dataPostByAuthor.json";

function PostsList() {
  return (
    <div className="row">
      <div className="col-12 col-md-4">
        {data.map((item) => {
          return (
            <PostItem
              key={item.id}
              image={item.image}
              type={item.type}
              author={item.author}
              date={item.date}
              title={item.title}
              decs={item.desc}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PostsList;
