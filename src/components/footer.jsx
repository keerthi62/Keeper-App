import React from "react";


function Footer() {
  const year = new Date().getFullYear();
  return <footer><p>Copywrite &#xa9; {year}</p></footer>;
}

export default Footer;
