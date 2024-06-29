import { useState } from "react";

const RegisterForm = ({isDarkMode}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handleFirstnameChange = (event) => {
    const value = event.target.value;
    setFirstname(value);
  };

  const handleLastnameChange = (event) => {
    const value = event.target.value;
    setLastname(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValidUsername = /^[A-Za-z0-9]+$/.test(username);
    if (!isValidUsername) {
      alert("Username can only contain (A-Z), (a-z), and (0-9)");
      return;
    }
    const isValidPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,16}$/.test(
      password
    );

    if (!isValidPassword) {
      alert(
        "Password must contain (A-Z), (a-z), (0-9) and 8-16 characters"
      );
      return;
    }
    const isValidFirstname = /^[A-Za-z]+$/.test(firstname)
    if (!isValidFirstname) {
      alert("Firstname must contain (A-Z) and (a-z)");
      return;
    }
    const isValidLastname = /^[A-Za-z]+$/.test(lastname)
    if (!isValidLastname) {
      alert("Lastname must contain (A-Z) and (a-z)");
      return;
    }
    console.log("Submitted:", { username, password, firstname, lastname });
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
          <section className="w-[60%] flex flex-col gap-[20px] mb-[40px] items-center">
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
            <input
              type="text"
              placeholder="Firstname"
              required
              className="input input-bordered  w-full max-w-xs focus:outline-none"
              onChange={handleFirstnameChange}
            />
            <input
              type="text"
              placeholder="Lastname"
              required
              className="input input-bordered  w-full max-w-xs focus:outline-none"
              onChange={handleLastnameChange}
            />
          </section>
          {isDarkMode?<button className="btn btn-block bg-none input input-bordered hover:bg-gray-700 w-[40%] hover:text-green-400">
            Register
          </button>:<button className="btn btn-block bg-none input input-bordered hover:bg-green-400 w-[40%] hover:text-white">
            Register
          </button>}
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
