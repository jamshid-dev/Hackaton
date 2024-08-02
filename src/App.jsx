<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import Abaut from "./components/abaut/abaut";
import { Navbar } from "@material-tailwind/react";

export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/abaut" element={<Abaut/>} />
    </Routes>
    </>
=======
import RuyUtish from "./components/ruh";

export default function App() {
  return (
    <div>
      <h1>Lorem ipsum dolor sit.</h1>
      <RuyUtish />
    </div>
>>>>>>> 9db3f4e248016f5fcc4668435b5b80d6cd4e75cf
  );
}
