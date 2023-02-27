import * as React from "react";

import Seo from "../components/tools/seo";
import MainLayout from "../layouts/main";

const IndexPage = () => {
  return <MainLayout>Hello World!</MainLayout>;
};

export default IndexPage;

export const Head = () => {
  return <Seo />;
};
