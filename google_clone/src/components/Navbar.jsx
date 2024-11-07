import React from "react";
import { Typography, Button, IconButton } from "@material-tailwind/react";
import "./style/Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineAppstore } from "react-icons/ai"; // Import Google Apps icon
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
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden bg-transparent ">
          <IconButton
            className="text-white text-lg hover:bg-gray-700 p-1"
            aria-label="Google Apps"
            size="m"
          >
            <AiOutlineAppstore />
          </IconButton>
          <Button variant="outlined" size="l" fullWidth fullHeight>
            Log In
          </Button>
        </div>
      </Typography>
    </ul>
  );

  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
      <nav>
        <div className="flex items-center justify-between text-white-900">
          <Link to="/GoogleLiteH">Google Clone</Link>
          <div className="flex items-center gap-4">
            <div>{navList}</div>
          </div>
        </div>
      </nav>
    </div>
  );
}
