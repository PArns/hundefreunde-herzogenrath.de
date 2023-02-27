import * as React from "react";

import Seo from "../components/tools/seo";
import MainLayout from "../layouts/main";

const IndexPage = () => {
  return <MainLayout><h1>Hello World!</h1></MainLayout>;
};

export default IndexPage;

export const Head = () => {
  return <Seo />;
};
