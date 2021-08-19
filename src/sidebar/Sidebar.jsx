import "./sidebar.css";
import myPic from "../images/profile.jpg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img className="my-pic" src={myPic} alt="profile-pic" />
        <p className="sidbarPgh">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          necessitatibus a laborum atque ratione quasi commodi animi earu ipsam.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow US</span>
        <div className="sidebarSocial">
          <i className=" sidebarIcon fab fa-pinterest-p"></i>
          <i className=" sidebarIcon fab fa-facebook-f"></i>
          <i className=" sidebarIcon fab fa-twitter"></i>
          <i className=" sidebarIcon fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}
