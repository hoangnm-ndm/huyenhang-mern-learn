import { ToastContainer } from "react-toastify";
import "./App.css";
import AppRouter from "./routes/RouterProvider";
import Example from "./pages/admin/Example";

function App() {
  return (
    <>
      <AppRouter />
      <ToastContainer />
      <Example />
    </>
  );
}

export default App;
