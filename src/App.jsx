import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Footer />
      <Body />
    </>
  );
}

export default App;
