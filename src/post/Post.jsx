import "./post.css";
import postImg from "../images/haus.jpg";

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src={postImg} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <div className="postCat">Music</div>
          <div className="postCat">Life</div>
          <span className="postTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          </span>
          <hr className="line-height" />
          <div className="postDate"> 1 hour ago</div>
          <div className="postDescription">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, quas
            enim qui, nam omnis inventore iste voluptates, sit error asperiores
            eligendi voluptatum aut eius totam praesentium harum dolorem illum
            numquam nulla laboriosam blanditiis deleniti? Dolor, iusto nam qui
            autem dicta nisi molestiae dolores ipsum aspernatur optio asperiores
            mollitia minus beatae quasi sapiente! Est delectus doloremque
            laboriosam, voluptatem reiciendis architecto officiis libero
            ratione, a inventore minus, quia quos! Dolore deleniti amet est
            aspernatur, quos accusantium odit mollitia doloribus sunt tenetur
            laborum, minima nemo quibusdam, tempora ex temporibus totam!
            Quibusdam libero quis adipisci tempore magnam quia ut asperiores
            accusamus voluptatibus labore! Quas nemo asperiores atque magni
            exercitationem suscipit eum praesentium quaerat! Officiis iure
            repellat dolore voluptatum, quam, debitis mollitia aliquid
            exercitationem harum velit consequuntur. Nam optio natus a. Quasi
            earum quos, maiores odio beatae cum, atque quod tenetur dolorem
            molestias nisi repellat quia adipisci recusandae velit, porro
            exercitationem architecto excepturi. Magnam, nihil.
          </div>
        </div>
      </div>
    </div>
  );
}
