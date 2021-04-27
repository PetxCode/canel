import { Header } from "antd/lib/layout/layout";
import React from "react";
import { Link } from "react-router-dom";

const ProjectHeader = () => {
  return (
    <Header
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <div
        style={{
          color: "white",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
          }}
        >
          {" "}
          Home
        </Link>
      </div>
      <div
        style={{
          color: "white",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        <Link
          to="/about"
          style={{
            color: "white",
          }}
        >
          About{" "}
        </Link>
      </div>
      <div
        style={{
          color: "white",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        <Link
          to="/feed"
          style={{
            color: "white",
          }}
        >
          Feed{" "}
        </Link>
      </div>
    </Header>
  );
};

export default ProjectHeader;
