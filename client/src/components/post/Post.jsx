import "./post.css";
// import postImg from "../../images/haus.jpg";

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
        <span className="postTitle">{post.title}</span>
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
