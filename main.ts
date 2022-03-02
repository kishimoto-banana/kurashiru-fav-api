type Recipe = {
  url: string;
  title: string;
  imageUrl: string;
};

type Recipes = Recipe[];

const doGet = (e) => {
  const dummyRecipes: Recipes = [
    {
      url: "https://www.kurashiru.com/recipes/f210773b-6c49-48b0-a830-49461571f31f",
      title: "牛肉とキノコのレンジトマト煮",
      imageUrl:
        "https://video.kurashiru.com/production/videos/f210773b-6c49-48b0-a830-49461571f31f/compressed_thumbnail_square_large.jpg?1639367889",
    },
    {
      url: "https://www.kurashiru.com/recipes/f210773b-6c49-48b0-a830-49461571f31f",
      title: "牛肉とキノコのレンジトマト煮",
      imageUrl:
        "https://video.kurashiru.com/production/videos/f210773b-6c49-48b0-a830-49461571f31f/compressed_thumbnail_square_large.jpg?1639367889",
    },
  ];

  return encode(dummyRecipes);
};

const encode = (data: Recipes): GoogleAppsScript.Content.TextOutput => {
  const json = JSON.stringify(data);
  const output = ContentService.createTextOutput(json);
  return output.setMimeType(ContentService.MimeType.JSON);
};
