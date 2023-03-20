import * as React from "react";

import { renderToString } from "react-dom/server";
import truncate from "truncate-html";

const Excerpt = ({ children, length, ...other }) => {
  const Setup = () => {
    const wordLength = length ? length : 60;

    truncate.setup({ byWords: true, length: wordLength });
  };

  Setup();
  const childrenHtml = truncate(renderToString(children));

  return <div dangerouslySetInnerHTML={{ __html: childrenHtml }} {...other} />;
};

export default Excerpt;
