class Database {
  constructor(data) {
    if (Database.exists) {
      console.log("Database already exists");
      return Database.instance;
    }

    Database.instance = this;
    Database.exists = true;

    this.data = data;
  }

  getData() {
    return this.data;
  }
}

// Новая база данных:
const mongo = new Database("MongoDB");
console.log(mongo.getData());

// Ещё одну базу данных:
const mySql = new Database("MySQL");
console.log(mySql.getData());
