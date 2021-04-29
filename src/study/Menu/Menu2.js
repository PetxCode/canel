import React from "react";
import { RightCircleOutlined } from "@ant-design/icons";

const Menu2 = () => {
  return (
    <div>
      <div
        style={{
          width: "500px",
          backgroundColor: "lightblue",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div>
          <div>
            Option1
            <RightCircleOutlined />
          </div>
          <div>Option1</div>
          <div>Option1</div>
          <div>Option1</div>
        </div>
        <div>
          <div>Option2</div>
          <div>Option2</div>
          <div>Option2</div>
          <div>Option2</div>
        </div>
      </div>
    </div>
  );
};

export default Menu2;
