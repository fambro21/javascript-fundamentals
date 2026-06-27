// The Visitor Pattern lets you add new operations to objects
// without changing their classes. The operation is placed in
// a separate visitor class.

function Employeee(name, salary) {
  this.name = name;
  this.salary = salary;
}

Employeee.prototype = {
  getSalary: function () {
    return this.salary;
  },
  setSalary: function (sal) {
    this.salary = sal;
  },
  accept: function (visitorFunction) {
    visitorFunction(this);
  },
};

const devsage = new Employeee("DevSag", 10000);
console.log(devsage.getSalary());

function ExtraSalary(emp) {
  emp.setSalary(emp.getSalary() * 2);
}

devsage.accept(ExtraSalary);
console.log(devsage);
