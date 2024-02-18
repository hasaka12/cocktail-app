import {
  RouteKeysWithParams,
  RouteKeysWithoutParams,
  RouteParams,
  RoutesMap,
} from "../constants/navigation-routes";

export class LinkService {
  public static link<URoute extends RouteKeysWithoutParams>(
    route: URoute
  ): string;
  public static link<TRoute extends RouteKeysWithParams>(
    route: TRoute,
    params: RouteParams<TRoute>
  ): string;
  public static link<
    TRoute extends RouteKeysWithParams,
    URoute extends RouteKeysWithoutParams
  >(route: TRoute | URoute, params?: RouteParams<TRoute>): string {
    if (!params) {
      const routeFn: Pick<typeof RoutesMap, RouteKeysWithoutParams>[URoute] =
        RoutesMap[route as URoute];
      return routeFn();
    } else {
      const routeFn: any = RoutesMap[route as TRoute];
      return routeFn(params);
    }
  }
}
