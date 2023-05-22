const sorting = require("../../app");

describe("Books names test suite", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ]

    const result = sorting.sortByName(input)

    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]

    expect(result).toEqual(expected);
  });

  it("No sorting", () => {
    const input = [
      "Гарри Поттер",
      "Гарри Поттер",
    ]

    const result = sorting.sortByName(input)

    const expected = [
      "Гарри Поттер",
      "Гарри Поттер",
    ]

    expect(result).toEqual(expected);
  });
});
