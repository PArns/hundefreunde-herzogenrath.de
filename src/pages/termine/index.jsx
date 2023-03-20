import * as React from "react";

import Seo from "../../components/tools/seo";
import MainLayout from "../../layouts/main";

import TatzenHeader from "../../components/tools/tatzenheader";
import Kurse from "../../sections/kurse";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

import deLocale from "@fullcalendar/core/locales/de";

const IndexPage = ({ location }) => {
  const eventData = {
    googleCalendarId: process.env.GATSBY_GOOGLE_CALENDAR_ID,
  };

  return (
    <MainLayout location={location}>
      <div className="my-10">
        <TatzenHeader fill="#FFCC00">Termine und Veranstaltungen</TatzenHeader>
      </div>

      <Kurse className="mb-10" />

      <div className="hidden pb-10 lg:block">
        <FullCalendar
          plugins={[dayGridPlugin, googleCalendarPlugin]}
          initialView="dayGridMonth"
          locale={deLocale}
          googleCalendarApiKey={process.env.GATSBY_GOOGLE_API_KEY}
          events={eventData}
        />
      </div>

      <div className="pb-10 lg:hidden">
        <FullCalendar
          plugins={[listPlugin, googleCalendarPlugin]}
          initialView="listWeek"
          locale={deLocale}
          googleCalendarApiKey={process.env.GATSBY_GOOGLE_API_KEY}
          events={eventData}
        />
      </div>
    </MainLayout>
  );
};

export default IndexPage;

export const Head = () => {
  return <Seo />;
};
