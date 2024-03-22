/*import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";*/

import "./App.css";
import NavBar from "./Components/Navbar";
import UploadWindow from "./Components/UploadWindow";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
//import { SetStateAction } from "react";
function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <NavBar setCurrentPage={() => {}} navItems={[]}></NavBar>
      <Login setCurrentPage={() => {}} setUserId={() => {}}></Login>
      <UploadWindow></UploadWindow>
      <Footer></Footer>
    </>
  );
}

export default App;
