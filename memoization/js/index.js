const memo = (callback) => {
  const cache = {};

  return (...args) => {
    const key = JSON.stringify(args);

    if (key in cache) {
      return cache[key];
    }

    const result = callback(...args);
    cache[key] = result;

    return result;
  };
};

const sum = (a, b) => {
  console.log("Вычисляем сумму ", a, "+", b);

  return a + b;
};

const memoSum = memo(sum);

memoSum(1, 2);
memoSum(1, 2);
memoSum(2, 2);
memoSum(100, 2);
memoSum(10, 2);
memoSum(1, 2);
memoSum(10, 2);
