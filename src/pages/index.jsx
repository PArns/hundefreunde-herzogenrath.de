import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";

import Seo from "../components/tools/seo";
import MainLayout from "../layouts/main";

import Kurse from "../sections/kurse";

import FixedBackground from "../components/tools/fixedbackground";
import HumdMitWelpe from "../images/backgrounds/hundmitwelpe.jpg";

const IndexPage = ({ location }) => {
  return (
    <MainLayout location={location}>
      <Kurse />

      <FixedBackground image={HumdMitWelpe}>
        Test 123
        <br />
        Test 123
        <br />
        Test 123
        <br />
        Test 123
        <br />
        Test 123
        <br />
        Test 123
        <br />
        Test 123
        <br />
        Test 123
        <br />
        Test 123
        <br />
        Test 123
        <br />
        Test 123
        <br />
        Test 123
        <br />
        Test 123
        <br />
        Test 123
        <br />
        Test 123
        <br />
        Test 123
        <br />
        Test 123
        <br />
        Test 123
        <br />
      </FixedBackground>
    </MainLayout>
  );
};

export default IndexPage;

export const Head = () => {
  return <Seo />;
};
