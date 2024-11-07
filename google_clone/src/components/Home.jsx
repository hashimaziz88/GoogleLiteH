import React from "react";
import { Input } from "@material-tailwind/react";
import "./style/Home.css";
const Home = () => {
  return (
    <div className="center">
      <h1>Home</h1>
      <div className="image-border">
        <div className="center">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
            className="center"
          ></img>
        </div>
      </div>
      <div className="w-72">
        <Input label="Input With Icon" icon={<i className="fas fa-heart" />} />
      </div>
    </div>
  );
};

export default Home;
