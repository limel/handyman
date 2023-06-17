import "./App.css";
import { useEffect, useState } from "react";
import Chat from "./components/Chat";
import Auth from "./components/Auth";

function App() {
  var isLogged = localStorage.getItem('isLoggedIn');
  const [isLoggedIn, setIsLoggedIn] = useState(isLogged);

  return <main className="app">{isLoggedIn ? <Chat /> : <Auth setIsLoggedIn={setIsLoggedIn} />}</main>;
}

export default App;
