class MySum {
  constructor(initialValue = 42) {
    this.sum = initialValue;
  }

  add(value) {
    this.sum += value;

    return this;
  }

  sub(value) {
    this.sum -= value;

    return this;
  }
}

const sum1 = new MySum();
console.log(sum1.add(1).add(2).add(3).sub(42).sum);

const sum2 = new MySum(0);
console.log(sum2.add(1).add(2).add(3).sub(42).sum);
