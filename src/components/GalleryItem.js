import React from "react";
import "../styles/GalleryItem.css";

function GalleryItem({
  image,
  id,
  name,
  index,
  updateActivePage,
  setAnimation,
}) {
  function handleClick() {
    // console.log({ id });
    updateActivePage(index);
    setAnimation("modal-slide-up");
  }
  return (
    <div className="grid-item">
      <img
        className="grid-item-image"
        src={image}
        alt={`${name} cover`}
        onClick={() => handleClick(index)}
      />
      <p className="artname">{name}</p>
    </div>
  );
}

export default GalleryItem;
