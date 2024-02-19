import { lazy, Suspense } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import AppLoadingPage from "../pages/appLoadingPage/AppLoadingPage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import HomePage from "../pages/homePage/HomePage";
import FavoritePage from "../pages/favoritePage/FavoritePage";
import BouncingLoadingIndicator from "../components/BouncingLoadingIndicator/BouncingLoadingIndicator";

import { Route as NavRoute } from "../constants/routes-enum";
import { NavigationService } from "../services";

const SearchPage = lazy(() => import("../pages/searchPage/SearchPage"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLoadingPage />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route
        path="search"
        element={
          <ErrorBoundary
            FallbackComponent={ErrorPage}
            onReset={() => {
              NavigationService.navigate(NavRoute.Home);
            }}
          >
            <Suspense fallback={<BouncingLoadingIndicator />}>
              <SearchPage />
            </Suspense>
          </ErrorBoundary>
        }
      />
      <Route path="favorite" element={<FavoritePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
