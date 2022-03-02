import { array2Obj } from "../src/main";

describe("配列をオブジェクトに変換", () => {
  test("urlとtitleとimageUrl", () => {
    const data = [
      "http://example.com",
      "例だよ",
      "http://example.com/image.jpg",
    ];

    const expected = {
      url: "http://example.com",
      title: "例だよ",
      imageUrl: "http://example.com/image.jpg",
    };
    expect(array2Obj(data)).toEqual(expected);
  });
});
