import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
const Loginpage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://bck-end.vercel.app/api/auth/login", {
        email,
        password,
      });
      console.log(res.data);
      console.log("Token:", res.data.token); // check to token is send or not

      localStorage.setItem("token", res.data.token);
      alert("Login Successfully");
      navigate("/welcome", { state: { name: res.data.user.name } });
    } catch (error) {
      console.log("message", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-300 to-violet-500 flex  justify-center items-center">
      <form
        className="border-2 border-black  rounded-2xl  bg-pink-300 h-[350px] w-[500px] "
        onSubmit={handleSubmit}
      >
        <h1 className="flex justify-center text-2xl font-sans font-bold">
          Welcome to Login
        </h1>
        <div className="pl-6 pt-7 pr-4 font-sans font-bold">
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

          <div className="pt-7">
            <button
              className="border-2 border-blue-700 rounded-3xl bg-cyan-300 h-10 w-[457px]"
              type="submit"
            >
              SIGN IN
            </button>
            <p className="pt-10">
              Does haven't Account?{" "}
              <Link to="/register " className="underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Loginpage;
