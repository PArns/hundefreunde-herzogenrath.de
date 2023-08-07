import * as React from "react";

import { useState } from "react";
import { getSrc } from "gatsby-plugin-image";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const LightBox = ({ children, image, alt, ...other }) => {
  const [open, setOpen] = useState(false);

  console.log(image);
  console.log(getSrc(image));

  return (
    <>
      <a
        href="#"
        onClick={(e) => {
          setOpen(true);
          e.preventDefault();
        }}
      >
        {children}
      </a>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            src: getSrc(image)
          },
        ]}
      />
    </>
  );
};

export default LightBox;
