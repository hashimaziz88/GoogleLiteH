import React from "react";
import { Input } from "@material-tailwind/react";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>

      <div className="w-72">
        <Input label="Input With Icon" icon={<i className="fas fa-heart" />} />
      </div>
    </div>
  );
};

export default Home;
