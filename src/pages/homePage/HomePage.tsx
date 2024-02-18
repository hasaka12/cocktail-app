import { Fragment } from "react";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import { homePageData } from "../../constants/home-page";

import HomeCard from "./HomeCard";

export default function HomePage() {
  return (
    <div className="mx-4">
      {Object.values(homePageData).map((category) => (
        <Fragment key={category.key}>
          <div className="my-10">
            <Divider>
              <Typography variant="h4" component="h4">
                {category.name}
              </Typography>
            </Divider>
          </div>
          <HomeCard keyValue={category.key} />
        </Fragment>
      ))}
    </div>
  );
}
