import "./write.css";
import writeImg from "../../images/profile.jpg";

export default function Write() {
  return (
    <div className="write">
      <img className="writeImg" src={writeImg} alt="" />
      <form action="" className="write">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            name=""
            id=""
            cols="30"
            rows="10"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
