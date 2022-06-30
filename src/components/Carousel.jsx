import React from "react";
import { useRef } from "react";

import Carousel from "react-elastic-carousel";

export default function CarouselComponent() {
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
  ];

  const carouselRef = useRef(null);

  const onNextStart = (currentItem) => {
    setTimeout(() => {}, 1500);
    if (currentItem.index === 10) {
      carouselRef.current.goTo(0);
    }
  };

  return (
    <Carousel
      ref={carouselRef}
      breakPoints={breakPoints}
      enableAutoPlay
      autoPlaySpeed={1500}
      onChange={onNextStart}
    >
      <div className="item">
        <h4>1</h4>
      </div>
      <div className="item">
        <h4>2</h4>
      </div>
      <div className="item">
        <h4>3</h4>
      </div>
      <div className="item">
        <h4>4</h4>
      </div>
      <div className="item">
        <h4>5</h4>
      </div>
      <div className="item">
        <h4>6</h4>
      </div>
      <div className="item">
        <h4>7</h4>
      </div>
      <div className="item">
        <h4>8</h4>
      </div>
      <div className="item">
        <h4>9</h4>
      </div>
      <div className="item">
        <h4>10</h4>
      </div>
      <div className="item">
        <h4>11</h4>
      </div>
      <div className="item">
        <h4>12</h4>
      </div>
    </Carousel>
  );
}
