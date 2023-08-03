import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const GalleryCard = ({ gallery, onClick, selected, ...other }) => {
  return (
    <Link
      to={`${gallery.slug}#main`}
      title={gallery.description.description}
      {...other}
    >
      <div className="relative flex flex-col">
        <div>
          <GatsbyImage
            image={getImage(gallery.teaserImage)}
            alt={gallery.name}
            className="rounded-lg border-2 border-gray-400 drop-shadow-lg"
          />
        </div>
        <div className="absolute bottom-2 left-2 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <p className="text-ellipsis pb-1 text-3xl font-semibold">
            {gallery.name}
          </p>
          {gallery.date}
        </div>
      </div>
    </Link>
  );
};

export default GalleryCard;
