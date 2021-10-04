import React from "react";
import SearchBarBlock from "./SearchBarBlock";
import CategoryBlock from "./CategoryBlock";
import LatestListingBlock from "./LatestListingBlock";
import NotificationBlock from "./NotificationBlock";

const Home = (props) => {
  return (
    <React.Fragment>
      <SearchBarBlock />
      <CategoryBlock />
      <LatestListingBlock />
      <NotificationBlock />
    </React.Fragment>
  );
};

export default Home;
