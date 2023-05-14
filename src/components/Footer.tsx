import React from "react";

type Props = {
  myName: String
};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="">
        <p>©️ Dibuat oleh {props.myName} - {year}</p>
      </footer>
    </>
  );
};

export default Footer;
