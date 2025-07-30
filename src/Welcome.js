import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Welcomepage = () => {
  const location = useLocation();
  const name = location.state?.name || "";
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log("Sending token:", token);
        if (!token) {
          setError("Token not found. Please log in");
          setLoading(false);
          return;
        }
        const res = await axios.get(
          "http://localhost:5000/api/auth/userprofile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(res.data);
      } catch (error) {
        setError("failed to fech userprofile");
        setLoading(false);
      } finally {
        const userData = localStorage.getItem("user");
        if (userData) {
          setUser(JSON.parse(userData.name));
        }
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Welcome, {name ? name : "User"}!</h1>
    </div>
  );
};
export default Welcomepage;
