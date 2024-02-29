import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import LoginPage from "./components/login_page/Login_page.jsx";
import RegisterPage from "./components/register_page/RegisterPage.jsx";
import PageNotFound from "./components/pagenotfound/PageNotFound.jsx";
import RecuperareParola from "./components/recuperareparola/RecuperareParola.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/inregistrare" element={<RegisterPage />}/>
        <Route path="/recuperareparola" element={<RecuperareParola />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
