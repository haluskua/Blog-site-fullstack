import { Link } from "react-router-dom";
// import postImg from "../../images/haus.jpg";
import "./post.css";

export default function Post({ post }) {
  return (
    <div className="post">
      <img className="postImg" src={post.photo} alt="" />
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => {
            <pan className="postCat">{c.name}</pan>;
          })}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr className="line-height" />
        <div className="postDate">
          {" "}
          {new Date(post.createdAt).toDateString()}
        </div>
        <div className="postDescription">{post.desc}</div>
      </div>
    </div>
  );
}
