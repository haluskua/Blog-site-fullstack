import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import proPic from "../../images/crest_trans_brown.png";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrwapper">
        <div className="settingTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeletTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={proPic} alt="profile" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fas fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <label type="text" placeholder="Ompha" />
          <label>Email</label>
          <label type="text" placeholder="okdezines@gmail.com" />
          <label>Password</label>
          <label type="text" placeholder="password" />
          <button className="settingsSubmit"> Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
