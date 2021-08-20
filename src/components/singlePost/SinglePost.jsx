import "./singlePost.css";
import spImg from "../../images/meri.jpg";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={spImg} alt="" />

        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur
          <div className="singlePostEdit">
            <i className="singlePostIcon fas fa-edit"></i>
            <i className="singlePostIcon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Ompa</b>
          </span>
          <span className="singlePostDate">Author: 1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          ea asperiores facere repellat iste quisquam ut corrupti et debitis,
          nihil quaerat fuga officiis ex magni voluptatum sint aut. Magni,
          obcaecati. Similique doloremque a pariatur expedita, illo debitis
          porro placeat impedit commodi sit harum rem dolorum deleniti
          consectetur hic odio animi nisi ex optio. Quod, voluptates. Eius
          expedita quae laborum corporis rem vitae molestiae porro. Eaque saepe
          natus earum repudiandae amet voluptatibus totam voluptate unde in,
          tempore illum. Nesciunt perspiciatis saepe quia rerum voluptatibus
          nulla expedita earum deleniti assumenda.
        </p>
      </div>
    </div>
  );
}
