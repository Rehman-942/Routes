import React from "react";
import { useNavigate } from "react-router-dom";
import { useCreateAuthContext } from "../ContextApi/ContextApi";

export default function SignIn() {
  const [email, setEmail] = React.useState("");
  const [pswd, setPswd] = React.useState("");

  const navigate = useNavigate();
  const { handleAuthChange } = useCreateAuthContext();

  const handleClick = () => {
    if (email !== "admin" && pswd !== "admin") {
      return;
    }
    handleAuthChange(true);
    console.log("Goto Cart");
    navigate("/cart");
  };

  return (
    <div>
      <input
        id="email"
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <input
        id="pswd"
        type="password"
        onChange={(e) => {
          setPswd(e.target.value);
        }}
      ></input>
      <button onClick={handleClick}>Sign In</button>
    </div>
  );
}
