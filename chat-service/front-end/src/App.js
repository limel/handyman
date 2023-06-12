import "./App.css";
import { useEffect, useState } from "react";
import Chat from "./components/Chat";
import Auth from "./components/Auth";


const LOCAL_STORAGE_KEY = "chatsList";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <main className="app">
      {isLoggedIn ? <Chat /> : <Auth />}
    </main>
  );
}

export default App;
