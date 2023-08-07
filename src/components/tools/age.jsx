import * as React from "react";
import { useEffect, useState } from "react";

const Age = ({ birthday, single, plural }) => {
  const [yearsOld, setYearsOld] = useState();
  const [pluralize, setPluralize] = useState("");

  useEffect(() => {
    const today = new Date();
    const birthDate = new Date(birthday);
    const m = today.getMonth() - birthDate.getMonth();
    var age = today.getFullYear() - birthDate.getFullYear();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    setYearsOld(age);

    if (single && plural) {
      if (age == 1) setPluralize(single);
      else setPluralize(plural);
    }
  }, [yearsOld, setYearsOld, pluralize, setPluralize, birthday]);

  return (
    <>
      {yearsOld}
      {pluralize}
    </>
  );
};

export default Age;
