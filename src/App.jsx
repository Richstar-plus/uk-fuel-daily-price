import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/Home";
import { RootLayout } from "./pages/root";
import {FuelLoader} from "./api/FuelPriceLoader";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
        loader: () => FuelLoader()
      },
    ]
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;




