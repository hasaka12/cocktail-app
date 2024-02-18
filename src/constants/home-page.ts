export type HomeKey = "Gin" | "Vodka" | "Wine" | "Tequila";

interface HomeInfo {
  key: HomeKey;
  name: string;
}

export const homePageData: Record<string, HomeInfo> = {
  gin: { key: "Gin", name: "Gin Cocktails" },
  vodka: { key: "Vodka", name: "Vodka Cocktails" },
  Wine: { key: "Wine", name: "Wine Cocktails" },
  Tequila: { key: "Tequila", name: "Tequila Cocktails" },
};
