import React, { useState, useEffect } from "react";
import "../styles/PageItem.css";
import chevronDroit from "../assets/icons/chevron-droit.png";
import chevronGauche from "../assets/icons/chevron-gauche.png";

function PageItem({
  data,
  updateActivePage,
  animation,
  setAnimation,
  index_max,
  activePage,
}) {
  const { name, cover, thumbnail, materiaux, dimensions, date } = data;

  const [pageAnimation, setpageAnimation] = useState("");

  const [mainImage, setMainImage] = useState(cover);
  const [activeThumbnail, setActiveThumbnail] = useState(0);
  function handleClick({ thumbnailImage, index }) {
    setMainImage(thumbnailImage);
    setActiveThumbnail(index);
    // console.log(activeThumbnail);
  }

  function handleCloseClick() {
    setAnimation("modal-slide-down");
    setTimeout(() => updateActivePage(""), 500);
  }

  function handleNextClick() {
    setpageAnimation("fade-out");
    setTimeout(() => updateActivePage(activePage + 1), 200);
    setTimeout(() => setpageAnimation("slide-in"), 200);
    setTimeout(() => setpageAnimation(""), 700);
  }
  function handlePrevClick() {
    setpageAnimation("fade-out");
    setTimeout(() => updateActivePage(activePage - 1), 200);
    setTimeout(() => setpageAnimation("slide-out"), 200);
    setTimeout(() => setpageAnimation(""), 700);
  }

  useEffect(() => {
    // console.log(activeThumbnail);
  }, [activeThumbnail]);

  useEffect(() => {
    setMainImage(cover);
  }, [activePage, cover]);

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    // Disable body scroll when the modal is shown
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    // Re-enable body scroll when the modal is hidden
    return () => {
      document.body.style.overflow = "visible";
      document.body.style.paddingRight = "";
    };
  }, []);

  return (
    <div id={`page-${name}`} className={`modal ${animation}`}>
      <div className={`page-content ${pageAnimation}`}>
        <div className="close-container">
          <span className="closeBtn" onClick={() => handleCloseClick()}>
            &#10005;
          </span>
        </div>
        <div className="main-container">
          {activePage !== 0 ? (
            <img
              src={chevronGauche}
              alt="chevron gauche"
              className="arrow left"
              onClick={handlePrevClick}
            />
          ) : (
            <div className="placeholder-left" />
          )}
          <div className="main-image">
            <img src={mainImage} alt="main" id="main-img-page1" />
          </div>
          {activePage !== index_max ? (
            <img
              src={chevronDroit}
              alt="chevron droit"
              className="arrow right"
              onClick={() => handleNextClick()}
            />
          ) : (
            <div className="placeholder-left" />
          )}
        </div>
        <div className="bottom-container">
          <div className="description-container">
            <p>{name}</p>
            <p>{materiaux}</p>
            <p>{date}</p>
            <p>{dimensions}</p>
          </div>
          <div className="thumbnail-container">
            {thumbnail.map((thumbnailImage, index) =>
              index === activeThumbnail ? (
                <img
                  key={index}
                  src={thumbnailImage}
                  alt={`thumbnailImage-${index}`}
                  onClick={() => handleClick({ thumbnailImage, index })}
                  className="thumbnail active"
                />
              ) : (
                <img
                  key={index}
                  src={thumbnailImage}
                  alt={`thumbnailImage-${index}`}
                  onClick={() => handleClick({ thumbnailImage, index })}
                  className="thumbnail"
                />
              )
            )}
          </div>
          <div className="dummy"></div>
        </div>
      </div>
    </div>
  );
}

export default PageItem;
