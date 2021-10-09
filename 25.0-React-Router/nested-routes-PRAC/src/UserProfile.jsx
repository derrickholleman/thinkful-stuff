import React from "react";

const UserProfile = ({ user }) => {

  return (
    <div>
      <p>User Name</p>
      <p>{user.username}</p>
      <hr />

      <p>Email</p>
      <p>{user.email}</p>
      <hr />

      <p>Phone</p>
      <p>{user.phone}</p>
      <hr />

      <p>Company</p>
      <p>{user.company.name}</p>
      <hr />

      <p>Website</p>
      <p>{user.website}</p>
      <hr />
    </div>
  );
};

export default UserProfile;
