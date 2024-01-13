import { Route, Routes } from "react-router";
import { Home, NotFound } from "./pages";
import "./App.css";
import { useEffect } from "react";
import { getAllSchedules } from "./features/email/action";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { Loader, Toaster } from "./components";

function App() {
  const { status } = useAppSelector((state) => state.email);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllSchedules());
  }, []);

  return (
    <>
      <Toaster />
      {status === "loading" && <Loader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
