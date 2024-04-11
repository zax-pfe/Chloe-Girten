import "../styles/PageItemFlex.css";
import React, { useState, useEffect } from "react";

function PageItemFlex({ data, updateActivePage, animation, setAnimation }) {
  const { name, cover, thumbnail } = data;
  const [mainImage, setMainImage] = useState(cover);
  const [activeThumbnail, setActiveThumbnail] = useState(0);

  function handleClick({ thumbnailImage, index }) {
    setMainImage(thumbnailImage);
    setActiveThumbnail(index);
    console.log(activeThumbnail);
  }

  function handleCloseClick() {
    setAnimation("modal-slide-down");
    setTimeout(() => updateActivePage(""), 500);
  }

  useEffect(() => {
    // Disable body scroll when the modal is shown
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div id={`page-${name}`} className={`modal ${animation}`}>
      <div className="item">
        <span className="closeBtn" onClick={() => handleCloseClick()}>
          &#10005;
        </span>
      </div>
      <div className="item">
        <div className="main-image"></div>
      </div>
      <div className="item">
        <div className="sub-item"></div>
        <div className="sub-item">
          <div className="pictures-container"></div>
          <div className="pictures-container"></div>
          <div className="pictures-container"></div>
          <div className="pictures-container"></div>
          <div className="pictures-container"></div>
        </div>
        <div className="sub-item"></div>
      </div>
    </div>
  );
}

export default PageItemFlex;
