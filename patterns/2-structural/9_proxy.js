function networkFetch(url) {
  return `${url} - Ответ с сервера`;
}

const cache = new Set();

const proxiedFetch = new Proxy(networkFetch, {
  apply: (target, thisArg, args) => {
    const url = args[0];

    if (cache.has(url)) {
      return `${url} - Ответ из кэша`;
    } else {
      cache.add(url);
      return Reflect.apply(target, thisArg, args); // Запускаем этот метод с параметрами
    }
  },
});

console.log(proxiedFetch("angular.io"));
console.log(proxiedFetch("react.io"));
console.log(proxiedFetch("vue.io"));
console.log(proxiedFetch("angular.io"));
console.log(proxiedFetch("angular.io"));
console.log(proxiedFetch("angular.io"));
console.log(proxiedFetch("vue.io"));
console.log(proxiedFetch("vue.io"));
