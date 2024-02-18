import { Route } from "./routes-enum";

export const RoutesMap = {
  [Route.Home]: () => "/",
  [Route.Search]: () => "/search",
  [Route.Favorite]: () => "/favorite",
  [Route.All]: () => "/all",
  [Route.Settings]: () => "/settings",
};

export type RouteKeys = keyof typeof RoutesMap;

// utility types to help us generate `RouteKeysWithParams` and `RouteKeysWithoutParams`
type IsRouteMapHasParams<TRoute extends RouteKeys> = Parameters<
  (typeof RoutesMap)[TRoute]
> extends []
  ? never
  : TRoute;
type IsRouteMapHasNoParams<TRoute extends RouteKeys> = Parameters<
  (typeof RoutesMap)[TRoute]
> extends []
  ? TRoute
  : never;

// wrapper functions to distribute generic type
type IsRouteMapHasParamsWrapper<TRoute extends RouteKeys> =
  TRoute extends RouteKeys ? IsRouteMapHasParams<TRoute> : never;
type IsRouteMapHasNoParamsWrapper<TRoute extends RouteKeys> =
  TRoute extends RouteKeys ? IsRouteMapHasNoParams<TRoute> : never;
// end of utility types

export type RouteKeysWithParams = IsRouteMapHasParamsWrapper<RouteKeys>;
export type RouteKeysWithoutParams = IsRouteMapHasNoParamsWrapper<RouteKeys>;

export type RouteParams<TRoute extends RouteKeys> = Parameters<
  (typeof RoutesMap)[TRoute]
> extends Array<infer TParams>
  ? TParams
  : never;
