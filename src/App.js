import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import LoginPage from "./components/login_page/Login_page.jsx";
import RegisterPage from "./components/register_page/RegisterPage.jsx";
import PageNotFound from "./components/pagenotfound/PageNotFound.jsx";
import RecuperareParola from "./components/recuperareparola/RecuperareParola.jsx";
import HomePage from "./components/home_page/HomePage.jsx";
import ProfilPrestatorServiciu from "./components/profilPrestatorServiciu/ProfilPrestatorServiciu.jsx";
import AnuntPagina from "./components/anuntPagina/AnuntPagina.jsx";
import ContulMeu from "./components/contulmeu/ContulMeu.jsx";
import PaginaMesagerie from "./components/mesagerie/PaginaMesagerie.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/lostpassword" element={<RecuperareParola />} />
        <Route path="/prestator_serviciu" element={<ProfilPrestatorServiciu />} />
        <Route path="/pagina_anunt" element={<AnuntPagina />} />
        <Route path="/contulmeu" element={<ContulMeu />} />
        <Route path="/mesagerie" element={<PaginaMesagerie />} />
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
