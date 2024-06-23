import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[70svh] gap-5">
      <div className="flex flex-col items-center p-10 rounded-xl gap-2 shadow-xl">
        <h2 className="text-2xl font-bold text-red-300">404 Error</h2>
        <hr className="border-1 border-slate-500 w-[100%]" />
        <p className="text-center">
          page not found
          <br />
          please return to pevious page
        </p>
      </div>
      <Link to={"/"}>
        <span className="font-bold text-green-400">{"<"}</span> Back to{" "}
        <span className=" text-green-400">Landing page</span>{" "}
      </Link>
    </div>
  );
};

export default ErrorPage;
