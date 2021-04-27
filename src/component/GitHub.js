import React, { useState, useEffect } from "react";
import axios from "axios";

const GitHub = () => {
  const [user, setUser] = useState([]);
  const url = "https://api.github.com/users/PetxCode";

  const getData = async () => {
    const res = await axios.get(url);
    setUser(res.data);
    console.log(user);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div>THis is coming from GitHub</div>
      <div
        style={{
          width: "200px",
          height: "200px",
          // objectFit: "cover",
          backgroundColor: "red",
        }}
      >
        {user && user.login.charAt(0)}
      </div>
      <div> {user && user.login} </div>
      {user.avatar_url ? (
        <img
          src={user && user.avatar_url}
          alt="avatar"
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
          }}
        />
      ) : (
        <div
          style={{
            width: "200px",
            height: "200px",
            // objectFit: "cover",
            backgroundColor: "red",
          }}
        >
          {user && user.login.charAt(0)}
        </div>
      )}
    </div>
  );
};

export default GitHub;
