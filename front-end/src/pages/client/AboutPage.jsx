import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const AboutPage = () => {
  const data = useContext(UserContext);
  console.log(data);
  return <div>{JSON.stringify(data)}</div>;
};

export default AboutPage;
