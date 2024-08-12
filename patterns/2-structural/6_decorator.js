class Server {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }

  get url() {
    return `https://${this.ip}:${this.port}`;
  }
}

// Декоратор
function aws(server) {
  server.isAWS = true;
  server.awsInfo = function () {
    return server.url;
  };

  return server;
}

const s1 = aws(new Server("127.0.0.1", 80));
console.log(s1.awsInfo());
console.log(s1.isAWS);

// Декоратор
function azure(server) {
  server.isAzure = true;
  server.port += 500;

  return server;
}

const s2 = azure(new Server("256.256.0.1", 8080));
console.log(s2.isAzure);
console.log(s2.url);

console.log(s2.isAWS);
console.log(s1.url);
