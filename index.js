let driverID = 0

let store = {drivers: []}

class Driver {
  constructor(name) {
    this.id = ++driverID
    this.name = name

    store.drivers.push(this)
  }
}
