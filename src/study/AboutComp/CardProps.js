import React from "react";
import img from "../../asset/js.png";

const CardProps = ({ text, numb, img }) => {
  return (
    <div
      style={{
        width: "350px",
        height: "120px",
        backgroundColor: "#222222",
        borderRadius: "10px",
        marginLeft: "20px",
        marginTop: "20px",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
      }}
    >
      <div>
        <div style={{ color: "pink" }}>path</div>
        <div style={{ color: "white" }}>{text}</div>
        <div
          style={{
            color: "white",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              marginRight: "5px",
              fontWeight: "bold",
            }}
          >
            {numb}
          </div>
          <div>Courses</div>
        </div>
        <div
          style={{
            color: "white",
            fontWeight: "bold",
            marginTop: "20px",
          }}
        >
          Take a look
        </div>
      </div>
      <div>
        <img
          src={img}
          alt="icon"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default CardProps;
