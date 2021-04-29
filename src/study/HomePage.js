import React, { useState } from "react";
import Sider from "./Menu/Menu";
import Menu2 from "./Menu/Menu2";
import ProjectHeader from "./ProjectHeader";

const HomePage = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <Sider />
      <div>This is my Home page</div>
      <div
        style={{
          display: "flex",
          width: "300px",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            cursor: "pointer",
          }}
          onClick={(e) => {
            handleClick();
            console.log(toggle);
          }}
        >
          home
        </div>
        <div>about</div>
        <div>Ad</div>
      </div>
      {toggle ? <Menu2 /> : null}
    </div>
  );
};

export default HomePage;
