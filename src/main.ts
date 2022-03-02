const SHEET_ID = "14rxmcAjxXvkd_r332SzjndSQnGMCyGWWorHN_KdsRPg";
const SHEET_NAME = "お気に入りレシピ";

type Recipe = {
  url: string;
  title: string;
  imageUrl: string;
};

type Recipes = Recipe[];

const doGet = (e) => {
  const rows = fetchRecipes();
  const recipes = rows.map((row) => array2Obj(row));
  const reversedRecipes = recipes.reverse(); // 古い順になっているので新しい順にする
  return encode(reversedRecipes);
};

const fetchRecipes = (): string[][] => {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  const lastRow = sheet.getLastRow();
  const data = sheet.getRange(2, 1, lastRow - 1, 7).getValues();
  return data;
};

export const array2Obj = (data: string[]): Recipe => {
  const [url, title, imageUrl] = data;
  return { url, title, imageUrl };
};

const encode = (data: Recipes): GoogleAppsScript.Content.TextOutput => {
  const json = JSON.stringify(data);
  const output = ContentService.createTextOutput(json);
  return output.setMimeType(ContentService.MimeType.JSON);
};
