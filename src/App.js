import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import LoginPage from "./components/login_page/Login_page.jsx";
import RegisterPage from "./components/register_page/RegisterPage.jsx";
import PageNotFound from "./components/pagenotfound/PageNotFound.jsx";
import RecuperareParola from "./components/recuperareparola/RecuperareParola.jsx";
import HomePage from "./components/home_page/HomePage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/lostpassword" element={<RecuperareParola />} />
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
