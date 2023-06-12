import s from "./Auth.module.scss";
import { useState } from "react";
import Button from "../Ui/Button";

const Auth = ({ setIsLoggedIn }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:5050/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        login,
        password,
      },
    }).then((res) => res);
    setIsLoggedIn(response.ok);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={s.form}>
      <label className={s.input__wrapper}>
        <span className={s.label}>Login:</span>
        <input
          type="text"
          value={login}
          placeholder="login"
          onChange={(e) => {
            setLogin(e.target.value);
          }}
        />
      </label>
      <label className={s.input__wrapper}>
        <span className={s.label}>Password:</span>
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          autoComplete="off"
        />
      </label>
      <Button type="submit">submit</Button>
    </form>
  );
};

export default Auth;
