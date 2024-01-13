import { Route, Routes } from "react-router";
import { Home, NotFound } from "./pages";
import "./App.css";
import { useEffect } from "react";
import { getAllSchedules } from "./features/email/action";
import { useAppDispatch } from "./app/hooks";
import { Toaster } from "./components";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllSchedules());
  }, []);

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
