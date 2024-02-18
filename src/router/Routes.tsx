import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppLoadingPage from "../pages/appLoadingPage/AppLoadingPage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import HomePage from "../pages/homePage/HomePage";
import SearchPage from "../pages/searchPage/SearchPage";
import FavoritePage from "../pages/favoritePage/FavoritePage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLoadingPage />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path="search" element={<SearchPage />} />
      <Route path="favorite" element={<FavoritePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
