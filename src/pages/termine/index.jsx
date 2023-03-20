import * as React from "react";
import { graphql } from "gatsby";

import Seo from "../../components/tools/seo";
import MainLayout from "../../layouts/main";

import TatzenHeader from "../../components/tools/tatzenheader";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

import deLocale from "@fullcalendar/core/locales/de";

const IndexPage = ({ location, data }) => {
  return (
    <MainLayout location={location}>
      <div>
        <div className="my-10">
          <TatzenHeader fill="#FFCC00">
            Termine und Veranstaltungen
          </TatzenHeader>
        </div>

        <FullCalendar
          plugins={[dayGridPlugin, googleCalendarPlugin]}
          initialView="dayGridMonth"
          locale={deLocale}
          googleCalendarApiKey="AIzaSyC7fCTvVXSNMHXUeSMEh6XurcmK4wZo1QY"
          events={{
            googleCalendarId:
              "77e2ab544631c95b518df51db11be7c10c1476de2646f2008b65b86f25c378a6@group.calendar.google.com",
          }}
        />
      </div>
    </MainLayout>
  );
};

export default IndexPage;

export const Head = () => {
  return <Seo />;
};

export const pageQuery = graphql`
  query BlogIndexQuery {
    posts: allContentfulBlogPost(sort: { publishedAt: DESC }, limit: 5) {
      nodes {
        title
        subTitle
        slug
        tags
        publishedAt(formatString: "dddd, D. MMMM YYYY", locale: "de")
        image {
          gatsbyImage(
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            width: 800
            quality: 50
          )
        }
        body {
          raw
        }
      }
    }
    tags: allContentfulBlogPost {
      distinct(field: { tags: SELECT })
    }
  }
`;
