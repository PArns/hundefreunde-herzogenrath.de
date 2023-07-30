import * as React from "react";
import { useEffect, useState } from "react";

const Age = ({ birthday }) => {
  const [yearsOld, setYearsOld] = useState();

  useEffect(() => {
    const today = new Date();
    const birthDate = new Date(birthday);
    const m = today.getMonth() - birthDate.getMonth();
    var age = today.getFullYear() - birthDate.getFullYear();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    setYearsOld(age);
  }, [yearsOld, setYearsOld, birthday]);

  return <>{yearsOld}</>;
};

export default Age;
