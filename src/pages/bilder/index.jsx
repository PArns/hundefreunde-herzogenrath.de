import * as React from "react";

import Seo from "../../components/tools/seo";
import MainLayout from "../../layouts/main";

import TatzenHeader from "../../components/tools/tatzenheader";

const IndexPage = ({ location }) => {
  return (
    <MainLayout location={location}>
      <div className="container mx-auto text-center">
        <TatzenHeader className="py-10">Bilder</TatzenHeader>

        Leider gibt's hier noch nix zu sehen!<br/><br/>
      </div>
    </MainLayout>
  );
};

export default IndexPage;

export const Head = () => {
  return <Seo title={"Bilder rund um die Hundefreunde Herzogenrath"} />;
};
