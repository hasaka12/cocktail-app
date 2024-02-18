import searchCocktailSlice, { getSearchCocktail } from "./searchCocktailSlice";

test("getSearchCocktail.fulfilled updates state.data", () => {
  expect(
    searchCocktailSlice(
      { data: null },
      getSearchCocktail.fulfilled("Gin", "requestId", "fulfilled")
    )
  ).toEqual({ data: "Gin" });
});
