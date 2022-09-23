import * as React from "react";
import useSiteMetadata from "../hooks/useStaticQuery";

const Seo = ({ title }) => {
  const metaData = useSiteMetadata();

  return (
    <title>
      {title} | {metaData.title}
    </title>
  );
};

export default Seo;
