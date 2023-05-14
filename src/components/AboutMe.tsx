import React from "react";

type Props = {
  AboutMe : String
};

const AboutMe = (props: Props) => {
  return (
    <div className="">
      <div className="">{props.AboutMe}</div>
    </div>
  );
};

export default AboutMe;
