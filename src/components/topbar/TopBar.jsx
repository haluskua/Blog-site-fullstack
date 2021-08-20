import "./topbar.css";
import Profile from "../../images/crest_trans_brown.png";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className=" topIcon fab fa-pinterest-p"></i>
        <i className=" topIcon fab fa-facebook-f"></i>
        <i className=" topIcon fab fa-twitter"></i>
        <i className=" topIcon fab fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        {/* <img src="" alt="" /> */}
        <img className="topImg" src={Profile} alt="Logo" />

        <i className=" topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
