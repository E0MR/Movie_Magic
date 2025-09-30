import "./Profile.css";

import { useSelector } from "react-redux";

import logo from "../../assets/images/logo_.png";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="container profile-container">
      <h2>Profile</h2>

      <img src={logo} alt="logo" />
      <div className="profileBox">
        <p>
          <b>Name:</b> {user.name}
        </p>
        <p>
          <b>Username:</b> {user.username}
        </p>
        <p>
          <b>Email:</b> {user.email}
        </p>
        <p>
          <b>Birth Date:</b> {user.birthDate}
        </p>
      </div>
    </div>
  );
};

export default Profile;
