const utils = require("./index");

describe("[Exercise 1] trimProperties", () => {
  test("[1] returns an object with the properties trimmed", () => {
    // EXAMPLE
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
  test("[2] returns a copy, leaving the original object intact", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const actual = utils.trimProperties(input);
    expect(actual).not.toBe(input);
    expect(input).toBe(input);
  });
});

describe("[Exercise 2] trimPropertiesMutation", () => {
  test("[3] returns an object with the properties trimmed", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toEqual(expected);
  });
  test("[4] the object returned is the exact same one we passed in", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toBe(input);
  });
});

describe("[Exercise 3] findLargestInteger", () => {
  test("[5] returns the largest number in an array of objects { integer: 2 }", () => {
    const input = [
      { integer: 1 },
      { integer: 2 },
      { integer: -1 },
      { integer: 3 },
    ];
    const expected = 3;
    const actual = utils.findLargestInteger(input);
    expect(actual).toBe(expected);
  });
});

describe("[Exercise 4] Counter", () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3); // each test must start with a fresh couter
  });

  test("[6] the FIRST CALL of counter.countDown returns the initial count", () => {
    const expected = 3;
    const actual = counter.countDown();
    expect(actual).toBe(expected);
  });
  test("[7] the SECOND CALL of counter.countDown returns the initial count minus one", () => {
    counter.countDown();
    const expected = 2;
    const second = counter.countDown();
    expect(second).toBe(expected);
  });
  test("[8] the count eventually reaches zero but does not go below zero", () => {
    counter.countDown();
    counter.countDown();
    counter.countDown();
    const expected = 0;
    const actual = counter.countDown();
    expect(actual).toBe(expected);
    const lowestCount = counter.countDown();
    expect(lowestCount).toBe(expected);
  });
});

describe("[Exercise 5] Seasons", () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons(); // each test must start with fresh seasons
  });
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const expected = "summer";
    const actual = seasons.next();
    expect(actual).toBe(expected);
  });
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    const expected = "fall";
    seasons.next();
    const actual = seasons.next();
    expect(actual).toBe(expected);
  });
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    const expected = "winter";
    seasons.next();
    seasons.next();
    const actual = seasons.next();
    expect(actual).toBe(expected);
  });
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 3; i++) {
      seasons.next();
    }
    const expected = "spring";
    const actual = seasons.next();
    expect(actual).toBe(expected);
  });
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    for (let i = 0; i < 4; i++) {
      seasons.next();
    }
    const expected = "summer";
    const actual = seasons.next();
    expect(actual).toBe(expected);
  });
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 39; i++) {
      seasons.next();
    }
    const expected = "spring";
    const actual = seasons.next();
    expect(actual).toBe(expected);
  });
});

describe("[Exercise 6] Car", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car("focus", 20, 30); // each test must start with a fresh car
  });
  test("[15] driving the car returns the updated odometer", () => {
    const expected = 10;
    const actual = focus.drive(10);
    expect(actual).toBe(expected);
  });
  test("[16] driving the car uses gas", () => {
    const expected = 19;
    focus.drive(30);
    const actual = focus.tank;
    expect(actual).toBe(expected);
  });
  test("[17] refueling allows to keep driving", () => {
    focus.drive(600);
    expect(focus.tank).toBe(0);
    const expected = 600;
    const actual = focus.refuel(20);
    expect(actual).toBe(expected);
  });
  test("[18] adding fuel to a full tank has no effect", () => {
    const expected = 600;
    const actual = focus.refuel(90000);
    expect(actual).toBe(expected);
  });
});

describe("[Exercise 7] isEvenNumberAsync", () => {
  // test('[19] resolves true if passed an even number', () => {})
  // test('[20] resolves false if passed an odd number', () => {})
});
