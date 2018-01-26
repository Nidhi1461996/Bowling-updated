const score = require('./bowling');

describe('Inputs without spare or strike', () => {
  test('With scores not equal to zero', () => {
    expect(score([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
  });

  // with score 0

  test('With zero score included', () => {
    expect(score([0, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(87);
  });

  test('With all scores as zero', () => {
    expect(score([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(0);
  });
});


describe('Inputs with spares but not in the 10th frame', () => {
  test('With one spare', () => {
    expect(score([4, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(94);
  });

  test('With more than one spare', () => {
    expect(score([4, 6, 3, 6, 3, 6, 4, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(98);
  });
});


describe('Inputs with strikes but not in the 10th frame', () => {
  test('With strike in the first chance', () => {
    expect(score([10, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3])).toBe(100);
  });

  test('With strike in the middle', () => {
    expect(score([3, 6, 3, 6, 10, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3])).toBe(100);
  });
});


describe('Inputs with strikes and spares not in the 10th frame', () => {
  test('With strike in the first frame and spare in the second frame', () => {
    expect(score([10, 6, 4, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3])).toBe(108);
  });

  test('With strike and spare in the middle', () => {
    expect(score([3, 6, 3, 6, 10, 6, 3, 6, 4, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3])).toBe(107);
  });

  test('With spare in the first frame and strike in the middle', () => {
    expect(score([4, 6, 3, 6, 10, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3])).toBe(104);
  });
});


describe('Inputs with multiple spares', () => {
  test('With two consecutive spares', () => {
    expect(score([4, 6, 4, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(99);
  });

  test('With not consecutive spares', () => {
    expect(score([3, 6, 4, 6, 3, 6, 3, 7, 4, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(103);
  });

  test('With all strikes except the last frame', () => {
    expect(score([4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 3, 6])).toBe(134);
  });
});


describe('Inputs with multiple strikes', () => {
  test('With two consecutive strikes', () => {
    expect(score([10, 10, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(114);
  });

  test('With not consecutive spares', () => {
    expect(score([10, 10, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(114);
  });
});

describe('Inputs for the last frame', () => {
  test('With spare and strike in the last frame', () => {
    expect(score([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 10])).toBe(20);
  });

  test('With all strikes in the last frame', () => {
    expect(score([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10])).toBe(30);
  });

  test('With stike and spare in the last frame', () => {
    expect(score([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 7, 3])).toBe(20);
  });

  test('With stike in the last frame', () => {
    expect(score([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 7, 1])).toBe(18);
  });
});

describe('Inputs with all spares or strikes', () => {
  test('With all strikes', () => {
    expect(score([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toBe(300);
  });

  test('With all spares', () => {
    expect(score([6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6])).toBe(160);
  });
});

// checking for valid Inputs
describe('checking for valid Inputs', () => {
  test('with empty array', () => {
    expect(score([])).toBe('invalid input');
  });

  test('with negative scores', () => {
    expect(score([-10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toBe('invalid input');
  });

  test('with scores more than 10', () => {
    expect(score([6, 4, 11, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6])).toBe('invalid input');
  });

  test('with scores which sum up more than 10', () => {
    expect(score([6, 5, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6])).toBe('invalid input');
  });

  test('with small array', () => {
    expect(score([6, 4, 11, 4, 6, 4, 6, 4])).toBe('invalid input');
  });

  test('with large array', () => {
    expect(score([6, 4, 11, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 10, 10, 10])).toBe('invalid input');
  });

  test('with no fill ball for strike in the last frame', () => {
    expect(score([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10])).toBe('invalid input');
  });

  test('with no fill ball for a spare in the last frame', () => {
    expect(score([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 4])).toBe('invalid input');
  });

  test('with undefined as a score', () => {
    expect(score([6, 4, 11, 4, 6, 4, 6, 4, 6, 4, 6, undefined, 6, 4, 6, 4, 6, 4, 6, 4, 6])).toBe('invalid input');
  });

  test('with NaN as a score', () => {
    expect(score([6, 4, 11, 4, 6, 4, 6, 4, 6, 4, 6, NaN, 6, 4, 6, 4, 6, 4, 6, 4, 6])).toBe('invalid input');
  });

  test('with undefined as a fill ball', () => {
    expect(score([6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, undefined])).toBe('invalid input');
  });

  test('with NaN as a fill ball', () => {
    expect(score([6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, NaN])).toBe('invalid input');
  });
});
