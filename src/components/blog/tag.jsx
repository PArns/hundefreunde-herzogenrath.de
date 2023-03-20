import * as React from "react";
import { Link } from "gatsby";

const Tag = ({ tag, uri, useAppLink=false, ...other }) => {
  const stringToColor = function (str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = "#";
    for (var x = 0; x < 3; x++) {
      var value = (hash >> (x * 8)) & 0xff;
      colour += ("00" + value.toString(16)).substr(-2);
    }
    return colour;
  };

  return (
    <Link
      to={uri ? uri : `/blog/tags/${tag}#main`}
      title={`Alle Blog-Artikel mit dem Schlagwort "${tag}"`}
      className="font-semi-bold my-1 mr-1 inline-block rounded-full px-2 py-1 text-xs text-white opacity-90 duration-300 hover:opacity-100"
      style={{ background: stringToColor(tag) }}
      {...other}
    >
      #{tag}
    </Link>
  );
};

export default Tag;
