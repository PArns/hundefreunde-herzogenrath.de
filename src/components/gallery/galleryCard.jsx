import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const GalleryCard = ({ gallery, onClick, selected, ...other }) => {
  return (
    <div
      className="cursor-pointer gap-4 border-x bg-white/30 transition first:rounded-t-lg first:border-t last:rounded-b-lg last:border-b hover:bg-white/50 data-[selected=true]:bg-white [&_img]:first:rounded-tl-lg [&_img]:last:rounded-bl-lg"
      onClick={onClick}
      data-selected={selected ? true : false}
      title={gallery.description.description}
      {...other}
    >
      <div className="flex max-h-20">
        <div>
          <GatsbyImage
            image={getImage(gallery.teaserImage)}
            alt={gallery.name}
            className="h-20 w-20"
          />
        </div>
        <div className="pl-2 pt-2">
          <p className="text-ellipsis text-3xl font-semibold pb-1">{gallery.name}</p>
          {gallery.date}
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
