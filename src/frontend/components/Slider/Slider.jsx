import "./Slider.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  "/images/slider/image-1.jpg",
  "/images/slider/image-4.png",
];

function Slider() {
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSelectedImage((selectedImage) =>
        selectedImage < 1 ? selectedImage + 1 : 0
      );
    }, 3000);
  }, []);

  return (
    <div className="slider-container">
      <Link to="/products">
        <img src={slides[selectedImage]} alt={`banner${selectedImage + 1}`} />
      </Link>
    </div>
  );
}

export default Slider;
