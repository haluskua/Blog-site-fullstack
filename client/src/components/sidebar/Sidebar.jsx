import "./sidebar.css";
import myPic from "../../images/profile.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/api/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img className="my-pic" src={myPic} alt="profile-pic" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          necessitatibus a laborum atque ratione quasi commodi animi earu ipsam.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem" key={c._id}>
                {c.name}
              </li>
            </Link>
          ))}
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
