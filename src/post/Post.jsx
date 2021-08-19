import "./post.css";
import postImg from "../images/haus.jpg";

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src={postImg} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <div className="postCat">Music</div>
          <div className="postCat">Music</div>
          <span className="postTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            perspiciatis at dignissimos nobis ad. Architecto?
          </span>
          <hr />
          <div className="postDate"> 1 hour ago</div>
        </div>
      </div>
    </div>
  );
}
