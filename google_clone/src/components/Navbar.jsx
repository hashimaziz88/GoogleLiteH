import React from "react";
import { Navbar, Typography, Button } from "@material-tailwind/react";
import "./style/Navbar.css";
import { Link } from "react-router-dom";

export function StickyNavbar() {
  const navList = (
    <ul className="flex gap-6 items-center">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <Link to="/GoogleLiteH/advanced-search">Advanced Search</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <Link to="/GoogleLiteH/images">Images</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button size="sm" fullWidth></Button>
          <Button variant="outlined" size="sm" fullWidth>
            Log In
          </Button>
        </div>
      </Typography>
    </ul>
  );

  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 bg-inherit border-none">
        <div className="flex items-center justify-between text-white-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Google Clone
          </Typography>
          <div className="flex items-center gap-4">
            <div>{navList}</div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
