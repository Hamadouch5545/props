import PropTypes from 'prop-types';
import React from "react";

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  return (
    <div>
      <h1>{fullName}</h1>
      <h2>{bio}</h2>
      <h2>{profession}</h2>
      {children}
      <button onClick={() => handleName()}>clic ici</button>
    </div>
  );
  
};
Profile.defaultProps = {
  fullname: "defult",
  bio: "defult",
  profession: "defult",
  children: "defult",
  handleName: "defult",
}
Profile.PropTypes = {
  fullName:PropTypes.string,
  bio:PropTypes.string,
  profession:PropTypes.string,
  children:PropTypes.string,
  handleName:PropTypes.func,
}

export default Profile;