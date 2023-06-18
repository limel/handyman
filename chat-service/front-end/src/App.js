import "./App.css";
import { useEffect, useState } from "react";
import Chat from "./components/Chat";
import Auth from "./components/Auth";

function App() {
  const isLogged = localStorage.getItem('isLoggedIn');
  const [isLoggedIn, setIsLoggedIn] = useState(isLogged);

  return <main className="app">{isLoggedIn ? <Chat /> : <Chat />}</main>;
}

export default App;
