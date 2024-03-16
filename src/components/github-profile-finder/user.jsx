import React from "react";

const User = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;
  const createdData = new Date(created_at);
  return (
    <div>
      <div className="user">
        <div>
          <img src={avatar_url} alt="User" className="avatar" />
        </div>
        <div className="name-container">
          <a href={`https://github.com/${login}`} target="_blank">
            {name || login}
          </a>
          <p>
            User Joined on
            {` ${createdData.getDate()} ${createdData.toLocaleString("en-us", {
              month: "short",
            })} ${createdData.getFullYear()}`}
          </p>
        </div>
        <div className="profile-info">
          <div>
            <p>Public Repos</p>
            <p>{public_repos}</p>
          </div>
          <div>
            <p>Followers</p>
            <p>{followers}</p>
          </div>
          <div>
            <p>Following</p>
            <p>{following}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
