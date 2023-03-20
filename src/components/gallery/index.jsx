import * as React from "react";

import LightBox from "../lightbox";
import { GatsbyImage } from "gatsby-plugin-image";

const Gallery = ({ gallery }) => {
  return (
    <div className="columns-3 gap-2">
      {gallery && gallery.images &&
        gallery.images.map((imageData) => (
            <LightBox key={imageData.id} images={imageData}>
              <GatsbyImage
                image={imageData.previewImage}
                alt={imageData.title}
                title={imageData.description}
                imgClassName="rounded-lg"
                className="rounded-lg border drop-shadow-lg mb-2"
              />
            </LightBox>
        ))}
    </div>
  );
};

export default Gallery;
