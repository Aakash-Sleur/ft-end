import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Registerpage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      await axios.post("https://bck-end.vercel.app/api/auth", {
        name,
        email,
        password,
      });
      alert("Registered Successfully");
      navigate("/");
    } catch (error) {
      console.log("doesn't save in register", error);
      alert("doesn't save in register", error);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-tl from-sky-600 border-t-violet-500 to-teal-400 flex  justify-center items-center">
      <form
        className="border-2 border-black  rounded-2xl  bg-slate-300 h-[500px] w-[500px] "
        onSubmit={handleSubmit}
      >
        <h1 className="flex justify-center text-2xl font-sans font-bold">
          Welcome to Register
        </h1>
        <div className="pl-6 pt-7 pr-4 font-sans font-bold">
          <div className="flex flex-col gap-2 ">
            <label>USERNAME</label>
            <input
              className="h-10 pl-2"
              type="text"
              placeholder="Enter a Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>EMAIL-ID</label>
            <input
              className="h-10 pl-2"
              type="email"
              placeholder="Enter a User Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>PASSWORD</label>
            <input
              className="h-10 pl-2"
              type="text"
              placeholder="Enter a User Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="pt-16">
            <button
              className="border-2 border-blue-700 rounded-3xl bg-cyan-300 h-10 w-[457px]"
              type="submit"
            >
              SIGN IN
            </button>
          </div>
          <p className="pl-40  pt-14">
            Please
            <Link to="/" className="underline  pl-3">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Registerpage;
