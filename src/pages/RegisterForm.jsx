import React from "react";

const RegisterForm = () => {
  return (
    <form className="w-[100%] flex justify-center h-[600px] py-[30px]">
      <div className="w-[80%] flex justify-center">
        <div className="min-[325px] w-[600px] flex flex-col items-center bg-base-100 shadow-lg rounded-[0px]">
          <section className="flex justify-center text-[40px] mb-[60px] mt-[30px]">
            <span className="text-green-400">C</span>LOVER
          </section>
          <section className="w-[60%] flex flex-col gap-[40px] mb-[60px] items-center">
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered  w-full max-w-xs focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered  w-full max-w-xs focus:outline-none"
            />
          </section>
          <button className="btn btn-block input input-bordered hover:bg-gray-200 w-[40%] text-black">
            Register
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
