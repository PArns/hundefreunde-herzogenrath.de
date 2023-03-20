import * as React from "react";
import { useEffect, useState } from "react";

const Permalink = () => {
  const [linkText, setLinkText] = useState("Hier klicken, um URL zu kopieren");

  const copyToClipboard = () => {
    setLinkText("Kopiert!");
    navigator.clipboard.writeText(window.location.href);
  };

  useEffect(() => {
    setTimeout(() => {
      setLinkText(window.location.href);
    }, 2000);
  }, [linkText]);

  return (
    <button
      title="URL in die Zwischenablage kopieren"
      className="font-semibold"
      onClick={copyToClipboard}
    >
      {linkText}
    </button>
  );
};

export default Permalink;
