import "./App.css";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import React from "react";
import CarouselComponent from "./components/Carousel";
import ItemsList from "./components/ItemsList";
import Item from "./components/Item";

function App() {
  return (
    <>
      <Navbar />
      <div className="parent">
        <div className="row">
          <div className="col">
            <Sidebar />
          </div>
          {/* <div className="col-11 mt-5">
            <CarouselComponent />
          </div> */}
          <div className="col-11 mt-2 pl-5 pr-5">
            <Item />
          </div>
        </div>
        {/* <div className="row">
          <div className="col"></div>
          <div className="col-11">
            <ItemsList />
          </div>
        </div> */}
      </div>
    </>
  );
}

export default App;
