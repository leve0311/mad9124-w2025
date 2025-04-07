function add(x, y) {
  return x + y;
}

test("our first test", () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});

function addToObject(obj1, obj2) {
  return { ...obj2, ...obj1 };
}

test("another test", () => {
  const result = addToObject({ one: "1" }, { two: "2" });
  expect(result).toEqual({ one: "1", two: "2" });
});

function mockMongoCreate(input) {
  return { _id: Math.PI, ...input };
}

test("another test", () => {
  const result = mockMongoCreate({ one: "1" });
  expect(result).toMatchObject({ one: "1" });
});
