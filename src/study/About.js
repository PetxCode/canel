import React from "react";
import CardProps from "./AboutComp/CardProps";
import img1 from "../asset/js.png";
import img2 from "../asset/electron.png";
import img3 from "../asset/dart.png";
// import img4 from "../tf.png";
import img4 from "../asset/tf.png";

const About = () => {
  return (
    <div>
      <div>This is The about Page</div>
      <div
        style={{
          display: "flex",
          // flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          // alignItems: "center",
          fontFamily: "Krona One",
          // alignContent:
        }}
      >
        <CardProps text="JaveScript" numb="11" img={img1} />
        <CardProps text="Electron" numb="5" img={img2} />
        <CardProps text="Dart" numb="9" img={img3} />
        <CardProps text="tensorFlow" numb="7" img={img4} />
      </div>
    </div>
  );
};

export default About;
