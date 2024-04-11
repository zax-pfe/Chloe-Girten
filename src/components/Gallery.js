import React, { useState, useEffect } from "react";
import { artlist } from "../datas/artlist";
import GalleryItem from "./GalleryItem";
import PageItem from "./PageItem";
import PageItemPhone from "./PageItemPhone";
// import PageItemFlex from "./PageItemFlex";
import "../styles/Gallery.css";

function Gallery({ activePage, updateActivePage }) {
  const [animation, setAnimation] = useState("modal-slide-up");
  const [device, setDevice] = useState("");
  const threshold = 768;

  useEffect(() => {
    const handleResize = () => {
      const newDevice = window.innerWidth <= threshold ? "phone" : "desktop";
      setDevice(newDevice);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    console.log(`active page ID: ${activePage}`);
    // <PageItem data={artlist[activePage]} />;
  }, [activePage]);

  return activePage !== "" ? (
    <div>
      <div className="grid-container" id="gallery">
        {artlist.map(({ name, id, cover }, index) => (
          <div key={name}>
            <GalleryItem
              image={cover}
              id={id}
              name={name}
              index={index}
              updateActivePage={updateActivePage}
              setAnimation={setAnimation}
            />
          </div>
        ))}
      </div>
      {device === "desktop" ? (
        <PageItem
          data={artlist[activePage]}
          updateActivePage={updateActivePage}
          animation={animation}
          setAnimation={setAnimation}
          index_max={artlist.length - 1}
          activePage={activePage}
        />
      ) : (
        <PageItemPhone
          data={artlist[activePage]}
          updateActivePage={updateActivePage}
          animation={animation}
          setAnimation={setAnimation}
          index_max={artlist.length - 1}
          activePage={activePage}
        />
      )}
    </div>
  ) : (
    <div className="grid-container" id="gallery">
      {artlist.map(({ name, id, cover }, index) => (
        <div key={name}>
          <GalleryItem
            image={cover}
            id={id}
            name={name}
            index={index}
            updateActivePage={updateActivePage}
            setAnimation={setAnimation}
          />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
