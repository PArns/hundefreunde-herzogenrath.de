import * as React from "react";

import Seo from "../../components/tools/seo";
import MainLayout from "../../layouts/main";

const IndexPage = ({ location }) => {
  return (
    <MainLayout location={location}>
      <h1>Team</h1>
    </MainLayout>
  );
};

export default IndexPage;

export const Head = () => {
  return <Seo />;
};
