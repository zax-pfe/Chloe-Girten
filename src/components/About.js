import "../styles/About.css";
import bougeoir from "../assets/artworks/bougeoir.jpg";

import React from "react";

function About() {
  return (
    <div className="about_container" id="about">
      <div className="name">
        <img src={bougeoir} alt="bougeoir"></img>
      </div>
      <div className="description">
        <p>
          Lorem ipsum dolor sit amet. Sed necessitatibus unde et quaerat rerum
          sed minus iste eos expedita voluptas. Ea veniam esse et tempora nemo
          ut consequuntur fugiat ut nulla internos rem suscipit nihil ut rerum
          doloremque non minus vero. Ut illum dolor nam dolor asperiores et sunt
          nisi et quibusdam perspiciatis aut magni eaque! In excepturi autem sed
          galisum velit rem excepturi possimus et deserunt iusto qui nihil natus
          ad accusamus perspiciatis.
        </p>
        <p>
          Vel harum distinctio non cupiditate quae et commodi harum. Aut amet
          eveniet ea sequi expedita aut illum totam ea fugiat velit. Et ipsa
          quia non nostrum Quis aut amet aperiam. A asperiores saepe et rerum
          facere et dolore dignissimos est doloremque asperiores. Et laboriosam
          laborum qui aspernatur fuga et aliquid incidunt.
        </p>
      </div>
    </div>
  );
}

export default About;
