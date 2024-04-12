import React, { useState, useEffect } from "react";
import "../styles/PageItemPhone.css";
import chevronDroit from "../assets/icons/chevron-droit.png";
import chevronGauche from "../assets/icons/chevron-gauche.png";

function PageItemPhone({
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
  function handleClick({ index }) {
    setMainImage(thumbnail[index]);
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
    // reset the active thumbnail and the main image
    setMainImage(thumbnail[0]);
    setActiveThumbnail(0);
  }, [activePage]);

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
    <div id={`page-${name}`} className={`modal-phone ${animation}`}>
      <div className={`page-content-phone ${pageAnimation}`}>
        <div className="button-container">
          {activePage !== 0 ? (
            <img
              src={chevronGauche}
              alt="chevron gauche"
              className="arrow left"
              onClick={() => handlePrevClick()}
            />
          ) : (
            <div className="placeholder-left" />
          )}
          <div className="placeholder"></div>

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
          <div className="placeholder"></div>
          <span className="closeBtn-phone" onClick={() => handleCloseClick()}>
            &#10005;
          </span>
        </div>
        <div className="main-container-phone">
          <img src={mainImage} alt="main" id="main-img-page1" />
        </div>
        <div className="thumbnail-container-phone">
          {thumbnail.map((item, index) =>
            index === activeThumbnail ? (
              <span
                key={index}
                alt={`thumbnailImage-${index}`}
                className="dot active"
                onClick={() => handleClick({ index })}
              ></span>
            ) : (
              <span
                key={index}
                alt={`thumbnailImage-${index}`}
                className="dot"
                onClick={() => handleClick({ index })}
              ></span>
            )
          )}
        </div>
        <div className="description-container-phone">
          <p>{name}</p>
          <p>{materiaux}</p>
          <p>{date}</p>
          <p>{dimensions}</p>
        </div>
      </div>
    </div>
  );
}

export default PageItemPhone;
