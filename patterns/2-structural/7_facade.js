class Complaints {
  constructor() {
    this.complaints = [];
  }

  reply(complaint) {}

  add(complaint) {
    this.complaints.push(complaint);

    return this.reply(complaint);
  }
}

class ProductComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Product complaint ${id} from ${customer} with details ${details}`;
  }
}

class ServiceComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Service complaint ${id} from ${customer} with details ${details}`;
  }
}

class ComplaintRegistry {
  register(customer, type, details) {
    const id = Date.now();

    let complaint;

    if (type === "service") {
      complaint = new ServiceComplaints();
    } else {
      complaint = new ProductComplaints();
    }

    return complaint.add({ id, customer, details });
  }
}

const registry = new ComplaintRegistry();

console.log(
  registry.register("John Doe", "service", "I have a problem in service")
);
console.log(
  registry.register("Paladin", "product", "Не могу включить компьютер")
);
