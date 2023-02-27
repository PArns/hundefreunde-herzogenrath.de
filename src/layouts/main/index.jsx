import * as React from "react";
import { Analytics } from "@vercel/analytics/react";

const MainLayout = ({ children }) => {
  return (
    <div>
      {children}

      <Analytics />
    </div>
  );
};

export default MainLayout;
