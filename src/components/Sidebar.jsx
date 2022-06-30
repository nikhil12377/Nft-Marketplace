import React from "react";
import "../styles/Sidebar.css";

export const Sidebar = () => {
  return (
    <section className="sidebar">
      <a className="active" href="#home">
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </section>
  );
};
