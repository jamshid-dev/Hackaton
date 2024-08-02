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
  );
}
