// Раньше:

// function Server(name, ip) {
//   this.name = name;
//   this.ip = ip;
// }

// Server.prototype.getUrl = function () {
//   return `https://${this.ip}:80`;
// };

// Через классы

class Server {
  constructor(name, ip) {
    this.name = name;
    this.ip = ip;
  }

  getUrl() {
    return `https://${this.ip}:80`;
  }
}

const aws = new Server("aws", "110.20.33.44");
const azure = new Server("azure", "1.2.3.44");
console.log(aws.getUrl());
console.log(azure.getUrl());
