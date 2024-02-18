import {
  RouteKeysWithParams,
  RouteKeysWithoutParams,
  RouteParams,
} from "../constants/navigation-routes";

import { LinkService } from "./link.service";
import { router } from "../router";

export class NavigationService {
  public static navigate<URoute extends RouteKeysWithoutParams>(
    route: URoute
  ): void;
  public static navigate<TRoute extends RouteKeysWithParams>(
    route: TRoute | string,
    params: RouteParams<TRoute>,
    isRouteWithParam?: boolean
  ): void;
  public static navigate<
    TRoute extends RouteKeysWithParams,
    URoute extends RouteKeysWithoutParams
  >(
    route: TRoute | URoute | string,
    params?: RouteParams<TRoute>,
    isRouteWithParam?: boolean
  ): void {
    if (isRouteWithParam) {
      router.navigate(route);
    } else if (!params) {
      router.navigate(LinkService.link(route as URoute));
    } else {
      router.navigate(LinkService.link(route as TRoute, params));
    }
  }

  public static goBack<URoute extends RouteKeysWithoutParams>(
    fallbackRoute: URoute
  ): void;

  public static goBack<TRoute extends RouteKeysWithParams>(
    fallbackRoute: TRoute,
    params: RouteParams<TRoute>
  ): void;

  public static goBack<
    TRoute extends RouteKeysWithParams,
    URoute extends RouteKeysWithoutParams
  >(fallbackRoute: TRoute | URoute, params?: RouteParams<TRoute>) {
    // go back in history if a history within the app is available
    // there seems to be no standard way to tackle this problem through react router.
    // the solution used here follows https://stackoverflow.com/a/71647428
    if (window.history.state && window.history.state.idx > 0) {
      router.navigate(-1);
      return;
    }

    // there is no history within the app, therefore we replace current route with the fallback route

    if (!params) {
      router.navigate(LinkService.link(fallbackRoute as URoute), {
        replace: true,
      });
      return;
    }

    router.navigate(LinkService.link(fallbackRoute as TRoute, params), {
      replace: true,
    });
  }
}
