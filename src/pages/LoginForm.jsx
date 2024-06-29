import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValidUsername = /^[A-Za-z0-9]+$/.test(username);
    if (!isValidUsername) {
      alert("Username can only contain (A-Z), (a-z), and (0-9)");
      return;
    }
    const isValidPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(
      password
    );

    if (!isValidPassword) {
      alert(
        "Password must contain (A-Z), (a-z), (0-9) and at least 8 characters"
      );
      return;
    }
    console.log("Submitted:", { username, password });
  };
  return (
    <form
      className="w-[100%] flex justify-center h-[600px] py-[30px]"
      onSubmit={handleSubmit}
    >
      <div className="w-[80%] flex justify-center">
        <div className="min-[325px] w-[600px] flex flex-col items-center bg-base-100 shadow-lg rounded-[0px]">
          <section className="flex justify-center text-[40px] mb-[60px] mt-[30px]">
            <span className="text-green-400">C</span>LOVER
          </section>
          <section className="w-[60%] flex flex-col gap-[40px] mb-[60px] items-center">
            <input
              type="text"
              placeholder="Username"
              required
              className="input input-bordered  w-full max-w-xs focus:outline-none"
              onChange={handleUsernameChange}
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="input input-bordered  w-full max-w-xs focus:outline-none"
              onChange={handlePasswordChange}
            />
          </section>
          <button className="btn btn-block bg-none input input-bordered hover:bg-gray-200 w-[40%]">
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
