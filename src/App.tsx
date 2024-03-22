import { SetStateAction, useState } from "react";
import NavBar from "./Components/Navbar";
import Login from "./Components/Login";
import HomePage from "./Components/HomePage";
import FacultyLogin from "./Components/FacultyLogin";

function App() {
  const [currentPage, setCurrentPage] = useState("login");

  const handlePageChange = (page: SetStateAction<string>) => {
    setCurrentPage(page);
  };

  return (
    <>
      <NavBar setCurrentPage={handlePageChange} navItems={[]} />
      {currentPage === "login" && <Login setCurrentPage={handlePageChange} />}
      {currentPage === "home-student" && <HomePage />}
      {currentPage === "faculty-login" && (
        <FacultyLogin setCurrentPage={handlePageChange} />
      )}
    </>
  );
}

export default App;
